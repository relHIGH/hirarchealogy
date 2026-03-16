---
layout: default
title: 关系图谱
---

<div class="graph-page">
  <div class="graph-tabs">
    <button class="graph-tab active" onclick="switchGraph('themes')">主题关联</button>
    <button class="graph-tab" onclick="switchGraph('characters')">人物关系</button>
    <button class="graph-tab" onclick="switchGraph('network')">全文网络</button>
  </div>
  
  <div id="graph-container" class="graph-container">
    <!-- 主题关联图 -->
    <div id="graph-themes" class="graph-view active">
      <div class="theme-connections">
        <div class="theme-node" data-theme="旅">
          <div class="theme-icon">旅</div>
          <div class="theme-name">古代旅行</div>
          <div class="theme-links">行 · 路 · 驿 · 游 · 记</div>
        </div>
        <div class="theme-node" data-theme="戏">
          <div class="theme-icon">戏</div>
          <div class="theme-name">戏剧艺术</div>
          <div class="theme-links">曲 · 台 · 伶 · 剧</div>
        </div>
        <div class="theme-node" data-theme="饮">
          <div class="theme-icon">饮</div>
          <div class="theme-name">饮品礼仪</div>
          <div class="theme-links">茶 · 酒 · 器 · 礼</div>
        </div>
        <div class="theme-node" data-theme="感">
          <div class="theme-icon">感</div>
          <div class="theme-name">感知情感</div>
          <div class="theme-links">情 · 境 · 忆 · 悟</div>
        </div>
      </div>
      
      <svg class="connection-lines" viewBox="0 0 800 400">
        <line x1="200" y1="100" x2="600" y2="100" stroke="#800020" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
        <line x1="200" y1="100" x2="200" y2="300" stroke="#800020" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
        <line x1="600" y1="100" x2="600" y2="300" stroke="#800020" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
        <line x1="200" y1="300" x2="600" y2="300" stroke="#800020" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
        <line x1="200" y1="100" x2="600" y2="300" stroke="#800020" stroke-width="1" stroke-dasharray="5,5" opacity="0.2"/>
        <line x1="600" y1="100" x2="200" y2="300" stroke="#800020" stroke-width="1" stroke-dasharray="5,5" opacity="0.2"/>
      </svg>
      
      <div class="graph-legend">
        <p>四大主题相互关联，共同构成古代生活的全景</p>
        <p class="legend-hint">点击主题节点进入探索 · 虚线表示概念关联</p>
      </div>
    </div>
    
    <!-- 人物关系图 -->
    <div id="graph-characters" class="graph-view">
      <div class="character-timeline">
        <div class="era-row">
          <div class="era-label">战国</div>
          <a href="./docs/生民卷/炉青/" class="char-node">炉青</div>
        </div>
        <div class="era-row">
          <div class="era-label">秦</div>
          <a href="./docs/生民卷/衡羽/" class="char-node">衡羽</div>
        </div>
        <div class="era-row">
          <div class="era-label">汉</div>
          <a href="./docs/生民卷/禾宁/" class="char-node">禾宁</div>
        </div>
        <div class="era-row">
          <div class="era-label">北魏</div>
          <a href="./docs/生民卷/石兰/" class="char-node">石兰</div>
        </div>
        <div class="era-row">
          <div class="era-label">唐</div>
          <a href="./docs/生民卷/月珑/" class="char-node">月珑</div>
        </div>
        <div class="era-row">
          <div class="era-label">五代十国</div>
          <a href="./docs/生民卷/潮音/" class="char-node">潮音</div>
        </div>
        <div class="era-row">
          <div class="era-label">宋</div>
          <a href="./docs/生民卷/清弦/" class="char-node">清弦</div>
        </div>
        <div class="era-row">
          <div class="era-label">辽</div>
          <a href="./docs/生民卷/骁雪/" class="char-node">骁雪</div>
        </div>
        <div class="era-row">
          <div class="era-label">西夏</div>
          <a href="./docs/生民卷/墨岚/" class="char-node">墨岚</div>
        </div>
        <div class="era-row">
          <div class="era-label">大理国</div>
          <a href="./docs/生民卷/茶岑/" class="char-node">茶岑</div>
        </div>
      </div>
      
      <div class="graph-legend">
        <p>十位历史人物，跨越千年时光</p>
        <p class="legend-hint">按朝代排列 · 点击人物进入故事</p>
      </div>
    </div>
    
    
    <!-- 全文网络 -->
    <div id="graph-network" class="graph-view">
      <div class="network-cloud">
        <div class="network-category">
          <h4>旅行交通</h4>
          <div class="network-tags">
            <span class="net-tag">行</span><span class="net-tag">路</span><span class="net-tag">驿</span>
            <span class="net-tag">游</span><span class="net-tag">记</span><span class="net-tag">马</span>
            <span class="net-tag">车</span><span class="net-tag">舟</span><span class="net-tag">桥</span>
          </div>
        </div>
        
        <div class="network-category">
          <h4>戏剧艺术</h4>
          <div class="network-tags">
            <span class="net-tag">曲</span><span class="net-tag">台</span><span class="net-tag">伶</span>
            <span class="net-tag">剧</span><span class="net-tag">昆</span><span class="net-tag">京</span>
            <span class="net-tag">越</span><span class="net-tag">弹</span><span class="net-tag">谱</span>
          </div>
        </div>
        
        <div class="network-category">
          <h4>饮品礼仪</h4>
          <div class="network-tags">
            <span class="net-tag">茶</span><span class="net-tag">酒</span><span class="net-tag">器</span>
            <span class="net-tag">礼</span><span class="net-tag">绿</span><span class="net-tag">红</span>
            <span class="net-tag">黄</span><span class="net-tag">白</span><span class="net-tag">盏</span>
          </div>
        </div>
        
        <div class="network-category">
          <h4>感知情感</h4>
          <div class="network-tags">
            <span class="net-tag">情</span><span class="net-tag">境</span><span class="net-tag">忆</span>
            <span class="net-tag">悟</span><span class="net-tag">乡</span><span class="net-tag">愁</span>
            <span class="net-tag">豪</span><span class="net-tag">闲</span><span class="net-tag">意</span>
          </div>
        </div>
      </div>
      
      <div class="graph-legend">
        <p>全站概念标签云，点击可探索相关条目</p>
        <p class="legend-hint">持续扩充中 · 各主题间相互交织</p>
      </div>
    </div>
  </div>
</div>

<style>
.graph-page {
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.graph-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
}

.graph-tab {
  padding: 10px 24px;
  background: transparent;
  border: 1px solid rgba(128,0,32,0.2);
  border-radius: 20px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Songti SC", serif;
  font-size: 14px;
}

.graph-tab:hover,
.graph-tab.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.graph-container {
  flex: 1;
  position: relative;
}

.graph-view {
  display: none;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.graph-view.active {
  display: flex;
}

/* 主题关联图 */
.theme-connections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  position: relative;
  z-index: 1;
}

.theme-node {
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  color: inherit;
}

.theme-node:hover {
  transform: scale(1.05);
}

.theme-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: white;
  border: 2px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-family: "Songti SC", serif;
  color: var(--accent);
  margin: 0 auto 15px;
  transition: all 0.3s;
}

.theme-node:hover .theme-icon {
  background: var(--accent);
  color: white;
}

.theme-name {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
}

.theme-links {
  font-size: 0.85rem;
  color: #888;
}

.connection-lines {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 400px;
  pointer-events: none;
  z-index: 0;
}

/* 人物关系图 */
.character-timeline {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 600px;
}

.era-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.era-label {
  width: 80px;
  text-align: right;
  font-size: 0.85rem;
  color: #888;
  font-family: "Songti SC", serif;
}

.char-node {
  flex: 1;
  padding: 12px 20px;
  background: white;
  border: 1px solid rgba(128,0,32,0.15);
  border-radius: 8px;
  text-align: center;
  font-family: "Songti SC", serif;
  color: var(--accent);
  text-decoration: none;
  transition: all 0.3s;
}

.char-node:hover {
  background: var(--accent);
  color: white;
  transform: translateX(10px);
}

/* 全文网络 */
.network-cloud {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 800px;
}

.network-category h4 {
  font-family: "Songti SC", serif;
  color: var(--accent);
  margin-bottom: 12px;
  font-size: 1rem;
}

.network-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.net-tag {
  padding: 6px 12px;
  background: white;
  border: 1px solid rgba(128,0,32,0.1);
  border-radius: 15px;
  font-size: 0.85rem;
  color: #555;
  cursor: pointer;
  transition: all 0.2s;
}

.net-tag:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.graph-legend {
  margin-top: 40px;
  text-align: center;
  color: #666;
}

.graph-legend p {
  margin: 5px 0;
}

.legend-hint {
  font-size: 0.8rem;
  color: #999;
}
</style>

<script>
function switchGraph(type) {
  document.querySelectorAll('.graph-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.graph-view').forEach(view => view.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById('graph-' + type).classList.add('active');
}

// 主题节点点击
 document.querySelectorAll('.theme-node').forEach(node => {
  node.addEventListener('click', () => {
    const theme = node.dataset.theme;
    const urls = {
      '旅': './docs/古代旅行/',
      '戏': './docs/戏/',
      '饮': './docs/饮/',
      '感': './docs/感/'
    };
    window.location.href = urls[theme];
  });
});
</script>
