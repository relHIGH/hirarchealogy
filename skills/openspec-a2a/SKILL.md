# openspec-a2a SKILL.md

跨 Agent 任务状态共享与接力（基于 A2A 协议规范）。

## 功能

- 保存任务进度到共享状态存储
- 其他 agent 可以读取并继续任务
- 支持任务分片、依赖追踪、进度锁定

## 安装

```bash
npx clawhub install openspec-a2a
```

## 核心概念

| 概念 | 说明 |
|------|------|
| Task | 一个可分配的任务单元 |
| TaskState | 任务的当前状态（pending/assigned/running/completed/failed） |
| Checkpoint | 任务执行中的保存点 |
| Context | 任务所需的共享上下文 |

## 使用方式

### 1. 保存任务进度（当前 agent）

```javascript
// 在任务执行中保存进度
const checkpoint = {
  taskId: "task-001",
  state: "running",
  progress: 60, // 百分比
  completed: ["step1", "step2"],
  current: "step3",
  pending: ["step4"],
  context: {
    files: ["/path/to/file1.md"],
    variables: { key: "value" },
    notes: "当前处理到第三步..."
  },
  agent: {
    id: "agent-1",
    name: "Coding Agent",
    timestamp: Date.now()
  }
};

await OpenSpec.saveCheckpoint(checkpoint);
```

### 2. 读取并继续任务（其他 agent）

```javascript
// 获取可继续的任务
const available = await OpenSpec.listResumableTasks();

// 读取特定任务的最新状态
const task = await OpenSpec.loadTask("task-001");

// 锁定并继续（防止冲突）
const lock = await OpenSpec.acquireLock("task-001", {
  agentId: "agent-2",
  ttl: 3600 // 秒
});

if (lock.success) {
  // 继续执行任务
  await processStep(task.current);
}
```

### 3. 任务分片与依赖

```javascript
// 创建主任务和子任务
await OpenSpec.createTask({
  id: "feature-x",
  title: "实现功能X",
  state: "running",
  subtasks: [
    { id: "feature-x-db", title: "数据库设计", state: "completed" },
    { id: "feature-x-api", title: "API 开发", state: "running" },
    { id: "feature-x-ui", title: "前端界面", state: "pending", dependsOn: ["feature-x-api"] }
  ]
});
```

## CLI 命令

```bash
# 列出可继续的任务
openspec-a2a list --state running --state pending

# 查看任务详情
openspec-a2a show task-001

# 导出任务状态（用于迁移）
openspec-a2a export task-001 > task-state.json

# 导入任务状态
openspec-a2a import task-state.json
```

## 存储位置

默认存储在 workspace 的 `.openspec/` 目录：

```
workspace/
└── .openspec/
    ├── tasks/
    │   ├── task-001/
    │   │   ├── meta.json      # 任务元信息
    │   │   ├── checkpoints/   # 检查点历史
    │   │   └── lock.json      # 当前锁定信息
    │   └── ...
    └── index.json             # 任务索引
```

## OpenClaw 集成

在 AGENTS.md 或代码中使用：

```markdown
## 任务接力规范

1. 每完成一个步骤，调用 OpenSpec.saveCheckpoint()
2. 长时间任务必须设置检查点（每5分钟或每完成一个子任务）
3. 接手任务时先调用 OpenSpec.loadTask() 获取完整上下文
4. 完成后更新状态为 completed 并释放锁
```

## API 参考

### OpenSpec.saveCheckpoint(checkpoint)

保存任务检查点。

### OpenSpec.loadTask(taskId)

加载任务完整状态（包括最新检查点）。

### OpenSpec.listResumableTasks(filter)

列出可继续的任务，支持按状态过滤。

### OpenSpec.acquireLock(taskId, options)

获取任务锁，防止多个 agent 同时处理。

### OpenSpec.releaseLock(taskId, agentId)

释放任务锁。

### OpenSpec.createTask(spec)

创建新任务。

### OpenSpec.updateTaskState(taskId, state)

更新任务状态。

## 配置

在 `openclaw.json` 中配置：

```json5
{
  skills: {
    openspecA2a: {
      storage: "~/.openclaw/openspec",  // 存储路径
      maxCheckpoints: 50,               // 每个任务最大检查点数
      defaultLockTtl: 3600,             // 默认锁超时（秒）
      syncInterval: 30                  // 同步间隔（秒）
    }
  }
}
```

## 示例：多 Agent 协作流程

```
Agent A                    Agent B
  |                          |
  |  1. 创建任务 feature-x   |
  |------------------------->|
  |                          |
  |  2. 完成任务分析部分     |
  |  3. saveCheckpoint()     |
  |                          |
  |                          |  4. listResumableTasks()
  |                          |  5. loadTask("feature-x")
  |                          |  6. acquireLock()
  |                          |  7. 继续执行编码部分
  |                          |  8. saveCheckpoint()
  |                          |  9. releaseLock()
  |                          |
  |                          |  10. 通知完成
```

## 注意事项

1. 始终先获取锁再修改任务状态
2. 检查点不要过于频繁（影响性能）
3. 重要操作后立即 saveCheckpoint()
4. 定期清理已完成的旧任务

## 相关链接

- [A2A Protocol](https://github.com/a2aproject/A2A)
- [OpenAI Agents SDK](https://github.com/openai/openai-agents-python)
- [OpenClaw Multi-Agent](https://docs.openclaw.ai/concepts/multi-agent)
