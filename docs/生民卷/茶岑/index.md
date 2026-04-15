---
layout: default
title: 茶岑
---

<div class="story-wrapper" id="storyWrapper">
  
  <div class="pages-container" id="pagesContainer">
    
    <!-- 第1页：介绍 -->
    <div class="page" id="page-0">
      <div class="intro-layout">
        <div class="intro-left">
          <h1 class="char-name">茶岑篇</h1>
          <p class="char-era">大理国 · 茶马古道商人</p>
          <div class="char-bio">
            <p>生于大理国苍洱之间。这里是茶马古道的起点，普洱茶从这里走向雪域高原。她继承了家族的马帮，带领骡马队翻山越岭，用茶叶换取藏区的马匹、药材和皮毛。</p>
          </div>
          <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
        </div>      
        <div class="intro-right">
          <img src="{{ site.baseurl }}/assets/images/scenes/茶岑.png" alt="茶岑" class="scene-img"/>
        </div>
      </div>
    </div>
    
    <!-- 第2页：苍洱之间 -->
    <div class="page" id="page-1" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">苍洱之间</h3>
        </div>
        <div class="scene-with-text">
          <div class="scene-side">
            <img src="{{ site.baseurl }}/assets/images/scenes/茶岑.png" alt="大理风光" class="scene-img"/>
            <div class="interact-hint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
              <span>点击场景中的光点</span>
            </div>
          </div>
          <div class="text-side">
            <p>茶岑生在<span class="clickable-text inline" onclick="collectNode('大理国', '饮', this)"><span class="pulse-dot"></span><strong>大理国</strong></span>，长在苍山脚下、洱海之滨。</p>
            <p>这里是茶马古道的起点，每年春天，茶农们把晒好的普洱茶装上马背，沿着蜿蜒的山路走向西藏。</p>
            <p>她从小跟着父亲走<span class="clickable-text inline" onclick="collectNode('茶马古道', '饮', this)"><span class="pulse-dot"></span><strong>茶马古道</strong></span>，熟悉每一条山路、每一个驿站。</p>
          </div>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第3页：普洱茶 -->
    <div class="page" id="page-2" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">苍洱之间</h3>
        </div>
        
        <div class="text-block">
          <p>大理的茶叶以<span class="clickable-text inline" onclick="collectNode('普洱茶', '饮', this)"><span class="pulse-dot"></span><strong>普洱茶</strong></span>最为著名。茶饼压得紧实，便于马帮长途运输，越陈越香。</p>
          <p>她家世代经营茶叶，她能从茶汤的颜色分辨出茶叶的年份和产地。</p>
        </div>
        
        <div class="artifact-showcase" onclick="collectRelic('普洱茶砖', this)">
          <div class="artifact-visual">
            <div class="scene-placeholder small"><span>茶砖</span></div>
          </div>
          <div class="artifact-info">
            <span class="pulse-dot"></span>
            <p>祖传<strong>普洱茶砖</strong></p>
            <p class="sub">压制于三十年前，价值连城</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第4页：马帮 -->
    <div class="page" id="page-3" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">马帮铃声</h3>
        </div>
        
        <div class="scene-with-text">
          <div class="text-side">
            <p>她二十岁那年，正式接管了家族的<span class="clickable-text inline" onclick="collectNode('马帮', '饮', this)"><span class="pulse-dot"></span><strong>马帮</strong></span>。</p>
            <p>二十匹骡马，十个赶马人，载着两吨茶叶，这就是她的全部家当。</p>
            <p>每次出发，马铃声响彻山谷，那是商人最动听的音乐。</p>
          </div>
          <div class="scene-side">
            <div class="scene-placeholder"><span>马帮</span></div>
          </div>
        </div>
        
        <div class="dialogue-box">
          <div class="dialogue-avatar"></div>
          <div class="dialogue-content">
            <span class="speaker">老赶马人</span>
            <p>"马帮有三宝：好马、好茶、好向导。姑娘占了前两样，这第三样，得靠经验积累。"</p>
          </div>
        </div>
        
        <div class="clickable-text" onclick="collectRelic('马铃铛', this)">
          <span class="pulse-dot"></span>
          <span>祖传<strong>马铃铛</strong>，每一声都是家族的回响</span>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第5页：滇藏之路 -->
    <div class="page" id="page-4" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">马帮铃声</h3>
        </div>
        
        <div class="text-block">
          <p>从大理到拉萨，要走四十五天。途经丽江、中甸、德钦，翻越梅里雪山，才能到达雪域高原。</p>
          <p>一路上，她见识了各个民族的风情：白族的三道茶、纳西族的东巴文、藏族的酥油茶。</p>
        </div>
        
        <div class="mini-choice">
          <p>茶马古道上，马帮用什么交换藏区的马匹？</p>
          <div class="mini-options">
            <button onclick="selectMiniChoice(this, '金银', false)">金银</button>
            <button onclick="selectMiniChoice(this, '茶叶', true)">茶叶</button>
            <button onclick="selectMiniChoice(this, '丝绸', false)">丝绸</button>
          </div>
          <div class="mini-result" id="mini-result-1"></div>
        </div>
        
        <button class="nav-btn" id="btn-page4" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第6页：交易 -->
    <div class="page" id="page-5" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">以茶易马</h3>
        </div>
        
        <div class="scene-with-text">
          <div class="scene-side">
            <div class="scene-placeholder"><span>集市</span></div>
          </div>
          <div class="text-side">
            <p>拉萨的八廓街是茶马交易的中心。</p>
            <p>她用一驮普洱茶，可以换一匹<span class="clickable-text inline" onclick="collectNode('藏区', '饮', this)"><span class="pulse-dot"></span><strong>藏区</strong></span>的良马。</p>
            <p>除了马匹，她还带回藏红花、麝香、皮毛，在大理能卖出高价。</p>
          </div>
        </div>
        
        <div class="item-row">
          <div class="clickable-item" onclick="collectRelic('银饰', this)">
            <span class="pulse-dot"></span>
            <span>藏族<strong>银饰</strong></span>
          </div>
          <span>——这是她用一块茶饼换来的宝贝</span>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第7页：酥油茶 -->
    <div class="page" id="page-6" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">以茶易马</h3>
        </div>
        
        <div class="text-block">
          <p>藏民最爱喝酥油茶，而做酥油茶必须用普洱茶。</p>
          <p>茶叶在高原上煮得浓浓的，加入酥油和盐，是藏民每日必备的饮品。</p>
          <p>她学会了打酥油茶，藏民都说她的手艺比当地人还好。</p>
        </div>
        
        <div class="reveal-card" onclick="revealText(this)">
          <div class="reveal-front">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
              <line x1="6" y1="1" x2="6" y2="4"/>
              <line x1="10" y1="1" x2="10" y2="4"/>
              <line x1="14" y1="1" x2="14" y2="4"/>
            </svg>
            <span>看看她的收藏</span>
          </div>
          <div class="reveal-back">
            <div class="highlight-text" onclick="collectRelic('茶盏', this)">
              <span class="pulse-dot"></span>
              <strong>大理窑茶盏</strong>
            </div>
            <p>这是她最珍爱的器物，每次喝茶都用它。</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第8页：尾声 -->
    <div class="page" id="page-7" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">04</span>
          <h3 class="chapter-title">茶香万里</h3>
        </div>
        
        <div class="ending-text">
          <p>她最终定居拉萨，开设了商号。</p>
          <p>来自云南的普洱茶，经过她的手，成为高原上酥油茶的珍贵原料。</p>
          <div class="divider"></div>
          <p class="final">她感叹人生如茶，</p>
          <p class="final">苦涩之后自有回甘；</p>
          <p class="final">行路虽远，终有归处。</p>
        </div>
        
        <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
      </div>
    </div>
    
    <!-- 第9页：总结 -->
    <div class="page" id="page-8" style="display:none">
      <div class="summary-layout">
        <h2 class="summary-title">探索完成</h2>
        
        <div class="stats-row">
          <div class="stat-box">
            <span class="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m4.22-10.22l4.24-4.24M6.34 17.66l-4.24 4.24M23 12h-6m-6 0H1m20.24 4.24l-4.24-4.24M6.34 6.34L2.1 2.1"/>
              </svg>
            </span>
            <span class="stat-num" id="summary-node-count">0</span>
            <span class="stat-label">主题节点</span>
          </div>
          
          <div class="stat-box">
            <span class="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><rect x="6" y="3" width="15" height="14" rx="2"/>
              </svg>
            </span>
            <span class="stat-num" id="summary-relic-count">0</span>
            <span class="stat-label">历史文物</span>
          </div>
        </div>
        
        <div class="collection-showcase">
          <div class="showcase-section">
            <h4>主题节点</h4>
            <div class="showcase-list" id="summary-nodes"></div>
          </div>
          
          <div class="showcase-section">
            <h4>历史文物</h4>
            <div class="showcase-list" id="summary-relics"></div>
          </div>
        </div>
        
        <div class="summary-actions">
          <button class="btn-primary" onclick="restart()">重新探索</button>
          <button onclick="exportProgress()">复制分享链接</button>
        </div>
      </div>
    </div>
    
  </div>
  
  <!-- 底部收集工具栏 -->
  <div class="bottom-toolbar">
    <div class="toolbar-content">
      <span class="toolbar-label">探索收获</span>
      <button class="toolbar-btn" onclick="toggleCollectionPanel()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>
        <span class="toolbar-badge" id="collection-badge">0</span>
      </button>
    </div>
  </div>
  
  <!-- 收集面板 -->
  <div class="collection-panel" id="collectionPanel">
    <div class="panel-header">
      <h4>探索收获</h4>
      <button onclick="toggleCollectionPanel()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="panel-body">
      <div class="panel-section">
        <h5>主题节点</h5>
        <div class="panel-grid" id="panel-nodes"></div>
      </div>
      
      <div class="panel-section">
        <h5>历史文物</h5>
        <div class="panel-grid" id="panel-relics"></div>
      </div>
    </div>
  </div>
  
  <!-- 页面指示器 -->
  <div class="page-dots">
    <span class="dot active" onclick="showPage(0)"></span>
    <span class="dot" onclick="if(isPageUnlocked(1)) showPage(1)"></span>
    <span class="dot" onclick="if(isPageUnlocked(2)) showPage(2)"></span>
    <span class="dot" onclick="if(isPageUnlocked(3)) showPage(3)"></span>
    <span class="dot" onclick="if(isPageUnlocked(4)) showPage(4)"></span>
    <span class="dot" onclick="if(isPageUnlocked(5)) showPage(5)"></span>
    <span class="dot" onclick="if(isPageUnlocked(6)) showPage(6)"></span>
    <span class="dot" onclick="if(isPageUnlocked(7)) showPage(7)"></span>
    <span class="dot final" onclick="if(isPageUnlocked(8)) showPage(8)"></span>
  </div>
  
</div>

<style>
/* 覆盖默认布局 */
.container { 
  background: transparent !important; 
  box-shadow: none !important; 
  padding: 0 !important; 
  max-width: 100% !important; 
  margin: 0 !important; 
}

header { background: #fdfcfa !important; }

/* 暖沙色背景 */
.story-wrapper {
  position: relative;
  width: 100%;
  min-height: auto;
  background: #faf6ee;
  margin-top: 40px;
  padding: 40px 0 60px;
}

.pages-container {
  width: 100%;
  padding: 20px 60px 40px;
  box-sizing: border-box;
}

.page {
  width: 100%;
  margin: 0;
  padding: 15px 0 30px 60px;
}

/* 介绍页 - 与冶辛一致 */
.intro-layout {
  display: flex;
  min-height: auto;
  align-items: center;
  gap: 40px;
  padding: 20px 0;
}

.intro-left {
  flex: 0 0 45%;
  padding-left: 0;
  text-align: left !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.intro-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.char-name {
  font-family: "Songti SC", serif;
  font-size: 2.2rem;
  color: var(--accent);
  margin: 0 0 6px 0;
  letter-spacing: 2px;
  text-align: left;
}

.char-era {
  font-size: 1rem;
  color: #888;
  margin: 0 0 16px 0;
  letter-spacing: 2px;
}

.char-bio {
  background: #f5f3f0;
  padding: 14px 18px;
  border-radius: 8px;
  border-left: 3px solid var(--accent);
}

.char-bio p {
  line-height: 1.6;
  color: #555;
  margin: 0;
  font-size: 0.95rem;
}

.nav-btn {
  margin-top: 40px;
  padding: 10px 24px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Songti SC", serif;
  letter-spacing: 2px;
}

.nav-btn:hover:not(:disabled) {
  transform: translateX(3px);
  box-shadow: 0 8px 20px rgba(128,0,32,0.25);
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 场景图片 */
.scene-img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  filter: sepia(20%) saturate(80%) hue-rotate(-10deg);
}

/* 章节布局 */
.chapter-layout {
  max-width: 700px;
  margin: 0 auto;
}

.chapter-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 30px;
}

.chapter-num {
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: bold;
}

.chapter-title {
  font-family: "Songti SC", serif;
  font-size: 1.5rem;
  color: var(--accent);
  margin: 0;
  letter-spacing: 3px;
}

/* 图文并排 */
.scene-with-text {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  align-items: flex-start;
}

.scene-side {
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.text-side {
  flex: 1;
}

.text-side p, .text-block p {
  line-height: 1.9;
  color: #444;
  margin-bottom: 1em;
  font-size: 0.95rem;
}

.interact-hint {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #999;
  font-size: 0.75rem;
}

.interact-hint svg {
  animation: pulse 2s infinite;
}

/* 可点击文本 */
.clickable-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(128,0,32,0.05);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 10px 0;
}

.clickable-text:hover {
  background: rgba(128,0,32,0.1);
}

.clickable-text.collected {
  background: rgba(128,0,32,0.2);
}

.clickable-text.inline {
  display: inline-flex;
  margin: 0 5px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.3); opacity: 1; }
}

/* 对话框 */
.dialogue-box {
  display: flex;
  gap: 15px;
  background: #f5f3f0;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
}

.dialogue-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #d0c8c0, #c0b8b0);
  border-radius: 50%;
  flex-shrink: 0;
}

.dialogue-content {
  flex: 1;
}

.speaker {
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.dialogue-content p {
  margin: 0;
  line-height: 1.7;
  color: #444;
}

/* 迷你选择 */
.mini-choice {
  background: #f5f3f0;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
}

.mini-choice > p {
  margin: 0 0 15px 0;
  color: #555;
}

.mini-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.mini-options button {
  padding: 8px 20px;
  background: white;
  border: 1.5px solid #d0c8c0;
  border-radius: 20px;
  cursor: pointer;
  font-family: "Songti SC", serif;
  transition: all 0.3s;
}

.mini-options button:hover {
  border-color: var(--accent);
}

.mini-options button.correct {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
}

.mini-options button.wrong {
  background: #ddd;
  border-color: #ccc;
  color: #888;
}

.mini-result {
  margin-top: 15px;
  padding: 10px;
  background: rgba(128,0,32,0.05);
  border-radius: 8px;
  color: #555;
  display: none;
}

.mini-result.show {
  display: block;
}

/* 文本块 */
.text-block {
  margin-bottom: 20px;
}

.text-block > p {
  line-height: 1.9;
  color: #444;
  margin-bottom: 1em;
}

.item-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.clickable-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  background: rgba(128,0,32,0.05);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.clickable-item:hover {
  background: rgba(128,0,32,0.1);
}

/* 揭示卡片 */
.reveal-card {
  background: #f5f3f0;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  margin: 20px 0;
}

.reveal-card:hover {
  background: rgba(128,0,32,0.08);
}

.reveal-front {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #888;
}

.reveal-front svg {
  opacity: 0.5;
}

.reveal-back {
  display: none;
  text-align: left;
}

.reveal-card.revealed .reveal-front {
  display: none;
}

.reveal-card.revealed .reveal-back {
  display: block;
}

.highlight-text {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  background: rgba(128,0,32,0.1);
  border-radius: 8px;
  margin: 15px 0;
  cursor: pointer;
  color: var(--accent);
}

/* 文物展示 */
.artifact-showcase {
  display: flex;
  gap: 20px;
  background: #f5f3f0;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
  cursor: pointer;
  transition: all 0.3s;
}

.artifact-showcase:hover {
  background: #f0ece8;
}

.artifact-visual {
  flex-shrink: 0;
}

.artifact-info {
  flex: 1;
}

.artifact-info > p {
  margin: 0 0 5px 0;
  color: #444;
}

.artifact-info .sub {
  color: #888;
  font-size: 0.85rem;
}

/* 场景占位图 */
.scene-placeholder {
  width: 280px;
  height: 200px;
  background: linear-gradient(135deg, #e8e0d8 0%, #d8d0c8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.scene-placeholder::before {
  content: '';
  position: absolute;
  width: 60%;
  height: 60%;
  border: 2px dashed rgba(128,0,32,0.15);
  border-radius: 8px;
}

.scene-placeholder span {
  color: rgba(128,0,32,0.3);
  font-family: "Songti SC", serif;
  font-size: 1.5rem;
  letter-spacing: 4px;
}

.scene-placeholder.small {
  width: 120px;
  height: 80px;
}

/* 结尾文字 */
.ending-text {
  text-align: center;
  padding: 40px 20px;
}

.ending-text > p {
  line-height: 2;
  color: #444;
  margin-bottom: 0.5em;
  font-size: 1rem;
}

.ending-text .divider {
  width: 60px;
  height: 1px;
  background: var(--accent);
  margin: 30px auto;
}

.ending-text .final {
  color: var(--accent);
  font-size: 1.1rem;
}

/* 总结页 */
.summary-layout {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px;
}

.summary-title {
  font-family: "Songti SC", serif;
  font-size: 1.8rem;
  color: var(--accent);
  margin-bottom: 30px;
  letter-spacing: 5px;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
}

.stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 30px;
  background: #f5f3f0;
  border-radius: 12px;
  min-width: 100px;
}

.stat-icon {
  color: var(--accent);
}

.stat-num {
  font-size: 2rem;
  color: var(--accent);
  font-family: "Songti SC", serif;
}

.stat-label {
  color: #888;
  font-size: 0.85rem;
}

.collection-showcase {
  margin-bottom: 30px;
}

.showcase-section {
  margin-bottom: 20px;
}

.showcase-section h4 {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 12px;
  font-family: "Songti SC", serif;
}

.showcase-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.showcase-list .item {
  padding: 6px 14px;
  background: #f0ede8;
  border-radius: 15px;
  font-size: 0.85rem;
  color: #888;
  border: 1px dashed #ccc;
}

.showcase-list .item.collected {
  background: var(--accent);
  color: white;
  border-style: solid;
}

.summary-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.summary-actions button {
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Songti SC", serif;
}

.btn-primary {
  background: var(--accent);
  border: none;
  color: white;
}

.summary-actions button:not(.btn-primary) {
  background: transparent;
  color: var(--accent);
  border: 1.5px solid var(--accent);
}

/* 页面指示器 */
.page-dots {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 200;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(128,0,32,0.15);
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: var(--accent);
  transform: scale(1.3);
}

.dot.final {
  background: rgba(128,0,32,0.3);
}

/* 底部工具栏 */
.bottom-toolbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 120px;
  height: 60px;
  background: white;
  border-top: 1px solid #e8e0d8;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 40px;
}

.toolbar-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toolbar-label {
  color: #888;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.toolbar-btn {
  width: 44px;
  height: 44px;
  background: var(--accent);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s;
  position: relative;
}

.toolbar-btn:hover {
  background: #600020;
  transform: scale(1.05);
}

.toolbar-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 20px;
  height: 20px;
  background: #d4a574;
  color: white;
  font-size: 0.7rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 收集面板 */
.collection-panel {
  position: fixed;
  top: 50%;
  right: 40px;
  transform: translateY(-50%) translateX(120%);
  width: 280px;
  max-height: 70vh;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.15);
  transition: transform 0.3s, opacity 0.3s;
  z-index: 200;
  opacity: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
}

.collection-panel.active {
  transform: translateY(-50%) translateX(0);
  opacity: 1;
  pointer-events: auto;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f0ede8;
}

.panel-header h4 {
  margin: 0;
  font-family: "Songti SC", serif;
  color: var(--accent);
}

.panel-header button {
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  padding: 4px;
}

.panel-body {
  padding: 20px;
  overflow-y: auto;
}

.panel-section {
  margin-bottom: 20px;
}

.panel-section h5 {
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.panel-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.panel-item {
  padding: 6px 12px;
  background: rgba(128,0,32,0.05);
  border: 1px solid rgba(128,0,32,0.1);
  border-radius: 15px;
  font-size: 0.8rem;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.panel-item:hover {
  background: rgba(128,0,32,0.1);
}

.panel-item.collected {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

/* 响应式调整 */
@media (max-width: 900px) {
  .bottom-toolbar {
    right: 55px;
    padding: 0 20px;
  }
  .collection-panel {
    right: 20px;
    width: calc(100vw - 40px);
    max-width: 300px;
  }
}

/* Toast */
.toast {
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(128,0,32,0.9);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.85rem;
  z-index: 1000;
  animation: fadeInOut 2s forwards;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
  20% { opacity: 1; transform: translateX(-50%) translateY(0); }
  80% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
}

/* 响应式 */
@media (max-width: 900px) {
  .pages-container { padding: 20px 30px 40px; }
  .page { padding-left: 30px; }
  .intro-layout { flex-direction: column; }
  .intro-left { flex: none; width: 100%; }
  .scene-with-text { flex-direction: column; }
  .scene-side { flex: none; }
  .stats-row { flex-direction: column; gap: 15px; }
}
</style>

<script>
var currentPage = 0;
var totalPages = 9;
var unlockedPages = [0];
var collections = { nodes: {}, relics: {} };

function showPage(pageNum) {
  if (!unlockedPages.includes(pageNum)) return;
  
  for (var i = 0; i < totalPages; i++) {
    var page = document.getElementById('page-' + i);
    if (page) page.style.display = 'none';
  }
  
  var target = document.getElementById('page-' + pageNum);
  if (target) target.style.display = 'block';
  
  currentPage = pageNum;
  
  var dots = document.querySelectorAll('.dot');
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.toggle('active', i === pageNum);
  }
  
  window.scrollTo(0, 0);
}

function isPageUnlocked(pageNum) {
  return unlockedPages.includes(pageNum);
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    if (!unlockedPages.includes(currentPage + 1)) {
      unlockedPages.push(currentPage + 1);
    }
    showPage(currentPage + 1);
  }
}

function collectNode(nodeName, theme, el) {
  if (!collections.nodes[nodeName]) {
    collections.nodes[nodeName] = { theme: theme };
    if (el) el.classList.add('collected');
    updateBadge();
    updateCollectionPanel();
    showToast('已点亮节点：' + nodeName);
  }
}

function collectRelic(relicName, el) {
  if (!collections.relics[relicName]) {
    collections.relics[relicName] = true;
    if (el) el.classList.add('collected');
    updateBadge();
    updateCollectionPanel();
    showToast('已收集文物：' + relicName);
  }
}

function updateBadge() {
  var count = Object.keys(collections.nodes).length + Object.keys(collections.relics).length;
  var badge = document.getElementById('collection-badge');
  if (badge) badge.textContent = count;
}

function toggleCollectionPanel() {
  document.getElementById('collectionPanel').classList.toggle('active');
}

function updateCollectionPanel() {
  var nodesGrid = document.getElementById('panel-nodes');
  var allNodes = ['大理国', '茶马古道', '普洱茶', '马帮', '藏区'];
  if (nodesGrid) {
    nodesGrid.innerHTML = allNodes.map(function(n) {
      var collected = collections.nodes[n] ? 'collected' : '';
      return '<span class="panel-item ' + collected + '" onclick="collectNode(\'' + n + '\', \'饮\', this)">' + n + '</span>';
    }).join('');
  }
  
  var relicsGrid = document.getElementById('panel-relics');
  var allRelics = ['普洱茶砖', '马铃铛', '银饰', '茶盏'];
  if (relicsGrid) {
    relicsGrid.innerHTML = allRelics.map(function(r) {
      var collected = collections.relics[r] ? 'collected' : '';
      return '<span class="panel-item ' + collected + '" onclick="collectRelic(\'' + r + '\', this)">' + r + '</span>';
    }).join('');
  }
}

function selectMiniChoice(el, answer, isCorrect) {
  var parent = el.parentElement;
  var buttons = parent.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('correct', 'wrong');
  }
  
  var result = document.getElementById('mini-result-1');
  
  if (isCorrect) {
    el.classList.add('correct');
    if (result) {
      result.textContent = '正确！茶马古道上，云南的茶叶是最重要的交换物资。';
      result.classList.add('show');
    }
    var btn = document.getElementById('btn-page4');
    if (btn) btn.disabled = false;
  } else {
    el.classList.add('wrong');
    if (result) {
      result.textContent = '不对，再想想。';
      result.classList.add('show');
    }
  }
}

function revealText(el) {
  el.classList.add('revealed');
}

function showSummary() {
  var nodeCount = Object.keys(collections.nodes).length;
  var relicCount = Object.keys(collections.relics).length;
  
  var nodeCountEl = document.getElementById('summary-node-count');
  var relicCountEl = document.getElementById('summary-relic-count');
  
  if (nodeCountEl) nodeCountEl.textContent = nodeCount;
  if (relicCountEl) relicCountEl.textContent = relicCount;
  
  var nodesList = document.getElementById('summary-nodes');
  var allNodes = ['大理国', '茶马古道', '普洱茶', '马帮', '藏区'];
  if (nodesList) {
    nodesList.innerHTML = allNodes.map(function(n) {
      var collected = collections.nodes[n] ? 'collected' : '';
      return '<span class="item ' + collected + '">' + n + '</span>';
    }).join('');
  }
  
  var relicsList = document.getElementById('summary-relics');
  var allRelics = ['普洱茶砖', '马铃铛', '银饰', '茶盏'];
  if (relicsList) {
    relicsList.innerHTML = allRelics.map(function(r) {
      var collected = collections.relics[r] ? 'collected' : '';
      return '<span class="item ' + collected + '">' + r + '</span>';
    }).join('');
  }
  
  if (!unlockedPages.includes(8)) {
    unlockedPages.push(8);
  }
  showPage(8);
}

function restart() {
  currentPage = 0;
  collections = { nodes: {}, relics: {} };
  unlockedPages = [0];
  
  var collected = document.querySelectorAll('.collected');
  for (var i = 0; i < collected.length; i++) {
    collected[i].classList.remove('collected');
  }
  
  var revealed = document.querySelectorAll('.revealed');
  for (var i = 0; i < revealed.length; i++) {
    revealed[i].classList.remove('revealed');
  }
  
  var correctWrong = document.querySelectorAll('.correct, .wrong');
  for (var i = 0; i < correctWrong.length; i++) {
    correctWrong[i].classList.remove('correct', 'wrong');
  }
  
  var miniResults = document.querySelectorAll('.mini-result');
  for (var i = 0; i < miniResults.length; i++) {
    miniResults[i].classList.remove('show');
    miniResults[i].textContent = '';
  }
  
  var navBtns = document.querySelectorAll('.nav-btn');
  for (var i = 0; i < navBtns.length; i++) {
    if (navBtns[i].id && navBtns[i].id.indexOf('btn-page') === 0) {
      navBtns[i].disabled = true;
    }
  }
  
  updateBadge();
  updateCollectionPanel();
  showPage(0);
}

function exportProgress() {
  alert('分享功能开发中');
}

function showToast(msg) {
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(function() { 
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  showPage(0);
  updateCollectionPanel();
});
</script>