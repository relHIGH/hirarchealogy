---
layout: default
title: 石兰
---

<div class="story-wrapper" id="storyWrapper">
  
  <div class="pages-container" id="pagesContainer">
    
    <!-- 第1页：介绍 -->
    <div class="page" id="page-0">
      <div class="intro-layout">
        <div class="intro-left">
          <h1 class="char-name">石兰篇</h1>
          <p class="char-era">北魏 · 云冈石窟石匠</p>
          <div class="char-bio">
            <p>生于太和年间，平城人氏。十五岁入武州山石窟寺，以锤凿为笔，在岩壁上雕刻佛陀的微笑。她的一生，与云冈的佛光同在。</p>
          </div>
          <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
        </div>      
        <div class="intro-right">
          <div class="scene-placeholder"><span>云冈石窟</span></div>
        </div>
      </div>
    </div>
    
    <!-- 第2页：武州山 -->
    <div class="page" id="page-1" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">武州山的召唤</h3>
        </div>
        <div class="scene-with-text">
          <div class="scene-side">
            <div class="scene-placeholder"><span>武州山</span></div>
            <div class="interact-hint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
              <span>点击场景中的光点</span>
            </div>
          </div>
          <div class="text-side">
            <p>太和十五年，皇帝下诏开凿石窟。</p>
            <p>石兰的父亲是个石匠，带着她来到武州山。</p>
            <div class="clickable-text" onclick="collectNode('石窟', '感', this)">
              <span class="pulse-dot"></span>
              <span>整座<strong>石窟</strong>要供奉佛陀，要流传千古。</span>
            </div>
          </div>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第3页：岩壁 -->
    <div class="page" id="page-2" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">武州山的召唤</h3>
        </div>
        <div class="dialogue-box">
          <div class="dialogue-avatar"></div>
          <div class="dialogue-content">
            <span class="speaker">师父</span>
            <p>"石头是有灵性的。你要先听懂它，才能雕琢它。"</p>
          </div>
        </div>
        <div class="text-block">
          <p>石兰的第一份工作，是清理岩壁上的浮石。</p>
          <div class="clickable-text" onclick="collectNode('岩壁', '感', this)">
            <span class="pulse-dot"></span>
            <span>武州山的<strong>岩壁</strong>是砂岩，太硬凿不动，太软刻不精。</span>
          </div>
        </div>
        
        <div class="mini-choice">
          <p>云冈石窟主要使用什么岩石？</p>
          <div class="mini-options">
            <button onclick="selectMiniChoice(this, '花岗岩', false)">花岗岩</button>
            <button onclick="selectMiniChoice(this, '砂岩', true)">砂岩</button>
            <button onclick="selectMiniChoice(this, '石灰岩', false)">石灰岩</button>
          </div>
          <div class="mini-result" id="mini-result-1"></div>
        </div>
        
        <button class="nav-btn" id="btn-page2" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第4页：工具 -->
    <div class="page" id="page-3" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">武州山的召唤</h3>
        </div>
        <div class="text-block">
          <p>石匠的工具很简单：锤、凿、錾。</p>
          <p>但每一件都是安身立命的根本。</p>
        </div>
        <div class="scene-wide">
          <div class="scene-placeholder wide"><span>石匠工具</span></div>
        </div>
        <div class="clickable-text" onclick="collectRelic('凿子工具', this)">
          <span class="pulse-dot"></span>
          <span>师父送给她一套<strong>凿子</strong>，说是祖传的手艺。</span>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第5页：佛像 -->
    <div class="page" id="page-4" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">凿刻时光</h3>
        </div>
        <div class="scene-with-text">
          <div class="text-side">
            <p>三年后，石兰终于能独立开凿佛像了。</p>
            <p>一尊佛像要刻整整一年，从轮廓到衣纹，不能有一丝差错。</p>
            <div class="clickable-text" onclick="collectNode('佛像', '感', this)">
              <span class="pulse-dot"></span>
              <span>她刻的<strong>佛像</strong>有皇帝的相貌，这是旨意。</span>
            </div>
          </div>
          <div class="scene-side">
            <div class="scene-placeholder"><span>佛像雕刻</span></div>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第6页：凿刻 -->
    <div class="page" id="page-5" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">凿刻时光</h3>
        </div>
        <div class="dialogue-box">
          <div class="dialogue-avatar"></div>
          <div class="dialogue-content">
            <span class="speaker">石兰</span>
            <p>"每一凿下去，我都怕毁了佛陀的面容。"</p>
          </div>
        </div>
        <div class="text-block">
          <div class="clickable-text" onclick="collectNode('凿刻', '感', this)">
            <span class="pulse-dot"></span>
            <span><strong>凿刻</strong>不只是力气活，更是心性的修炼。</span>
          </div>
          <p>一锤一凿，日复一日。</p>
        </div>
        
        <div class="interaction-area">
          <p class="instruction">云冈石窟的开凿始于哪位皇帝？</p>
          <div class="choice-cards">
            <div class="choice-card" onclick="selectChoice(this, '孝文帝', false)">
              <div class="card-icon emperor"></div>
              <span>孝文帝</span>
            </div>
            <div class="choice-card" onclick="selectChoice(this, '文成帝', true)">
              <div class="card-icon king"></div>
              <span>文成帝</span>
            </div>
          </div>
          <div class="feedback" id="choice-feedback"></div>
        </div>
        
        <button class="nav-btn" id="btn-page5" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第7页：供养 -->
    <div class="page" id="page-6" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">凿刻时光</h3>
        </div>
        <div class="reveal-card" onclick="revealText(this)">
          <div class="reveal-front">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>佛像的供养</span>
          </div>
          <div class="reveal-back">
            <p>石窟完成后，会有善男信女前来供养，在佛像前献上香火。</p>
            <div class="highlight-text" onclick="collectNode('供养', '感', this)">
              <span class="pulse-dot"></span>
              <strong>供养人</strong>的名字会刻在壁画旁，流传后世。
            </div>
            <p class="aside">石兰没有留下名字，但她的佛像屹立了一千五百年。</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第8页：文物 -->
    <div class="page" id="page-7" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">千年之后</h3>
        </div>
        
        <div class="scene-with-text">
          <div class="scene-side">
            <div class="scene-placeholder"><span>考古发现</span></div>
          </div>
          <div class="text-side">
            <p>二十世纪，考古学家在云冈石窟发现了当年的工匠遗物。</p>
            <div class="clickable-text" onclick="collectRelic('石斧', this)">
              <span class="pulse-dot"></span>
              <span>有铁锈斑斑的<strong>石斧</strong>，</span>
            </div>
            <div class="clickable-text" onclick="collectRelic('佛像残件', this)">
              <span class="pulse-dot"></span>
              <span>有未完成的<strong>佛像残件</strong>。</span>
            </div>
          </div>
        </div>
        
        <div class="clickable-text" onclick="collectRelic('壁画残片', this)">
          <span class="pulse-dot"></span>
          <span>还有褪色的<strong>壁画残片</strong>，隐约可见当年的色彩。</span>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第9页：结尾 -->
    <div class="page" id="page-8" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">尾声</h3>
        </div>
        
        <div class="ending-text">
          <p>石兰终生未嫁，把一辈子都献给了石窟。</p>
          <p>她死的时候，云冈已经有五万多尊佛像。</p>
          <div class="divider"></div>
          <p class="final">她不知道什么叫艺术，</p>
          <p class="final">只知道每一凿下去，</p>
          <p class="final">都要对得起心中的佛光。</p>
        </div>
        
        <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
      </div>
    </div>
    
    <!-- 第10页：总结 -->
    <div class="page" id="page-9" style="display:none">
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
  
  <!-- 收集品面板 -->
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
    <span class="dot" onclick="if(isPageUnlocked(8)) showPage(8)"></span>
    <span class="dot final" onclick="if(isPageUnlocked(9)) showPage(9)"></span>
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

/* 介绍页 */
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

.scene-placeholder.wide {
  width: 100%;
  max-width: 500px;
}

.scene-wide {
  margin: 20px 0;
  display: flex;
  justify-content: center;
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

.text-side p {
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
  margin-bottom: 20px;
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

/* 交互区 */
.interaction-area {
  background: #f8f6f3;
  padding: 20px;
  border-radius: 12px;
  margin: 20px 0;
}

.instruction {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.choice-cards {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.choice-card {
  width: 120px;
  padding: 20px;
  background: white;
  border: 2px solid #e0d8d0;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s;
}

.choice-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.choice-card.correct {
  border-color: #5a8;
  background: #f0f8f4;
}

.choice-card.wrong {
  border-color: #a55;
  background: #f8f0f0;
}

.card-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  border-radius: 8px;
}

.card-icon.emperor {
  background: linear-gradient(135deg, #e8e0d8, #d0c8c0);
}

.card-icon.king {
  background: linear-gradient(135deg, #8a4a3a, #6d3d3d);
}

.feedback {
  margin-top: 15px;
  text-align: center;
  color: var(--accent);
  font-size: 0.9rem;
  min-height: 1.5em;
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

.aside {
  color: #999;
  font-size: 0.85rem;
  font-style: italic;
  margin-top: 15px;
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
  padding-left: 0;
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
  .pages-container { padding: 20px 30px 40px; }
  .page { padding-left: 30px; }
  .intro-layout { flex-direction: column; }
  .intro-left { flex: none; width: 100%; }
  .scene-with-text { flex-direction: column; }
  .scene-side { flex: none; }
  .choice-cards { flex-direction: column; align-items: center; }
  .stats-row { flex-direction: column; gap: 15px; }
}
</style>

<script>
var currentPage = 0;
var totalPages = 10;
var collections = { nodes: {}, relics: {} };
var unlockedPages = [0];

function showPage(pageNum) {
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
  
  if (!unlockedPages.includes(pageNum)) {
    unlockedPages.push(pageNum);
  }
  
  window.scrollTo(0, 0);
}

function isPageUnlocked(pageNum) {
  return unlockedPages.includes(pageNum);
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    showPage(currentPage + 1);
  }
}

function showSummary() {
  showPage(9);
  updateSummary();
}

function updateSummary() {
  document.getElementById('summary-node-count').textContent = Object.keys(collections.nodes).length;
  document.getElementById('summary-relic-count').textContent = Object.keys(collections.relics).length;
  
  var nodesList = document.getElementById('summary-nodes');
  var allNodes = ['石窟', '佛像', '凿刻', '岩壁', '供养'];
  nodesList.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="item ' + collected + '" data-node="' + n + '" data-theme="' + (collections.nodes[n]?.theme || '感') + '" onclick="collectFromSummary(this, \'' + n + '\')">' + n + '</span>';
  }).join('');
  
  var relicsList = document.getElementById('summary-relics');
  var allRelics = ['石斧', '佛像残件', '凿子工具', '壁画残片'];
  relicsList.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="item ' + collected + '" data-relic="' + r + '" onclick="collectRelicFromSummary(this, \'' + r + '\')">' + r + '</span>';
  }).join('');
}

function collectNode(nodeName, theme, el) {
  if (!collections.nodes[nodeName]) {
    collections.nodes[nodeName] = { theme: theme };
    if (el) el.classList.add('collected');
    showToast('已点亮节点：' + nodeName);
    updateCollectionPanel();
    updateBadge();
  }
}

function collectRelic(relicName, el) {
  if (!collections.relics[relicName]) {
    collections.relics[relicName] = true;
    if (el) el.classList.add('collected');
    showToast('已收集文物：' + relicName);
    updateCollectionPanel();
    updateBadge();
  }
}

function collectFromSummary(el, nodeName) {
  if (!collections.nodes[nodeName]) {
    collectNode(nodeName, '感', el);
    updateSummary();
  }
}

function collectRelicFromSummary(el, relicName) {
  if (!collections.relics[relicName]) {
    collectRelic(relicName, el);
    updateSummary();
  }
}

function selectChoice(el, answer, isCorrect) {
  document.querySelectorAll('.choice-card').forEach(function(c) {
    c.classList.remove('correct', 'wrong');
  });
  
  if (isCorrect) {
    el.classList.add('correct');
    document.getElementById('choice-feedback').textContent = '正确！云冈石窟开凿于北魏文成帝时期。';
    document.getElementById('btn-page5').disabled = false;
  } else {
    el.classList.add('wrong');
    document.getElementById('choice-feedback').textContent = '不对，再想想。';
  }
}

function selectMiniChoice(el, answer, isCorrect) {
  var parent = el.parentElement;
  parent.querySelectorAll('button').forEach(function(b) {
    b.classList.remove('correct', 'wrong');
  });
  
  var result = document.getElementById('mini-result-1');
  
  if (isCorrect) {
    el.classList.add('correct');
    result.textContent = '云冈石窟使用的是武州山砂岩，易于雕刻。';
    result.classList.add('show');
    document.getElementById('btn-page2').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '不对，再想想。';
    result.classList.add('show');
  }
}

function revealText(el) {
  el.classList.add('revealed');
}

function toggleCollectionPanel() {
  document.getElementById('collectionPanel').classList.toggle('active');
}

function updateCollectionPanel() {
  var nodesGrid = document.getElementById('panel-nodes');
  var allNodes = ['石窟', '佛像', '凿刻', '岩壁', '供养'];
  nodesGrid.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectNode(\'' + n + '\', \'感\', this)">' + n + '</span>';
  }).join('');
  
  var relicsGrid = document.getElementById('panel-relics');
  var allRelics = ['石斧', '佛像残件', '凿子工具', '壁画残片'];
  relicsGrid.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectRelic(\'' + r + '\', this)">' + r + '</span>';
  }).join('');
}

function updateBadge() {
  var count = Object.keys(collections.nodes).length + Object.keys(collections.relics).length;
  document.getElementById('collection-badge').textContent = count;
}

function restart() {
  currentPage = 0;
  collections = { nodes: {}, relics: {} };
  unlockedPages = [0];
  document.querySelectorAll('.collected').forEach(function(el) {
    el.classList.remove('collected');
  });
  document.querySelectorAll('.revealed').forEach(function(el) {
    el.classList.remove('revealed');
  });
  document.querySelectorAll('.correct, .wrong').forEach(function(el) {
    el.classList.remove('correct', 'wrong');
  });
  document.querySelectorAll('.mini-result').forEach(function(el) {
    el.classList.remove('show');
    el.textContent = '';
  });
  document.querySelectorAll('.nav-btn').forEach(function(el) {
    if (el.id && el.id.startsWith('btn-page')) {
      el.disabled = true;
    }
  });
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
  setTimeout(function() { toast.remove(); }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  showPage(0);
  updateCollectionPanel();
});
</script>
