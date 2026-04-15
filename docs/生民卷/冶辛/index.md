---
layout: default
title: 冶辛
---

<div class="story-wrapper" id="storyWrapper">
  
  <div class="pages-container" id="pagesContainer">
    
    <!-- 第1页：介绍 -->
    <div class="page" id="page-0">
      <div class="intro-layout">
        <div class="intro-left">
          <h1 class="char-name">冶辛篇</h1>
          <p class="char-era">战国 · 冶铁作坊学徒</p>
          <div class="char-bio">
            <p>前271年生于上党郡。从添炭学徒到辨矿匠人——她的青春期是在铁渣堆和陶范碎片中度过的。</p>
          </div>
          <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
        </div>      
        <div class="intro-right">
          <img src="{{ site.baseurl }}/assets/images/yexin/yexin_main.png" alt="冶辛" class="scene-img"/>
        </div>
      </div>
    </div>
    
    <!-- 第2页：炉火 -->
    <div class="page" id="page-1" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">矿山与炉火</h3>
        </div>
        <div class="scene-with-text">
          <div class="scene-side">
            <img src="{{ site.baseurl }}/assets/images/yexin/forge.png" alt="炉火" class="scene-img"/>
            <div class="interact-hint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
              <span>点击场景中的光点</span>
            </div>
          </div>
          <div class="text-side">
            <p>上党这地方，山多得像随手撒的石头。</p>
            <p>冶辛家就在半山腰，旁边是个冶铁作坊——几间破草房围着一座土炉子，常年冒着黑烟。</p>
            <div class="clickable-text" onclick="collectNode('炉火', '感', this)">
              <span class="pulse-dot"></span>
              <span>最忙的时候，<strong>炉火</strong>三天三夜不灭。</span>
            </div>
          </div>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第3页：矿石 -->
    <div class="page" id="page-2" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">矿山与炉火</h3>
        </div>
        <div class="dialogue-box">
          <div class="dialogue-avatar"></div>
          <div class="dialogue-content">
            <span class="speaker">父亲</span>
            <p>"八岁就能分辨矿石了。铁的沉，废石轻，敲起来声音不一样。"</p>
          </div>
        </div>
        <div class="interaction-area">
          <p class="instruction">点击正确的石头：</p>
          <div class="choice-cards">
            <div class="choice-card" onclick="selectOre(this, false)">
              <div class="card-icon light"></div>
              <span>轻石</span>
            </div>
            <div class="choice-card" onclick="selectOre(this, true)">
              <div class="card-icon heavy"></div>
              <span>沉石</span>
            </div>
          </div>
          <div class="feedback" id="ore-feedback"></div>
        </div>
        
        <button class="nav-btn" id="btn-page2" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第4页：铁水 -->
    <div class="page" id="page-3" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">矿山与炉火</h3>
        </div>
        <div class="scene-with-text">
          <div class="scene-side">
            <img src="{{ site.baseurl }}/assets/images/yexin/molten.png" alt="铁水" class="scene-img"/>
          </div>
          <div class="text-side">
            <p>铁水从炉口流出来，红得发亮，像岩浆。</p>
            <div class="clickable-text" onclick="collectNode('铁水', '感', this)">
              <span class="pulse-dot"></span>
              <span>爹稳稳接住，倒进<strong>某种容器</strong>。</span>
            </div>
          </div>
        </div>
        
        <div class="mini-choice">
          <p>这是什么容器？</p>
          <div class="mini-options">
            <button onclick="selectMiniChoice(this, '陶罐', false)">陶罐</button>
            <button onclick="selectMiniChoice(this, '坩埚', true)">坩埚</button>
            <button onclick="selectMiniChoice(this, '铁锅', false)">铁锅</button>
          </div>
          <div class="mini-result" id="mini-result-1"></div>
        </div>
        
        <button class="nav-btn" id="btn-page3" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第5页：铁渣 -->
    <div class="page" id="page-4" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">矿山与炉火</h3>
        </div>
        <div class="text-block">
          <p>作坊院子里永远堆着两堆东西：</p>
          <div class="item-row">
            <div class="clickable-item" onclick="collectNode('铁渣', '感', this)">
              <span class="pulse-dot"></span>
              <span>黑色的<strong>铁渣</strong></span>
            </div>
            <span>和</span>
            <div class="clickable-item" onclick="collectRelic('坩埚残片', this)">
              <span class="pulse-dot"></span>
              <span>碎裂的<strong>陶片</strong></span>
            </div>
          </div>
          <p class="sub-text">前者是矿石的骸骨，后者是容器的尸体。</p>
        </div>
        
        <div class="scene-wide">
          <div class="scene-placeholder wide"><span>铁渣堆</span></div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第6页：冶铁遗址 -->
    <div class="page" id="page-5" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">矿山与炉火</h3>
        </div>
        <div class="reveal-card" onclick="revealText(this)">
          <div class="reveal-front">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>两千年后</span>
          </div>
          <div class="reveal-back">
            <p>考古的人挖开这片山，指着炉渣、陶范、红褐色的铁块，兴奋地说：</p>
            <div class="highlight-text" onclick="collectRelic('战国冶铁炉遗址', this)">
              <span class="pulse-dot"></span>
              <strong>"战国冶铁遗址！"</strong>
            </div>
            <p class="aside">冶辛要是知道，大概会指着那些铁渣说："哦，那是我们倒掉的。"</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第7页：铁器与农田 -->
    <div class="page" id="page-6" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">铁器与农田</h3>
        </div>
        
        <div class="scene-with-text">
          <div class="text-side">
            <p>十五岁那年，来作坊的农人越来越多。</p>
            <p>秦赵两国正在打仗，农人急着翻地、收成。</p>
          </div>
          <div class="scene-side">
            <div class="scene-placeholder"><span>农田</span></div>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第8页：老农 -->
    <div class="page" id="page-7" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">铁器与农田</h3>
        </div>
        
        <div class="dialogue-box">
          <div class="dialogue-avatar farmer"></div>
          <div class="dialogue-content">
            <span class="speaker">老农</span>
            <p>"地太硬，木犁扛不住。"</p>
            <div class="clickable-text inline" onclick="collectRelic('铁犁铧', this)">
              <span class="pulse-dot"></span>
              <strong>"铁犁能翻半尺深。"</strong>
            </div>
          </div>
        </div>
        
        <div class="mini-choice">
          <p>用铁犁的效率是木犁的几倍？</p>
          <div class="mini-options">
            <button onclick="selectMiniChoice2(this, '相同', false)">相同</button>
            <button onclick="selectMiniChoice2(this, '两倍', true)">两倍</button>
            <button onclick="selectMiniChoice2(this, '三倍', false)">三倍</button>
          </div>
          <div class="mini-result" id="mini-result-2"></div>
        </div>
        
        <button class="nav-btn" id="btn-page7" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第9页：农业革命 -->
    <div class="page" id="page-8" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">铁器与农田</h3>
        </div>
        
        <div class="text-block">
          <p>一亩地用木犁，两个人一天翻一亩；</p>
          <div class="compare-row">
            <div class="compare-item">
              <span class="num">2人</span>
              <span class="unit">木犁</span>
            </div>
            <div class="compare-arrow">→</div>
            <div class="compare-item highlight">
              <span class="num">1人</span>
              <span class="unit">铁犁</span>
            </div>
          </div>
          <p class="aside">两千年后的人管这叫"农业革命"。</p>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第10页：战争的影子 -->
    <div class="page" id="page-9" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">战争的影子</h3>
        </div>
        
        <div class="scene-with-text">
          <div class="scene-side">
            <div class="scene-placeholder"><span>秦军</span></div>
          </div>
          <div class="text-side">
            <p>十八岁。作坊来个穿皮甲的军官。</p>
            <div class="quote-box">"百套兵器，月底交货。"</div>
            <p>做犁要韧，做剑要硬。炉火得改配方。</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第11页：箭镞 -->
    <div class="page" id="page-10" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">战争的影子</h3>
        </div>
        
        <div class="text-block">
          <p>最忙的时候，作坊像个军营。</p>
          <p>士兵把成捆的矛、成袋的箭头往肩上一扛。</p>
          <p>冶辛数过，一个箭袋五十支，一个士兵背四袋。</p>
        </div>
        
        <div class="artifact-showcase" onclick="collectNode('箭镞', '感', this); collectRelic('三棱铁箭镞', this);">
          <div class="artifact-visual">
            <div class="scene-placeholder small"><span>箭镞</span></div>
          </div>
          <div class="artifact-info">
            <span class="pulse-dot"></span>
            <p>最后一批货：<strong>三棱箭镞</strong></p>
            <p class="sub">能射穿皮甲的小东西</p>
          </div>
        </div>
        
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第12页：结尾 -->
    <div class="page" id="page-11" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">尾声</h3>
        </div>
        
        <div class="ending-text">
          <p>后来她听说，那年<strong>长平之战</strong>，赵国输了四十万人。</p>
          <p>她坐在炉子边，想着那些铁器去了哪里，</p>
          <p>是不是和骨头一起锈成了土。</p>
          <div class="divider"></div>
          <p class="final">我做了一辈子的铁。</p>
          <p class="final">知道每块铁的来处，</p>
          <p class="final">却永远猜不到它们的归途。</p>
        </div>
        
        <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
      </div>
    </div>
    
    <!-- 第13页：总结 -->
    <div class="page" id="page-12" style="display:none">
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
    <span class="dot" onclick="if(isPageUnlocked(9)) showPage(9)"></span>
    <span class="dot" onclick="if(isPageUnlocked(10)) showPage(10)"></span>
    <span class="dot" onclick="if(isPageUnlocked(11)) showPage(11)"></span>
    <span class="dot final" onclick="if(isPageUnlocked(12)) showPage(12)"></span>
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

.scene-img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  filter: sepia(20%) saturate(80%) hue-rotate(-10deg);
}

.scene-img-small {
  max-width: 150px;
  max-height: 120px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  filter: sepia(20%) saturate(80%) hue-rotate(-10deg);
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
  margin: 0;
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

.card-icon.light {
  background: linear-gradient(135deg, #e8e0d8, #d0c8c0);
}

.card-icon.heavy {
  background: linear-gradient(135deg, #5a4a3a, #3d3d3d);
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

.sub-text {
  color: #888;
  font-size: 0.9rem;
  font-style: italic;
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

.aside {
  color: #999;
  font-size: 0.85rem;
  font-style: italic;
  margin-top: 15px;
}

/* 对比行 */
.compare-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 25px 0;
  padding: 20px;
  background: #f5f3f0;
  border-radius: 12px;
}

.compare-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.compare-item .num {
  font-size: 2rem;
  color: #666;
  font-family: "Songti SC", serif;
}

.compare-item .unit {
  color: #888;
  font-size: 0.85rem;
}

.compare-item.highlight .num {
  color: var(--accent);
}

.compare-arrow {
  color: #ccc;
  font-size: 1.5rem;
}

/* 引用框 */
.quote-box {
  background: rgba(128,0,32,0.05);
  padding: 15px 20px;
  border-radius: 8px;
  margin: 15px 0;
  color: var(--accent);
  font-style: italic;
  border-left: 3px solid var(--accent);
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
var totalPages = 13;
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
  showPage(12);
  updateSummary();
}

function updateSummary() {
  document.getElementById('summary-node-count').textContent = Object.keys(collections.nodes).length;
  document.getElementById('summary-relic-count').textContent = Object.keys(collections.relics).length;
  
  var nodesList = document.getElementById('summary-nodes');
  var allNodes = ['炉火', '铁水', '铁渣', '矿石', '箭镞'];
  nodesList.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="item ' + collected + '" data-node="' + n + '" data-theme="' + (collections.nodes[n]?.theme || '感') + '" onclick="collectFromSummary(this, \'' + n + '\')">' + n + '</span>';
  }).join('');
  
  var relicsList = document.getElementById('summary-relics');
  var allRelics = ['坩埚残片', '战国冶铁炉遗址', '铁犁铧', '三棱铁箭镞'];
  relicsList.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="item ' + collected + '" data-relic="' + r + '" onclick="collectRelicFromSummary(this, \'' + r + '\')">' + r + '</span>';
  }).join('');
}

function collectNode(nodeName, theme, el) {
  if (!collections.nodes[nodeName]) {
    collections.nodes[nodeName] = { theme: theme };
    el.classList.add('collected');
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

function selectOre(el, isCorrect) {
  document.querySelectorAll('.choice-card').forEach(function(c) {
    c.classList.remove('correct', 'wrong');
  });
  
  if (isCorrect) {
    el.classList.add('correct');
    document.getElementById('ore-feedback').textContent = '正确！铁矿石比废石沉。';
    document.getElementById('btn-page2').disabled = false;
  } else {
    el.classList.add('wrong');
    document.getElementById('ore-feedback').textContent = '不对，废石比较轻。';
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
    result.textContent = '坩埚是一种用耐火土烧制的厚壁陶罐。';
    result.classList.add('show');
    collectRelic('坩埚残片');
    document.getElementById('btn-page3').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '不对，再想想。';
    result.classList.add('show');
  }
}

function selectMiniChoice2(el, answer, isCorrect) {
  var parent = el.parentElement;
  parent.querySelectorAll('button').forEach(function(b) {
    b.classList.remove('correct', 'wrong');
  });
  
  var result = document.getElementById('mini-result-2');
  
  if (isCorrect) {
    el.classList.add('correct');
    result.textContent = '一亩地用木犁，两个人一天翻一亩；用铁犁，一个人一天翻两亩。';
    result.classList.add('show');
    document.getElementById('btn-page7').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '再算算看。';
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
  var allNodes = ['炉火', '铁水', '铁渣', '矿石', '箭镞'];
  nodesGrid.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectNode(\'' + n + '\', \'感\', this)">' + n + '</span>';
  }).join('');
  
  var relicsGrid = document.getElementById('panel-relics');
  var allRelics = ['坩埚残片', '战国冶铁炉遗址', '铁犁铧', '三棱铁箭镞'];
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