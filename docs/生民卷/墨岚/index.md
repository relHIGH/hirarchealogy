---
layout: default
title: 细封简兰
---

<div class="story-wrapper" id="storyWrapper">
  <div class="pages-container" id="pagesContainer">
    
    <!-- 第1页：介绍 -->
    <div class="page" id="page-0">
      <div class="intro-layout">
        <div class="intro-left">
          <h1 class="char-name">细封简兰篇</h1>
          <p class="char-era">西夏 · 黑水城文书吏</p>
          <div class="char-bio">
            <p>任职于西夏黑水城，这座沙漠中的军镇是丝绸之路北道的要冲。她精通西夏文和汉文，负责抄写文书、管理档案，在多元文化交汇之地见证了西夏的兴衰。</p>
          </div>
          <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
        </div>      
        <div class="intro-right">
          <img src="{{ site.baseurl }}/assets/images/scenes/墨岚.png" alt="细封简兰" class="scene-img"/>
        </div>
      </div>
    </div>
    
    <!-- 第2页：黑水城 -->
    <div class="page" id="page-1" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">黑城岁月</h3>
        </div>
        <div class="scene-with-text">
          <div class="scene-side">
            <img src="{{ site.baseurl }}/assets/images/scenes/墨岚.png" alt="黑水城" class="scene-img"/>
          </div>
          <div class="text-side">
            <p>细封简兰任职于
            <div class="clickable-text inline" onclick="collectNode('西夏', '感', this)">
              <span class="pulse-dot"></span>
              <span><strong>西夏</strong></span>
            </div>
            国
            <div class="clickable-text inline" onclick="collectNode('黑水城', '感', this)">
              <span class="pulse-dot"></span>
              <span><strong>黑水城</strong></span>
            </div>
            ，这座沙漠中的军镇是丝绸之路北道的要冲。</p>
            <p>城池建于西夏贞观年间，城墙用黄土夯筑，历经风沙侵蚀，依然屹立不倒。</p>
          </div>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第3页：文书 -->
    <div class="page" id="page-2" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">黑城岁月</h3>
        </div>
        
        <div class="text-block">
          <p>简兰的工作是抄写
          <div class="clickable-text inline" onclick="collectNode('文书', '感', this)">
            <span class="pulse-dot"></span>
            <span><strong>文书</strong></span>
          </div>
          、管理档案。</p>
          <p>她精通
          <div class="clickable-text inline" onclick="collectNode('西夏文', '感', this)">
            <span class="pulse-dot"></span>
            <span><strong>西夏文</strong></span>
          </div>
          和
          <div class="clickable-text inline" onclick="collectNode('汉文', '感', this)">
            <span class="pulse-dot"></span>
            <span><strong>汉文</strong></span>
          </div>
          ，能用两种文字记录政令、翻译典籍。</p>
          <p>每当节庆，她便用茶和酒招待来访的客商，听他们讲述远方的故事。</p>
        </div>
        
        <div class="artifact-showcase" onclick="collectRelic('西夏文木活字', this)">
          <div class="artifact-visual">
            <div class="scene-placeholder small"><span>木活字</span></div>
          </div>
          <div class="artifact-info">
            <span class="pulse-dot"></span>
            <p>简兰使用的<strong>西夏文木活字</strong></p>
            <p class="sub">世界上最早的木活字印刷实物之一</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第4页：丝路 -->
    <div class="page" id="page-3" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">丝路交汇</h3>
        </div>
        
        <div class="scene-with-text">
          <div class="text-side">
            <p>黑水城地处
            <div class="clickable-text inline" onclick="collectNode('额济纳', '感', this)">
              <span class="pulse-dot"></span>
              <span><strong>额济纳</strong></span>
            </div>
            河畔，是丝路北道的枢纽。</p>
            <p>简兰见证了往来商队的繁华：
            <div class="clickable-text inline" onclick="collectNode('回鹘', '感', this)">
              <span class="pulse-dot"></span>
              <span><strong>回鹘</strong></span>
            </div>
            商人、
            <div class="clickable-text inline" onclick="collectNode('吐蕃', '感', this)">
              <span class="pulse-dot"></span>
              <span><strong>吐蕃</strong></span>
            </div>
            使节、
            <div class="clickable-text inline" onclick="collectNode('蒙古', '感', this)">
              <span class="pulse-dot"></span>
              <span><strong>蒙古</strong></span>
            </div>
            驼队，都在此停留。</p>
          </div>
          <div class="scene-side">
            <div class="scene-placeholder"><span>丝路</span></div>
          </div>
        </div>
        
        <div class="dialogue-box">
          <div class="dialogue-avatar"></div>
          <div class="dialogue-content">
            <span class="speaker">回鹘商人</span>
            <p>"从撒马尔罕来，带了宝石和香料。这里的东西比中原便宜三成。"</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第5页：佛经 -->
    <div class="page" id="page-4" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">丝路交汇</h3>
        </div>
        
        <div class="text-block">
          <p>西夏国信奉佛教，黑水城有许多寺庙。简兰在抄写佛经的过程中，融入了虔诚的信仰。</p>
          <p>夜深人静时，她常感叹人生如行路，每一程都有独特的境界。</p>
        </div>
        
        <div class="mini-choice">
          <p>西夏国主要信奉什么宗教？</p>
          <div class="mini-options">
            <button onclick="selectMiniChoice(this, '道教', false)">道教</button>
            <button onclick="selectMiniChoice(this, '佛教', true)">佛教</button>
            <button onclick="selectMiniChoice(this, '伊斯兰教', false)">伊斯兰教</button>
          </div>
          <div class="mini-result" id="mini-result-1"></div>
        </div>
        
        <div class="clickable-text" onclick="collectRelic('藏文经卷', this)">
          <span class="pulse-dot"></span>
          <span>简兰抄写的<strong>藏文经卷</strong></span>
        </div>
        
        <button class="nav-btn" id="btn-page4" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第6页：尘封 -->
    <div class="page" id="page-5" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">尘封千年</h3>
        </div>
        
        <div class="text-block">
          <p>1227年，蒙古大军西征，黑水城被围困。</p>
          <p>简兰将重要文献封存在佛塔中，希望它们能够幸存。</p>
        </div>
        
        <div class="reveal-card" onclick="revealText(this)">
          <div class="reveal-front">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>考古发现</span>
          </div>
          <div class="reveal-back">
            <div class="highlight-text" onclick="collectRelic('汉文文书', this)">
              <span class="pulse-dot"></span>
              <strong>汉文文书档案</strong>
            </div>
            <p>1909年，俄国探险家科兹洛夫在黑水城发现了大量文献，包括简兰抄写的文书。这些文书后来成为研究西夏的珍贵史料。</p>
          </div>
        </div>
        
        <div class="clickable-text" onclick="collectRelic('铜印', this)">
          <span class="pulse-dot"></span>
          <span>出土的西夏<strong>铜印</strong></span>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第7页：尾声 -->
    <div class="page" id="page-6" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">04</span>
          <h3 class="chapter-title">永恒的记忆</h3>
        </div>
        
        <div class="ending-text">
          <p>简兰消失在历史的尘埃中，她抄写的文书却保存了下来。</p>
          <p>那些泛黄的纸页上，记录着西夏人平凡而真实的生活。</p>
          <div class="divider"></div>
          <p class="final">她一生都在书写，</p>
          <p class="final">却不知自己也成为了历史的一部分。</p>
          <p class="final">文字比人长寿，</p>
          <p class="final">这是文书吏最大的安慰。</p>
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
  
  <!-- 浮动工具栏 -->
  <div class="floating-toolbar">
    <button class="toolbar-btn" onclick="toggleCollectionPanel()" title="收集品">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
      <span class="toolbar-badge" id="collection-badge">0</span>
    </button>
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
.story-wrapper { max-width: 900px; margin: 0 auto; padding: 20px; background: #faf6ee; }
.pages-container { position: relative; }
.page { animation: fadeIn 0.5s ease; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.intro-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; min-height: 60vh; }
.char-name { font-family: "Songti SC", serif; font-size: 2.5rem; color: var(--accent); margin-bottom: 10px; }
.char-era { color: #888; font-size: 1rem; margin-bottom: 30px; letter-spacing: 2px; }
.char-bio { line-height: 1.8; color: #555; margin-bottom: 40px; }
.nav-btn { padding: 12px 32px; background: var(--accent); color: white; border: none; border-radius: 30px; font-size: 1rem; cursor: pointer; transition: all 0.3s; font-family: inherit; }
.nav-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(128,0,32,0.3); }
.nav-btn:disabled { opacity: 0.5; cursor: not-allowed; }
.intro-right .scene-img { width: 100%; border-radius: 12px; box-shadow: 0 20px 60px rgba(0,0,0,0.1); }
.chapter-layout { max-width: 700px; margin: 0 auto; }
.chapter-header { display: flex; align-items: baseline; gap: 15px; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 1px solid rgba(128,0,32,0.1); }
.chapter-num { font-family: "Songti SC", serif; font-size: 0.9rem; color: var(--accent); opacity: 0.6; }
.chapter-title { font-family: "Songti SC", serif; font-size: 1.5rem; color: var(--accent); margin: 0; }
.scene-with-text { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; }
.scene-img { width: 100%; border-radius: 12px; }
.text-side p, .text-block p { line-height: 1.8; color: #444; margin-bottom: 15px; }
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
.text-block { line-height: 1.8; margin-bottom: 30px; }
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

/* 浮动工具栏 */
.floating-toolbar { position: fixed; bottom: 80px; right: 80px; display: flex; flex-direction: column; gap: 10px; z-index: 100; }
.toolbar-btn { width: 44px; height: 44px; background: white; border: 1px solid rgba(128,0,32,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--accent); transition: all 0.3s; position: relative; }
.toolbar-btn:hover { background: var(--accent); color: white; border-color: var(--accent); }
.toolbar-badge { position: absolute; top: -2px; right: -2px; width: 18px; height: 18px; background: var(--accent); color: white; font-size: 0.7rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.collection-panel { position: fixed; top: 50%; right: 80px; transform: translateY(-50%) translateX(120%); width: 280px; max-height: 70vh; background: white; border-radius: 16px; box-shadow: 0 5px 30px rgba(0,0,0,0.15); transition: transform 0.3s, opacity 0.3s; z-index: 200; display: none; flex-direction: column; opacity: 0; pointer-events: none; }
.collection-panel.active { display: flex; transform: translateY(-50%) translateX(0); opacity: 1; pointer-events: auto; }
.panel-header { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; border-bottom: 1px solid #f0ede8; }
.panel-header h4 { margin: 0; font-family: "Songti SC", serif; color: var(--accent); }
.panel-header button { background: none; border: none; cursor: pointer; color: #999; padding: 4px; }
.panel-body { padding: 20px; overflow-y: auto; }
.panel-section { margin-bottom: 20px; }
.panel-section h5 { font-size: 0.8rem; color: #999; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px; }
.panel-grid { display: flex; flex-wrap: wrap; gap: 8px; }
.panel-item { padding: 6px 12px; background: rgba(128,0,32,0.05); border: 1px solid rgba(128,0,32,0.1); border-radius: 15px; font-size: 0.8rem; color: #666; cursor: pointer; transition: all 0.3s; }
.panel-item:hover { background: rgba(128,0,32,0.1); }
.panel-item.collected { background: var(--accent); color: white; border-color: var(--accent); }

@media (max-width: 768px) { .intro-layout, .scene-with-text { grid-template-columns: 1fr; gap: 30px; } .char-name { font-size: 2rem; } .stats-row { gap: 20px; } .stat-num { font-size: 2rem; } .floating-toolbar { right: 20px; bottom: 20px; } .collection-panel { right: 20px; width: calc(100vw - 40px); max-width: 300px; } }
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
  var allNodes = ['西夏', '黑水城', '文书', '西夏文', '汉文', '额济纳', '回鹘', '吐蕃', '蒙古'];
  nodesGrid.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectNode(\'' + n + '\', \'感\', this)">' + n + '</span>';
  }).join('');
  var relicsGrid = document.getElementById('panel-relics');
  var allRelics = ['西夏文木活字', '汉文文书', '藏文经卷', '铜印'];
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
    result.textContent = '正确！西夏国信奉佛教，留下了大量佛经文献。';
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
  var allNodes = ['西夏', '黑水城', '文书', '西夏文', '汉文', '额济纳', '回鹘', '吐蕃', '蒙古'];
  nodesList.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="item ' + collected + '">' + n + '</span>';
  }).join('');
  var relicsList = document.getElementById('summary-relics');
  var allRelics = ['西夏文木活字', '汉文文书', '藏文经卷', '铜印'];
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
