---
layout: default
title: 萧骐
---

<div class="story-wrapper" id="storyWrapper">
  <div class="pages-container" id="pagesContainer">
    
    <!-- 第1页：介绍 -->
    <div class="page" id="page-0">
      <div class="intro-layout">
        <div class="intro-left">
          <h1 class="char-name">萧骐篇</h1>
          <p class="char-era">辽 · 草原牧民信使</p>
          <div class="char-bio">
            <p>生于辽国上京附近的草原，父亲是部落信使。她从小骑着马，在广袤的蒙古高原上奔驰，熟悉契丹的毡帐，见证着草原与中原的往来。</p>
          </div>
          <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
        </div>      
        <div class="intro-right">
          <img src="{{ site.baseurl }}/assets/images/scenes/骁雪.png" alt="萧骐" class="scene-img"/>
        </div>
      </div>
    </div>
    
    <!-- 第2页：草原 -->
    <div class="page" id="page-1" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">草原长调</h3>
        </div>
        <div class="scene-with-text">
          <div class="scene-side">
            <img src="{{ site.baseurl }}/assets/images/scenes/骁雪.png" alt="草原" class="scene-img"/>
          </div>
          <div class="text-side">
            <p>萧骐生于
            <div class="clickable-text inline" onclick="collectNode('辽', '旅', this)">
              <span class="pulse-dot"></span>
              <span><strong>辽</strong></span>
            </div>
            国上京附近的
            <div class="clickable-text inline" onclick="collectNode('草原', '旅', this)">
              <span class="pulse-dot"></span>
              <span><strong>草原</strong></span>
            </div>
            ，父亲是部落
            <div class="clickable-text inline" onclick="collectNode('信使', '旅', this)">
              <span class="pulse-dot"></span>
              <span><strong>信使</strong></span>
            </div>
            。</p>
            <p>她从小骑着马，在广袤的
            <div class="clickable-text inline" onclick="collectNode('蒙古高原', '旅', this)">
              <span class="pulse-dot"></span>
              <span><strong>蒙古高原</strong></span>
            </div>
            上奔驰，熟悉契丹的毡帐，听得懂鹰的啸叫。</p>
          </div>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第3页：马匹 -->
    <div class="page" id="page-2" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">草原长调</h3>
        </div>
        
        <div class="text-block">
          <p>在草原上，
          <div class="clickable-text inline" onclick="collectNode('马', '旅', this)">
            <span class="pulse-dot"></span>
            <span><strong>马</strong></span>
          </div>
          是最重要的伙伴。</p>
          <p>萧骐三岁时就有了自己的小马驹，八岁能骑马射箭，十二岁就能独自骑马传递消息。</p>
        </div>
        
        <div class="artifact-showcase" onclick="collectRelic('马镫', this)">
          <div class="artifact-visual">
            <div class="scene-placeholder small"><span>马镫</span></div>
          </div>
          <div class="artifact-info">
            <span class="pulse-dot"></span>
            <p>辽代铁铸<strong>马镫</strong></p>
            <p class="sub">契丹骑兵的标准装备</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第4页：驿路 -->
    <div class="page" id="page-3" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">驿路风尘</h3>
        </div>
        
        <div class="scene-with-text">
          <div class="text-side">
            <p>辽国实行
            <div class="clickable-text inline" onclick="collectNode('南北面官', '旅', this)">
              <span class="pulse-dot"></span>
              <span><strong>南北面官</strong></span>
            </div>
            制度，萧骐经常往返于契丹旧俗与汉地农耕之间。</p>
            <p>她传递诏令，运送贡品，在
            <div class="clickable-text inline" onclick="collectNode('驿路', '旅', this)">
              <span class="pulse-dot"></span>
              <span><strong>驿路</strong></span>
            </div>
            上奔驰，见证着五京的繁华。</p>
          </div>
          <div class="scene-side">
            <div class="scene-placeholder"><span>驿路</span></div>
          </div>
        </div>
        
        <div class="dialogue-box">
          <div class="dialogue-avatar"></div>
          <div class="dialogue-content">
            <span class="speaker">部落长老</span>
            <p>"一个合格的信使，要能日行三百里，要能辨别方向，还要能在野外生存。"</p>
          </div>
        </div>
        
        <div class="clickable-text" onclick="collectRelic('驿符牌', this)">
          <span class="pulse-dot"></span>
          <span>萧骐随身携带的<strong>驿符牌</strong></span>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第5页：捺钵 -->
    <div class="page" id="page-4" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">驿路风尘</h3>
        </div>
        
        <div class="text-block">
          <p>辽国皇帝实行捺钵制度，四季巡狩。</p>
          <p>萧骐随皇室巡行，在冰上捕鱼，在草原上围猎。行路千里，只为传递一纸文书。</p>
        </div>
        
        <div class="mini-choice">
          <p>辽国皇帝的行宫叫什么？</p>
          <div class="mini-options">
            <button onclick="selectMiniChoice(this, '宫殿', false)">宫殿</button>
            <button onclick="selectMiniChoice(this, '捺钵', true)">捺钵</button>
            <button onclick="selectMiniChoice(this, '毡帐', false)">毡帐</button>
          </div>
          <div class="mini-result" id="mini-result-1"></div>
        </div>
        
        <div class="clickable-text" onclick="collectRelic('马鞍', this)">
          <span class="pulse-dot"></span>
          <span>精制<strong>马鞍</strong>，皇帝的赏赐</span>
        </div>
        
        <button class="nav-btn" id="btn-page4" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第6页：游牧 -->
    <div class="page" id="page-5" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">白马青牛</h3>
        </div>
        
        <div class="text-block">
          <p>岁月如草原上的风，萧骐渐渐老去。</p>
          <p>她给孙子讲述着
          <div class="clickable-text inline" onclick="collectNode('游牧', '旅', this)">
            <span class="pulse-dot"></span>
            <span><strong>游牧</strong></span>
          </div>
          的故事，那白马青牛的传说，仍在草原上传唱。</p>
        </div>
        
        <div class="reveal-card" onclick="revealText(this)">
          <div class="reveal-front">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            <span>萧骐的珍藏</span>
          </div>
          <div class="reveal-back">
            <div class="highlight-text" onclick="collectRelic('狼牙棒', this)">
              <span class="pulse-dot"></span>
              <strong>契丹狼牙棒</strong>
            </div>
            <p>这是萧骐年轻时使用的武器，见证了她无数次穿越草原的艰险旅程。</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第7页：尾声 -->
    <div class="page" id="page-6" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">04</span>
          <h3 class="chapter-title">草原回响</h3>
        </div>
        
        <div class="ending-text">
          <p>萧骐一生都在马上度过，走过的路能绕草原三圈。</p>
          <p>她见证了辽国的兴衰，也见证了草原的永恒。</p>
          <div class="divider"></div>
          <p class="final">她忆起年少时驰骋的马背，</p>
          <p class="final">那是她最珍贵的境界。</p>
          <p class="final">草原是家，</p>
          <p class="final">马匹是命，</p>
          <p class="final">信使是责。</p>
        </div>
        
        <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
      </div>
    </div>
    
    <!-- 第8页：总结 -->
    <div class="page" id="page-7" style="display:none">
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
/* 样式与茶岑页面相同 */
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
  animation: fadeIn 0.5s ease;
}
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
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
  line-height: 1.6;
  color: #555;
  margin: 0 0 30px 0;
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
.intro-right .scene-img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  filter: sepia(20%) saturate(80%) hue-rotate(-10deg);
}
.scene-img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  filter: sepia(20%) saturate(80%) hue-rotate(-10deg);
}
.chapter-layout { max-width: 700px; margin: 0 auto; }
.chapter-header { display: flex; align-items: baseline; gap: 15px; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 1px solid rgba(128,0,32,0.1); }
.chapter-num { font-family: "Songti SC", serif; font-size: 0.9rem; color: var(--accent); opacity: 0.6; }
.chapter-title { font-family: "Songti SC", serif; font-size: 1.5rem; color: var(--accent); margin: 0; }
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
.clickable-text, .clickable-item { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: rgba(128,0,32,0.05); border: 1px solid rgba(128,0,32,0.2); border-radius: 20px; cursor: pointer; transition: all 0.3s; margin: 10px 0; }
.clickable-text:hover, .clickable-item:hover { background: rgba(128,0,32,0.1); }
.clickable-text.collected, .clickable-item.collected { background: var(--accent); color: white; border-color: var(--accent); }
.clickable-text.inline { display: inline-flex; margin: 0 5px; }
.pulse-dot { width: 8px; height: 8px; background: var(--accent); border-radius: 50%; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.2); } }
.dialogue-box { display: flex; gap: 20px; background: #f5f3f0; padding: 25px; border-radius: 12px; margin: 30px 0; }
.dialogue-avatar { width: 50px; height: 50px; background: rgba(128,0,32,0.1); border-radius: 50%; flex-shrink: 0; }
.dialogue-content { flex: 1; }
.speaker { font-size: 0.85rem; color: var(--accent); font-weight: 600; margin-bottom: 8px; display: block; }
.reveal-card { background: #f5f3f0; border-radius: 12px; padding: 30px; text-align: center; cursor: pointer; transition: all 0.3s; margin: 20px 0; }
.reveal-card:hover { background: rgba(128,0,32,0.08); }
.reveal-card.revealed { border-style: solid; }
.reveal-front { display: flex; flex-direction: column; align-items: center; gap: 10px; color: var(--accent); }
.reveal-back { display: none; text-align: left; }
.reveal-card.revealed .reveal-front { display: none; }
.reveal-card.revealed .reveal-back { display: block; }
.highlight-text { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: rgba(128,0,32,0.1); border-radius: 20px; margin: 15px 0; cursor: pointer; }
.mini-choice { margin: 30px 0; padding: 20px; background: #f5f3f0; border-radius: 12px; }
.mini-options { display: flex; gap: 10px; flex-wrap: wrap; }
.mini-options button { padding: 8px 20px; background: white; border: 1px solid rgba(128,0,32,0.2); border-radius: 20px; cursor: pointer; transition: all 0.3s; }
.mini-options button:hover { background: rgba(128,0,32,0.05); }
.mini-options button.correct { background: #d4edda; border-color: #28a745; }
.mini-options button.wrong { background: #f8d7da; border-color: #dc3545; }
.mini-result { margin-top: 15px; color: #555; min-height: 24px; }
.mini-result.show { color: var(--accent); }
.artifact-showcase { display: flex; gap: 20px; background: #f5f3f0; border-radius: 12px; padding: 20px; margin: 20px 0; cursor: pointer; transition: all 0.3s; }
.artifact-showcase:hover { background: #f0ece8; }
.artifact-info .sub { font-size: 0.85rem; color: #888; }
.item-row { display: flex; align-items: center; gap: 10px; margin: 20px 0; flex-wrap: wrap; }
.text-block { margin-bottom: 20px; }
.text-block > p {
  line-height: 1.9;
  color: #444;
  margin-bottom: 1em;
  font-size: 0.95rem;
}
.ending-text { text-align: center; padding: 40px 20px; }
.ending-text .final { font-size: 1.1rem; color: #444; margin-bottom: 15px; line-height: 1.8; }
.divider { width: 60px; height: 1px; background: rgba(128,0,32,0.2); margin: 30px auto; }
.summary-layout { text-align: center; padding: 40px 20px; }
.summary-title { font-family: "Songti SC", serif; font-size: 2rem; color: var(--accent); margin-bottom: 40px; }
.stats-row { display: flex; justify-content: center; gap: 40px; margin-bottom: 40px; }
.stat-box { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.stat-icon { color: var(--accent); }
.stat-num { font-size: 2.5rem; font-weight: 600; color: var(--accent); }
.stat-label { color: #888; font-size: 0.9rem; }
.collection-showcase { background: #f5f3f0; border-radius: 12px; padding: 30px; margin-bottom: 40px; text-align: left; }
.showcase-section { margin-bottom: 25px; }
.showcase-section h4 { color: #888; font-size: 0.85rem; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 1px; }
.showcase-list { display: flex; flex-wrap: wrap; gap: 10px; }
.showcase-list .item { padding: 8px 16px; background: white; border: 1px solid rgba(128,0,32,0.2); border-radius: 20px; font-size: 0.9rem; color: #666; }
.showcase-list .item.collected { background: var(--accent); color: white; border-color: var(--accent); }
.summary-actions { display: flex; justify-content: center; gap: 20px; }
.btn-primary { padding: 12px 30px; background: var(--accent); color: white; border: none; border-radius: 30px; cursor: pointer; font-size: 0.95rem; transition: all 0.3s; }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(128,0,32,0.3); }
.page-dots { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 100; }
.dot { width: 8px; height: 8px; background: rgba(128,0,32,0.2); border-radius: 50%; cursor: pointer; transition: all 0.3s; }
.dot.active { background: var(--accent); transform: scale(1.2); }
.scene-placeholder { background: rgba(128,0,32,0.05); border: 2px dashed rgba(128,0,32,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #888; font-size: 0.9rem; min-height: 200px; }
.scene-placeholder.small { min-height: 100px; width: 100px; }
.toast { position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: white; padding: 12px 24px; border-radius: 30px; font-size: 0.9rem; z-index: 1000; animation: fadeIn 0.3s ease; }

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

@media (max-width: 900px) {
  .pages-container { padding: 20px 30px 40px; }
  .page { padding-left: 30px; }
  .intro-layout { flex-direction: column; }
  .intro-left { flex: none; width: 100%; }
  .scene-with-text { flex-direction: column; }
  .scene-side { flex: none; }
  .choice-cards { flex-direction: column; align-items: center; }
  .stats-row { flex-direction: column; gap: 15px; }
  .bottom-toolbar { right: 55px; padding: 0 20px; }
  .collection-panel { right: 20px; width: calc(100vw - 40px); max-width: 300px; }
}
</style>

<script>
var currentPage = 0;
var totalPages = 8;
var unlockedPages = [0];
var collections = { nodes: {}, relics: {} };

function showPage(n) {
  if (!unlockedPages.includes(n)) return;
  document.querySelectorAll('.page').forEach(function(page, i) { page.style.display = i === n ? 'block' : 'none'; });
  document.querySelectorAll('.dot').forEach(function(dot, i) { dot.classList.toggle('active', i === n); });
  currentPage = n;
  window.scrollTo(0, 0);
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    unlockedPages.push(currentPage + 1);
    showPage(currentPage + 1);
  }
}

function isPageUnlocked(n) { return unlockedPages.includes(n); }

function collectNode(nodeName, theme, el) {
  if (!collections.nodes[nodeName]) {
    collections.nodes[nodeName] = { theme: theme };
    if (el) el.classList.add('collected');
    updateBadge();
    updateCollectionPanel();
    showToast('收集节点：' + nodeName);
  }
}

function collectRelic(relicName, el) {
  if (!collections.relics[relicName]) {
    collections.relics[relicName] = true;
    if (el) el.classList.add('collected');
    updateBadge();
    updateCollectionPanel();
    showToast('收集文物：' + relicName);
  }
}

function updateBadge() {
  var count = Object.keys(collections.nodes).length + Object.keys(collections.relics).length;
  document.getElementById('collection-badge').textContent = count;
}

function toggleCollectionPanel() {
  document.getElementById('collectionPanel').classList.toggle('active');
}

function updateCollectionPanel() {
  var nodesGrid = document.getElementById('panel-nodes');
  var allNodes = ['辽', '草原', '信使', '马', '蒙古高原', '驿路', '南北面官', '游牧'];
  nodesGrid.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectNode(\'' + n + '\', \'旅\', this)">' + n + '</span>';
  }).join('');
  var relicsGrid = document.getElementById('panel-relics');
  var allRelics = ['马镫', '驿符牌', '马鞍', '狼牙棒'];
  relicsGrid.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectRelic(\'' + r + '\', this)">' + r + '</span>';
  }).join('');
}

function selectMiniChoice(el, answer, isCorrect) {
  var parent = el.parentElement;
  parent.querySelectorAll('button').forEach(function(b) { b.classList.remove('correct', 'wrong'); });
  var result = document.getElementById('mini-result-1');
  if (isCorrect) {
    el.classList.add('correct');
    result.textContent = '正确！辽国皇帝实行捺钵制度，四季巡狩于草原。';
    result.classList.add('show');
    document.getElementById('btn-page4').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '不对，再想想。';
    result.classList.add('show');
  }
}

function revealText(el) { el.classList.add('revealed'); }

function showSummary() {
  var nodeCount = Object.keys(collections.nodes).length;
  var relicCount = Object.keys(collections.relics).length;
  document.getElementById('summary-node-count').textContent = nodeCount;
  document.getElementById('summary-relic-count').textContent = relicCount;
  var nodesList = document.getElementById('summary-nodes');
  var allNodes = ['辽', '草原', '信使', '马', '蒙古高原', '驿路', '南北面官', '游牧'];
  nodesList.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="item ' + collected + '">' + n + '</span>';
  }).join('');
  var relicsList = document.getElementById('summary-relics');
  var allRelics = ['马镫', '驿符牌', '马鞍', '狼牙棒'];
  relicsList.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="item ' + collected + '">' + r + '</span>';
  }).join('');
  unlockedPages.push(7);
  showPage(7);
}

function restart() {
  currentPage = 0; collections = { nodes: {}, relics: {} }; unlockedPages = [0];
  document.querySelectorAll('.collected').forEach(function(el) { el.classList.remove('collected'); });
  document.querySelectorAll('.revealed').forEach(function(el) { el.classList.remove('revealed'); });
  document.querySelectorAll('.correct, .wrong').forEach(function(el) { el.classList.remove('correct', 'wrong'); });
  document.querySelectorAll('.mini-result').forEach(function(el) { el.classList.remove('show'); el.textContent = ''; });
  updateBadge(); updateCollectionPanel(); showPage(0);
}

function exportProgress() { alert('分享功能开发中'); }

function showToast(msg) {
  var toast = document.createElement('div'); toast.className = 'toast'; toast.textContent = msg;
  document.body.appendChild(toast); setTimeout(function() { toast.remove(); }, 2000);
}

document.addEventListener('DOMContentLoaded', function() { showPage(0); updateCollectionPanel(); });
</script>
