---
layout: default
title: 冶辛
---

<div class="vn-wrapper" id="vnWrapper">
  
  <!-- 视觉层：场景图 -->
  <div class="vn-scene" id="vnScene">
    <div class="scene-bg" id="sceneBg"></div>
    <!-- 可交互物品层 -->
    <div class="scene-objects" id="sceneObjects"></div>
  </div>
  
  <!-- UI层：对话/叙述 -->
  <div class="vn-ui">
    <!-- 角色名 -->
    <div class="vn-name" id="charName"></div>
    
    <!-- 文本框 -->
    <div class="vn-textbox" id="textBox" onclick="advance()">
      <div class="vn-text" id="vnText"></div>
      <div class="vn-next" id="nextIndicator">▼</div>
    </div>
    
    <!-- 选项菜单 -->
    <div class="vn-choices" id="vnChoices"></div>
    
    <!-- 底部控制栏 -->
    <div class="vn-controls">
      <div class="vn-progress">
        <span id="pageNum">1</span> / <span id="totalNum">12</span>
      </div>
      <div class="vn-buttons">
        <button onclick="toggleCollection()" title="收集品">📦</button>
        <button onclick="toggleLog()" title="历史">📜</button>
        <button onclick="skipToSummary()" title="跳过">⏩</button>
      </div>
    </div>
  </div>
  
  <!-- 收集品面板 -->
  <div class="vn-panel" id="collectionPanel">
    <div class="panel-header">
      <h3>探索收获</h3>
      <button onclick="toggleCollection()">✕</button>
    </div>
    <div class="panel-content">
      <div class="collection-section">
        <h4>主题节点</h4>
        <div class="collection-grid" id="nodesGrid"></div>
      </div>
      <div class="collection-section">
        <h4>历史文物</h4>
        <div class="collection-grid" id="relicsGrid"></div>
      </div>
    </div>
  </div>
  
  <!-- 历史记录面板 -->
  <div class="vn-panel" id="logPanel">
    <div class="panel-header">
      <h3>回顾</h3>
      <button onclick="toggleLog()">✕</button>
    </div>
    <div class="panel-content" id="logContent"></div>
  </div>
  
  <!-- 总结页 -->
  <div class="vn-summary" id="summaryScreen" style="display:none">
    <h2>探索完成</h2>
    <div class="summary-stats">
      <div class="stat-item">
        <span class="stat-num" id="nodeCount">0</span>
        <span class="stat-label">主题节点</span>
      </div>
      <div class="stat-item">
        <span class="stat-num" id="relicCount">0</span>
        <span class="stat-label">历史文物</span>
      </div>
    </div>
    <div class="summary-collection" id="summaryCollection"></div>
    <div class="summary-actions">
      <button class="btn-primary" onclick="restart()">重新探索</button>
      <button onclick="exportProgress()">分享</button>
    </div>
  </div>
</div>

<style>
/* 重置容器 */
.container { 
  background: transparent !important; 
  box-shadow: none !important; 
  padding: 0 !important; 
  max-width: 100% !important; 
  margin: 0 !important; 
}
#content-wrapper { padding: 0 !important; }
header { display: none !important; }

/* 文游主容器 */
.vn-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 场景层 */
.vn-scene {
  flex: 1;
  position: relative;
  overflow: hidden;
}

.scene-bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2d1f1f 0%, #1a1515 50%, #0d0d0d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* 场景占位符 */
.scene-bg::before {
  content: attr(data-scene);
  color: rgba(255,255,255,0.1);
  font-size: 4rem;
  font-family: "Songti SC", serif;
  letter-spacing: 1rem;
}

/* 可交互物品 */
.scene-objects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.scene-object {
  position: absolute;
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.3s;
}

.scene-object:hover {
  transform: scale(1.1);
}

.scene-object::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px dashed rgba(128,0,32,0.5);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
}

/* UI层 */
.vn-ui {
  background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 60%, transparent 100%);
  padding: 20px 40px 30px;
  position: relative;
}

/* 角色名 */
.vn-name {
  color: var(--accent);
  font-size: 0.9rem;
  letter-spacing: 3px;
  margin-bottom: 8px;
  font-family: "Songti SC", serif;
  min-height: 1.2em;
}

/* 文本框 */
.vn-textbox {
  background: rgba(20,15,15,0.9);
  border: 1px solid rgba(128,0,32,0.3);
  border-radius: 8px;
  padding: 20px 25px;
  min-height: 100px;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s;
}

.vn-textbox:hover {
  border-color: rgba(128,0,32,0.6);
}

.vn-text {
  color: #e8e0d8;
  font-size: 1rem;
  line-height: 1.8;
  font-family: "Songti SC", serif;
}

.vn-next {
  position: absolute;
  bottom: 10px;
  right: 15px;
  color: var(--accent);
  font-size: 0.8rem;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}

/* 选项 */
.vn-choices {
  display: none;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.vn-choices.active {
  display: flex;
}

.vn-choice-btn {
  background: rgba(128,0,32,0.2);
  border: 1px solid rgba(128,0,32,0.4);
  color: #e8e0d8;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  text-align: left;
  font-family: "Songti SC", serif;
  transition: all 0.3s;
}

.vn-choice-btn:hover {
  background: rgba(128,0,32,0.4);
  border-color: var(--accent);
  padding-left: 25px;
}

/* 控制栏 */
.vn-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.vn-progress {
  color: #666;
  font-size: 0.75rem;
  letter-spacing: 2px;
}

.vn-buttons button {
  background: transparent;
  border: none;
  color: #888;
  font-size: 1rem;
  cursor: pointer;
  padding: 5px 10px;
  transition: color 0.3s;
}

.vn-buttons button:hover {
  color: var(--accent);
}

/* 面板 */
.vn-panel {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.95);
  width: 80%;
  max-width: 500px;
  max-height: 70vh;
  background: rgba(20,15,15,0.98);
  border: 1px solid rgba(128,0,32,0.3);
  border-radius: 12px;
  display: none;
  flex-direction: column;
  opacity: 0;
  transition: all 0.3s;
  z-index: 1000;
}

.vn-panel.active {
  display: flex;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(128,0,32,0.2);
}

.panel-header h3 {
  color: var(--accent);
  font-family: "Songti SC", serif;
  font-size: 1rem;
  margin: 0;
}

.panel-header button {
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 1rem;
}

.panel-content {
  padding: 20px;
  overflow-y: auto;
}

.collection-section {
  margin-bottom: 20px;
}

.collection-section h4 {
  color: #888;
  font-size: 0.8rem;
  margin-bottom: 10px;
  font-family: "Songti SC", serif;
}

.collection-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.collection-item {
  padding: 8px 14px;
  background: rgba(128,0,32,0.15);
  border: 1px dashed rgba(128,0,32,0.3);
  border-radius: 15px;
  font-size: 0.8rem;
  color: #666;
  font-family: "Songti SC", serif;
}

.collection-item.collected {
  background: var(--accent);
  border-style: solid;
  color: white;
}

/* 总结页 */
.vn-summary {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10,8,8,0.98);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.vn-summary h2 {
  color: var(--accent);
  font-family: "Songti SC", serif;
  font-size: 2rem;
  letter-spacing: 5px;
  margin-bottom: 40px;
}

.summary-stats {
  display: flex;
  gap: 60px;
  margin-bottom: 40px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-num {
  font-size: 3rem;
  color: var(--accent);
  font-family: "Songti SC", serif;
}

.stat-label {
  color: #888;
  font-size: 0.85rem;
  letter-spacing: 2px;
}

.summary-collection {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: 600px;
  margin-bottom: 40px;
}

.summary-actions {
  display: flex;
  gap: 15px;
}

.summary-actions button {
  padding: 12px 30px;
  border-radius: 20px;
  font-family: "Songti SC", serif;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: var(--accent);
  border: none;
  color: white;
}

.summary-actions button:not(.btn-primary) {
  background: transparent;
  border: 1px solid rgba(128,0,32,0.4);
  color: #888;
}

/* 打字光标 */
.typing::after {
  content: '|';
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 响应式 */
@media (max-width: 768px) {
  .vn-ui { padding: 15px 20px 20px; }
  .vn-textbox { padding: 15px; min-height: 80px; }
  .vn-text { font-size: 0.9rem; }
  .summary-stats { gap: 40px; }
  .stat-num { font-size: 2.5rem; }
}
</style>

<script>
// 游戏数据
var storyData = [
  { 
    id: 1, 
    name: "", 
    text: "前271年，上党郡。\n你被山包围，被炉火照亮。",
    scene: "矿山",
    objects: []
  },
  { 
    id: 2, 
    name: "冶辛", 
    text: "六岁。爹让我往炉子里添炭，差点把头发烧了。",
    scene: "工坊",
    objects: [{name: "炉火", x: 60, y: 40, node: "炉火", theme: "感"}]
  },
  { 
    id: 3, 
    name: "冶辛", 
    text: "八岁。我能分辨矿石了——铁的沉，废石轻，敲起来声音不一样。",
    scene: "矿山",
    objects: [{name: "矿石", x: 30, y: 70, node: "矿石", theme: "旅"}]
  },
  { 
    id: 4, 
    name: "父亲", 
    text: ""像挑瓜，熟的和生的拍两下就知道。"",
    scene: "工坊",
    objects: []
  },
  { 
    id: 5, 
    name: "", 
    text: "铁水从炉口流出来，红得发亮，像岩浆。爹稳稳接住，倒进——",
    scene: "工坊",
    objects: [{name: "铁水", x: 50, y: 50, node: "铁水", theme: "感"}],
    choice: {
      question: "铁水倒进什么容器？",
      options: ["陶罐", "坩埚", "铁锅"],
      answer: "坩埚",
      correct: "坩埚是一种用耐火土烧制的厚壁陶罐。",
      wrong: "不对，再想一下。"
    }
  },
  { 
    id: 6, 
    name: "冶辛", 
    text: "作坊院子里永远堆着两堆东西：黑色的铁渣，和碎裂的陶片。",
    scene: "工坊",
    objects: [{name: "铁渣", x: 20, y: 80, node: "铁渣", theme: "感"}]
  },
  { 
    id: 7, 
    name: "", 
    text: "十五岁那年，来作坊的农人越来越多。秦赵两国正在打仗，农人急着翻地、收成。",
    scene: "村口",
    objects: []
  },
  { 
    id: 8, 
    name: "老农", 
    text: ""地太硬，木犁扛不住。铁犁能翻半尺深。"",
    scene: "村口",
    objects: [{name: "铁犁", x: 70, y: 60, relic: "铁犁铧"}]
  },
  { 
    id: 9, 
    name: "冶辛", 
    text: "我问爹，为什么铁器比木头贵三倍，农人还抢着要？",
    scene: "村口",
    objects: [],
    choice: {
      question: "用铁犁的效率是木犁的几倍？",
      options: ["两倍", "三倍", "四倍"],
      answer: "两倍",
      correct: "一亩地用木犁，两个人一天翻一亩；用铁犁，一个人一天翻两亩。",
      wrong: "再算算看。"
    }
  },
  { 
    id: 10, 
    name: "", 
    text: "十八岁。作坊来了个穿皮甲的军官，开口就要"百套兵器，月底交货"。",
    scene: "工坊",
    objects: []
  },
  { 
    id: 11, 
    name: "冶辛", 
    text: "最忙的时候，作坊像个军营。士兵来取货，把成捆的矛、成袋的箭头往肩上一扛。",
    scene: "工坊",
    objects: [{name: "箭镞", x: 40, y: 50, node: "箭镞", theme: "感"}]
  },
  { 
    id: 12, 
    name: "", 
    text: "后来我听说，那年长平之战，赵国输了四十万人。\n\n我做了一辈子的铁。知道每块铁的来处，却永远猜不到它们的归途。",
    scene: "矿山",
    objects: [{name: "遗址", x: 50, y: 40, relic: "战国冶铁炉遗址"}],
    end: true
  }
];

// 状态
var currentIdx = 0;
var isTyping = false;
var collections = { nodes: {}, relics: {} };
var log = [];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  loadProgress();
  showScene(0);
});

// 显示场景
function showScene(idx) {
  currentIdx = idx;
  var data = storyData[idx];
  
  // 更新场景
  document.getElementById('sceneBg').setAttribute('data-scene', data.scene);
  document.getElementById('pageNum').textContent = idx + 1;
  document.getElementById('totalNum').textContent = storyData.length;
  
  // 角色名
  document.getElementById('charName').textContent = data.name;
  
  // 打字效果显示文本
  typeText(data.text);
  
  // 记录日志
  log.push({ name: data.name, text: data.text });
  
  // 生成可交互物品
  renderObjects(data.objects);
  
  // 处理选项
  var choicesDiv = document.getElementById('vnChoices');
  if (data.choice) {
    document.getElementById('nextIndicator').style.display = 'none';
    choicesDiv.innerHTML = '';
    data.choice.options.forEach(function(opt) {
      var btn = document.createElement('button');
      btn.className = 'vn-choice-btn';
      btn.textContent = opt;
      btn.onclick = function() { selectChoice(opt, data.choice); };
      choicesDiv.appendChild(btn);
    });
  } else {
    choicesDiv.classList.remove('active');
    document.getElementById('nextIndicator').style.display = 'block';
  }
  
  // 保存进度
  saveProgress();
}

// 打字效果
function typeText(text) {
  isTyping = true;
  var el = document.getElementById('vnText');
  el.textContent = '';
  el.classList.add('typing');
  
  var chars = text.split('');
  var i = 0;
  
  function type() {
    if (i < chars.length) {
      el.textContent += chars[i];
      i++;
      setTimeout(type, 30);
    } else {
      isTyping = false;
      el.classList.remove('typing');
      // 如果有选项，显示选项
      var data = storyData[currentIdx];
      if (data.choice) {
        document.getElementById('vnChoices').classList.add('active');
      }
      // 如果是结尾，显示总结按钮
      if (data.end) {
        document.getElementById('nextIndicator').textContent = '探索完成';
        setTimeout(showSummary, 2000);
      }
    }
  }
  
  type();
}

// 推进
function advance() {
  if (isTyping) {
    // 跳过打字
    var data = storyData[currentIdx];
    document.getElementById('vnText').textContent = data.text;
    document.getElementById('vnText').classList.remove('typing');
    isTyping = false;
    if (data.choice) {
      document.getElementById('vnChoices').classList.add('active');
    }
    return;
  }
  
  var data = storyData[currentIdx];
  if (data.choice) return; // 有选项时不能推进
  if (data.end) {
    showSummary();
    return;
  }
  
  if (currentIdx < storyData.length - 1) {
    showScene(currentIdx + 1);
  }
}

// 渲染可交互物品
function renderObjects(objects) {
  var container = document.getElementById('sceneObjects');
  container.innerHTML = '';
  
  objects.forEach(function(obj) {
    var el = document.createElement('div');
    el.className = 'scene-object';
    el.style.left = obj.x + '%';
    el.style.top = obj.y + '%';
    el.title = obj.name;
    el.onclick = function(e) {
      e.stopPropagation();
      collectObject(obj);
    };
    container.appendChild(el);
  });
}

// 收集物品
function collectObject(obj) {
  if (obj.node) {
    if (!collections.nodes[obj.node]) {
      collections.nodes[obj.node] = { theme: obj.theme };
      showToast('点亮节点：' + obj.node);
      updateCollectionUI();
    }
  }
  if (obj.relic) {
    if (!collections.relics[obj.relic]) {
      collections.relics[obj.relic] = true;
      showToast('收集文物：' + obj.relic);
      updateCollectionUI();
    }
  }
}

// 选择题
function selectChoice(selected, choice) {
  var isCorrect = selected === choice.answer;
  
  // 显示结果
  var resultText = isCorrect ? choice.correct : choice.wrong;
  document.getElementById('vnText').textContent = resultText;
  document.getElementById('vnChoices').classList.remove('active');
  document.getElementById('nextIndicator').style.display = 'block';
  
  // 延迟后推进
  setTimeout(function() {
    if (currentIdx < storyData.length - 1) {
      showScene(currentIdx + 1);
    }
  }, 2000);
}

// 切换收集面板
function toggleCollection() {
  document.getElementById('collectionPanel').classList.toggle('active');
  document.getElementById('logPanel').classList.remove('active');
}

// 切换日志面板
function toggleLog() {
  document.getElementById('logPanel').classList.toggle('active');
  document.getElementById('collectionPanel').classList.remove('active');
  
  // 渲染日志
  var content = document.getElementById('logContent');
  content.innerHTML = log.map(function(entry) {
    return '<div class="log-entry"><strong>' + (entry.name || '叙述') + '</strong><p>' + entry.text + '</p></div>';
  }).join('');
}

// 更新收集UI
function updateCollectionUI() {
  var nodesGrid = document.getElementById('nodesGrid');
  var relicsGrid = document.getElementById('relicsGrid');
  
  nodesGrid.innerHTML = Object.keys(collections.nodes).map(function(node) {
    return '<span class="collection-item collected">' + node + '</span>';
  }).join('');
  
  relicsGrid.innerHTML = Object.keys(collections.relics).map(function(relic) {
    return '<span class="collection-item collected">' + relic + '</span>';
  }).join('');
}

// 显示总结
function showSummary() {
  document.getElementById('summaryScreen').style.display = 'flex';
  document.getElementById('nodeCount').textContent = Object.keys(collections.nodes).length;
  document.getElementById('relicCount').textContent = Object.keys(collections.relics).length;
  
  var container = document.getElementById('summaryCollection');
  var allItems = Object.keys(collections.nodes).concat(Object.keys(collections.relics));
  container.innerHTML = allItems.map(function(item) {
    return '<span class="collection-item collected">' + item + '</span>';
  }).join('');
}

// 跳过到总结
function skipToSummary() {
  showSummary();
}

// 重新开始
function restart() {
  currentIdx = 0;
  collections = { nodes: {}, relics: {} };
  log = [];
  document.getElementById('summaryScreen').style.display = 'none';
  localStorage.removeItem('hr_yexin_progress');
  showScene(0);
}

// 保存进度
function saveProgress() {
  var data = {
    idx: currentIdx,
    collections: collections,
    log: log
  };
  localStorage.setItem('hr_yexin_progress', JSON.stringify(data));
}

// 加载进度
function loadProgress() {
  var saved = localStorage.getItem('hr_yexin_progress');
  if (saved) {
    var data = JSON.parse(saved);
    collections = data.collections || { nodes: {}, relics: {} };
    log = data.log || [];
  }
}

// 导出进度
function exportProgress() {
  alert('分享功能开发中');
}

// Toast提示
function showToast(msg) {
  var toast = document.createElement('div');
  toast.textContent = msg;
  toast.style.cssText = 'position:fixed;top:100px;left:50%;transform:translateX(-50%);background:rgba(128,0,32,0.9);color:white;padding:10px 20px;border-radius:20px;font-size:0.85rem;z-index:3000;';
  document.body.appendChild(toast);
  setTimeout(function() { toast.remove(); }, 2000);
}
</script>