#!/usr/bin/env node
/**
 * OpenSpec A2A 使用示例
 * 
 * 演示如何在多个 Agent 之间共享任务状态
 */

const { OpenSpecA2A } = require('./openspec-a2a');

async function example() {
  // 初始化
  const openspec = new OpenSpecA2A({
    storageDir: './.openspec-demo'
  });

  console.log('=== OpenSpec A2A 使用示例 ===\n');

  // 1. Agent A 创建任务
  console.log('1. Agent A 创建任务...');
  const task = openspec.createTask({
    title: '实现用户认证系统',
    description: '包括登录、注册、密码重置功能',
    owner: 'agent-a',
    initialCheckpoint: {
      state: 'running',
      progress: 0,
      completed: [],
      current: '设计数据库 schema',
      pending: ['实现登录 API', '实现注册 API', '前端界面'],
      context: {
        files: ['./auth-design.md'],
        techStack: ['Node.js', 'PostgreSQL', 'JWT'],
        notes: '需要先确定用户表结构'
      },
      agent: {
        id: 'agent-a',
        name: '设计 Agent'
      }
    }
  });
  console.log(`   任务创建: ${task.id}`);

  // 2. Agent A 执行部分任务并保存进度
  console.log('\n2. Agent A 完成数据库设计...');
  openspec.saveCheckpoint(task.id, {
    state: 'running',
    progress: 30,
    completed: ['设计数据库 schema'],
    current: '实现登录 API',
    pending: ['实现注册 API', '前端界面'],
    context: {
      files: ['./auth-design.md', './schema.sql'],
      schema: 'users(id, email, password_hash, created_at)',
      notes: '数据库设计完成，开始写 API'
    },
    agent: {
      id: 'agent-a',
      name: '设计 Agent'
    }
  });

  // 3. Agent B 查看可继续的任务
  console.log('\n3. Agent B 查看可继续的任务...');
  const resumable = openspec.listResumableTasks({ states: ['running'] });
  console.log(`   找到 ${resumable.length} 个可继续的任务`);

  // 4. Agent B 读取任务详情
  console.log('\n4. Agent B 读取任务详情...');
  const taskState = openspec.loadTask(task.id);
  console.log(`   任务: ${taskState.title}`);
  console.log(`   当前进度: ${taskState.current.progress}%`);
  console.log(`   正在处理: ${taskState.current.current}`);
  console.log(`   待办: ${taskState.current.pending.join(', ')}`);

  // 5. Agent B 获取锁并继续
  console.log('\n5. Agent B 获取锁...');
  const lock = openspec.acquireLock(task.id, {
    agentId: 'agent-b',
    agentName: '后端 Agent',
    ttl: 3600
  });
  
  if (lock.success) {
    console.log('   成功获取锁，开始处理...');

    // 模拟 Agent B 完成任务
    openspec.saveCheckpoint(task.id, {
      state: 'completed',
      progress: 100,
      completed: ['设计数据库 schema', '实现登录 API', '实现注册 API', '前端界面'],
      current: null,
      pending: [],
      context: {
        files: ['./auth-design.md', './schema.sql', './auth-api.js', './auth-ui.jsx'],
        notes: '所有功能已完成，测试通过'
      },
      agent: {
        id: 'agent-b',
        name: '后端 Agent'
      }
    });

    openspec.updateTaskState(task.id, 'completed', {
      completedAt: Date.now()
    });

    // 释放锁
    openspec.releaseLock(task.id, 'agent-b');
    console.log('   任务完成，锁已释放');
  }

  // 6. 导出任务状态
  console.log('\n6. 导出任务状态...');
  const exported = openspec.exportTask(task.id);
  console.log('   导出的状态:');
  console.log(exported.slice(0, 500) + '...');

  console.log('\n=== 示例完成 ===');
}

// 运行示例
example().catch(console.error);
