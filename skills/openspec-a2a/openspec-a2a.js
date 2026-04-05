#!/usr/bin/env node
/**
 * OpenSpec A2A - 跨 Agent 任务状态管理
 * 
 * 提供标准化的任务状态存储、检查点保存、任务接力功能
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 默认配置
const DEFAULT_CONFIG = {
  storageDir: process.env.OPENSPEC_STORAGE || path.join(process.env.HOME || process.env.USERPROFILE, '.openclaw/openspec'),
  maxCheckpoints: 50,
  defaultLockTtl: 3600,
};

class OpenSpecA2A {
  constructor(config = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.storageDir = this.config.storageDir;
    this.ensureStorage();
  }

  ensureStorage() {
    if (!fs.existsSync(this.storageDir)) {
      fs.mkdirSync(this.storageDir, { recursive: true });
    }
    const tasksDir = path.join(this.storageDir, 'tasks');
    if (!fs.existsSync(tasksDir)) {
      fs.mkdirSync(tasksDir, { recursive: true });
    }
  }

  getTaskDir(taskId) {
    return path.join(this.storageDir, 'tasks', taskId);
  }

  ensureTaskDir(taskId) {
    const dir = this.getTaskDir(taskId);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      fs.mkdirSync(path.join(dir, 'checkpoints'), { recursive: true });
    }
    return dir;
  }

  /**
   * 创建新任务
   */
  createTask(spec) {
    const taskId = spec.id || this.generateId();
    const taskDir = this.ensureTaskDir(taskId);
    
    const task = {
      id: taskId,
      title: spec.title || 'Untitled Task',
      description: spec.description || '',
      state: spec.state || 'pending',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      owner: spec.owner || null,
      subtasks: spec.subtasks || [],
      metadata: spec.metadata || {},
    };

    fs.writeFileSync(
      path.join(taskDir, 'meta.json'),
      JSON.stringify(task, null, 2)
    );

    // 创建初始检查点
    if (spec.initialCheckpoint) {
      this.saveCheckpoint(taskId, {
        ...spec.initialCheckpoint,
        timestamp: Date.now(),
      });
    }

    return task;
  }

  /**
   * 保存任务检查点
   */
  saveCheckpoint(taskId, checkpoint) {
    const taskDir = this.ensureTaskDir(taskId);
    const checkpointsDir = path.join(taskDir, 'checkpoints');
    
    const checkpointData = {
      id: this.generateId(),
      timestamp: Date.now(),
      ...checkpoint,
    };

    const filename = `${checkpointData.timestamp}-${checkpointData.id}.json`;
    fs.writeFileSync(
      path.join(checkpointsDir, filename),
      JSON.stringify(checkpointData, null, 2)
    );

    // 更新任务元信息
    this.updateTaskMeta(taskId, {
      updatedAt: Date.now(),
      lastCheckpoint: checkpointData.id,
    });

    // 清理旧检查点
    this.cleanupCheckpoints(taskId);

    return checkpointData;
  }

  /**
   * 加载任务完整状态
   */
  loadTask(taskId) {
    const taskDir = this.getTaskDir(taskId);
    const metaPath = path.join(taskDir, 'meta.json');
    
    if (!fs.existsSync(metaPath)) {
      return null;
    }

    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    const checkpoints = this.listCheckpoints(taskId);
    const lock = this.getLock(taskId);

    return {
      ...meta,
      checkpoints,
      current: checkpoints.length > 0 ? checkpoints[checkpoints.length - 1] : null,
      lock,
    };
  }

  /**
   * 列出可继续的任务
   */
  listResumableTasks(filter = {}) {
    const tasksDir = path.join(this.storageDir, 'tasks');
    if (!fs.existsSync(tasksDir)) return [];

    const states = filter.states || ['pending', 'running'];
    const tasks = [];

    for (const entry of fs.readdirSync(tasksDir)) {
      const taskPath = path.join(tasksDir, entry, 'meta.json');
      if (fs.existsSync(taskPath)) {
        try {
          const meta = JSON.parse(fs.readFileSync(taskPath, 'utf-8'));
          if (states.includes(meta.state)) {
            const lock = this.getLock(entry);
            tasks.push({
              ...meta,
              locked: lock && lock.expiresAt > Date.now(),
              lockHolder: lock ? lock.agentId : null,
            });
          }
        } catch (e) {
          // 忽略损坏的任务文件
        }
      }
    }

    return tasks.sort((a, b) => b.updatedAt - a.updatedAt);
  }

  /**
   * 获取任务锁
   */
  acquireLock(taskId, options = {}) {
    const taskDir = this.ensureTaskDir(taskId);
    const lockPath = path.join(taskDir, 'lock.json');

    // 检查现有锁
    if (fs.existsSync(lockPath)) {
      const existing = JSON.parse(fs.readFileSync(lockPath, 'utf-8'));
      if (existing.expiresAt > Date.now()) {
        return {
          success: false,
          error: 'Task is locked by another agent',
          holder: existing.agentId,
          expiresAt: existing.expiresAt,
        };
      }
    }

    const lock = {
      taskId,
      agentId: options.agentId || 'unknown',
      agentName: options.agentName || null,
      acquiredAt: Date.now(),
      expiresAt: Date.now() + (options.ttl || this.config.defaultLockTtl) * 1000,
    };

    fs.writeFileSync(lockPath, JSON.stringify(lock, null, 2));

    return { success: true, lock };
  }

  /**
   * 释放任务锁
   */
  releaseLock(taskId, agentId) {
    const taskDir = this.getTaskDir(taskId);
    const lockPath = path.join(taskDir, 'lock.json');

    if (!fs.existsSync(lockPath)) {
      return { success: true, message: 'No lock to release' };
    }

    const lock = JSON.parse(fs.readFileSync(lockPath, 'utf-8'));
    
    if (agentId && lock.agentId !== agentId) {
      return {
        success: false,
        error: 'Lock held by different agent',
        holder: lock.agentId,
      };
    }

    fs.unlinkSync(lockPath);
    return { success: true };
  }

  /**
   * 更新任务状态
   */
  updateTaskState(taskId, state, updates = {}) {
    const taskDir = this.getTaskDir(taskId);
    const metaPath = path.join(taskDir, 'meta.json');

    if (!fs.existsSync(metaPath)) {
      throw new Error(`Task ${taskId} not found`);
    }

    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    meta.state = state;
    meta.updatedAt = Date.now();
    Object.assign(meta, updates);

    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
    return meta;
  }

  /**
   * 导出任务状态
   */
  exportTask(taskId) {
    const task = this.loadTask(taskId);
    if (!task) {
      throw new Error(`Task ${taskId} not found`);
    }
    return JSON.stringify(task, null, 2);
  }

  /**
   * 导入任务状态
   */
  importTask(taskData) {
    const data = typeof taskData === 'string' ? JSON.parse(taskData) : taskData;
    const taskId = data.id || this.generateId();
    
    const taskDir = this.ensureTaskDir(taskId);
    
    // 写入元信息
    fs.writeFileSync(
      path.join(taskDir, 'meta.json'),
      JSON.stringify({
        id: taskId,
        title: data.title,
        description: data.description,
        state: data.state,
        createdAt: data.createdAt,
        updatedAt: Date.now(),
        owner: data.owner,
        subtasks: data.subtasks || [],
        metadata: data.metadata || {},
      }, null, 2)
    );

    // 导入检查点
    if (data.checkpoints) {
      for (const cp of data.checkpoints) {
        this.saveCheckpoint(taskId, cp);
      }
    }

    return taskId;
  }

  // 内部方法
  listCheckpoints(taskId) {
    const checkpointsDir = path.join(this.getTaskDir(taskId), 'checkpoints');
    if (!fs.existsSync(checkpointsDir)) return [];

    return fs.readdirSync(checkpointsDir)
      .filter(f => f.endsWith('.json'))
      .map(f => JSON.parse(fs.readFileSync(path.join(checkpointsDir, f), 'utf-8')))
      .sort((a, b) => a.timestamp - b.timestamp);
  }

  cleanupCheckpoints(taskId) {
    const checkpoints = this.listCheckpoints(taskId);
    if (checkpoints.length > this.config.maxCheckpoints) {
      const toDelete = checkpoints.slice(0, checkpoints.length - this.config.maxCheckpoints);
      const checkpointsDir = path.join(this.getTaskDir(taskId), 'checkpoints');
      for (const cp of toDelete) {
        const filename = `${cp.timestamp}-${cp.id}.json`;
        fs.unlinkSync(path.join(checkpointsDir, filename));
      }
    }
  }

  getLock(taskId) {
    const lockPath = path.join(this.getTaskDir(taskId), 'lock.json');
    if (!fs.existsSync(lockPath)) return null;
    return JSON.parse(fs.readFileSync(lockPath, 'utf-8'));
  }

  updateTaskMeta(taskId, updates) {
    const taskDir = this.getTaskDir(taskId);
    const metaPath = path.join(taskDir, 'meta.json');
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    Object.assign(meta, updates);
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
  }

  generateId() {
    return crypto.randomUUID().slice(0, 8);
  }
}

// CLI 支持
function cli() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  const openspec = new OpenSpecA2A();

  switch (command) {
    case 'list': {
      const states = args.includes('--state') 
        ? args.slice(args.indexOf('--state') + 1).filter(a => !a.startsWith('--'))
        : ['pending', 'running'];
      const tasks = openspec.listResumableTasks({ states });
      console.log(JSON.stringify(tasks, null, 2));
      break;
    }

    case 'show': {
      const taskId = args[1];
      if (!taskId) {
        console.error('Usage: openspec-a2a show <task-id>');
        process.exit(1);
      }
      const task = openspec.loadTask(taskId);
      if (!task) {
        console.error(`Task ${taskId} not found`);
        process.exit(1);
      }
      console.log(JSON.stringify(task, null, 2));
      break;
    }

    case 'export': {
      const taskId = args[1];
      if (!taskId) {
        console.error('Usage: openspec-a2a export <task-id>');
        process.exit(1);
      }
      console.log(openspec.exportTask(taskId));
      break;
    }

    case 'import': {
      const filePath = args[1];
      if (!filePath) {
        console.error('Usage: openspec-a2a import <file-path>');
        process.exit(1);
      }
      const data = fs.readFileSync(filePath, 'utf-8');
      const taskId = openspec.importTask(data);
      console.log(`Imported task: ${taskId}`);
      break;
    }

    case 'create': {
      const title = args[1] || 'New Task';
      const task = openspec.createTask({ title });
      console.log(`Created task: ${task.id}`);
      console.log(JSON.stringify(task, null, 2));
      break;
    }

    case 'lock': {
      const taskId = args[1];
      const agentId = args[2] || 'cli-agent';
      if (!taskId) {
        console.error('Usage: openspec-a2a lock <task-id> [agent-id]');
        process.exit(1);
      }
      const result = openspec.acquireLock(taskId, { agentId });
      console.log(JSON.stringify(result, null, 2));
      break;
    }

    case 'unlock': {
      const taskId = args[1];
      const agentId = args[2];
      if (!taskId) {
        console.error('Usage: openspec-a2a unlock <task-id> [agent-id]');
        process.exit(1);
      }
      const result = openspec.releaseLock(taskId, agentId);
      console.log(JSON.stringify(result, null, 2));
      break;
    }

    default:
      console.log(`
OpenSpec A2A - 跨 Agent 任务状态管理

Usage:
  openspec-a2a list [--state <state>...]
  openspec-a2a show <task-id>
  openspec-a2a export <task-id>
  openspec-a2a import <file-path>
  openspec-a2a create <title>
  openspec-a2a lock <task-id> [agent-id]
  openspec-a2a unlock <task-id> [agent-id]

Environment:
  OPENSPEC_STORAGE  存储路径 (默认: ~/.openclaw/openspec)
      `);
  }
}

// 导出模块
module.exports = { OpenSpecA2A };

// 如果是直接运行，执行 CLI
if (require.main === module) {
  cli();
}
