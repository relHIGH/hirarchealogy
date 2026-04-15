---
layout: default
title: 衡羽
---

<div class="story-wrapper" id="storyWrapper">
  
  <div class="pages-container" id="pagesContainer">
    
    <!-- 第1页：介绍 -->
    <div class="page" id="page-0">
      <div class="intro-layout">
        <div class="intro-left">
          <h1 class="char-name">衡羽篇</h1>
          <p class="char-era">秦 · 咸阳驿舍管事</p>
          <div class="char-bio">
            <p>前241年生于咸阳，时年25岁。负责驿舍食宿、换马与接待官吏的驿站管事，见证了帝国驰道纵横、文书往来的繁华，也经历了秦末动乱中驿站系统的崩溃。</p>
          </div>
          <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
        </div>      
        <div class="intro-right">
          <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="衡羽" class="scene-img"/>
        </div>
      </div>
    </div>
    
    <!-- 第2页：咸阳驿站 -->
    <div class="page" id="page-1" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">咸阳驿站</h3>
        </div>
        <div class="scene-with-text">
          <div class="scene-side">
            <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="驿站" class="scene-img"/>
            <div class="interact-hint">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
              <span>点击场景中的光点</span>
            </div>
          </div>
          <div class="text-side">
            <p>咸阳城东十五里，有一座</p>
            <div class="clickable-text" onclick="collectNode('驿舍', '旅', this)">
              <span class="pulse-dot"></span>
              <span><strong>驿舍</strong></span>
            </div>
            <p>每天迎来送往，有送军报的骑兵，有赴任的官员，也有商队和旅人。</p>
            <p>衡羽负责登记、安排食宿、更换马匹。</p>
          </div>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第3页：咸阳城 -->
    <div class="page" id="page-2" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">咸阳驿站</h3>
        </div>
        <div class="text-block">
          <p>衡羽生在</p>
          <div class="clickable-text inline" onclick="collectNode('咸阳', '旅', this)">
            <span class="pulse-dot"></span>
            <span><strong>咸阳</strong></span>
          </div>
          <p>长在咸阳，这辈子没离开过方圆百里。</p>
          <p>但他见过天下。每天都有人从四面八方来，带来各地的消息。</p>
          <p>"楚地水灾"、"赵边战事"、"齐地盐价"……衡羽在登记簿上一一记下。</p>
        </div>
        
        <div class="dialogue-box">
          <div class="dialogue-avatar traveler"></div>
          <div class="dialogue-content">
            <span class="speaker">旅人</span>
            <p>"从邯郸来，走了十天。这驰道真好走，比以前的山路强多了。"</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第4页：驰道 -->
    <div class="page" id="page-3" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">驰道纵横</h3>
        </div>
        <div class="scene-with-text">
          <div class="text-side">
            <p>秦始皇统一后，修建了从咸阳通往各地的</p>
            <div class="clickable-text" onclick="collectNode('驰道', '旅', this)">
              <span class="pulse-dot"></span>
              <span><strong>驰道</strong></span>
            </div>
            <p>宽五十步，路基夯得坚实，两旁种着青松。</p>
            <p>"车同轨"——天下马车的轮距都一样，可以在任何驰道上畅行。</p>
          </div>
          <div class="scene-side">
            <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="驰道" class="scene-img"/>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第5页：文书 -->
    <div class="page" id="page-4" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">咸阳驿站</h3>
        </div>
        <div class="text-block">
          <p>驿站最重要的任务，是传递</p>
          <div class="clickable-text inline" onclick="collectNode('文书', '旅', this)">
            <span class="pulse-dot"></span>
            <span><strong>文书</strong></span>
          </div>
          <p>军情紧急时，驿卒一天要换几次马，日夜兼程。</p>
          <p>衡羽见过加急的文书：封泥上盖着御史大夫的印，一站接一站，从边关直送咸阳。</p>
        </div>
        
        <div class="dialogue-box">
          <div class="dialogue-avatar official"></div>
          <div class="dialogue-content">
            <span class="speaker">驿卒</span>
            <p>"这是北边的军报，要在日落前送到章台宫。"</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第6页：行商 -->
    <div class="page" id="page-5" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">商旅往来</h3>
        </div>
        <div class="scene-with-text">
          <div class="scene-side">
            <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="行商" class="scene-img"/>
          </div>
          <div class="text-side">
            <p>除了官府的驿卒，</p>
            <div class="clickable-text" onclick="collectNode('行商', '旅', this)">
              <span class="pulse-dot"></span>
              <span><strong>行商</strong></span>
            </div>
            <p>也是驿站的常客。</p>
            <p>他们不能换马，但可以买食、借宿。衡羽喜欢和商人聊天，听他们讲各地的风土人情。</p>
          </div>
        </div>
        
        <div class="interaction-area">
          <p class="instruction">驿站每隔多少里一座？</p>
          <div class="choice-cards">
            <div class="choice-card" onclick="selectAnswer(this, '十里', false)">
              <div class="card-icon"></div>
              <span>十里</span>
            </div>
            <div class="choice-card" onclick="selectAnswer(this, '三十里', true)">
              <div class="card-icon"></div>
              <span>三十里</span>
            </div>
            <div class="choice-card" onclick="selectAnswer(this, '五十里', false)">
              <div class="card-icon"></div>
              <span>五十里</span>
            </div>
          </div>
          <div class="feedback" id="answer-feedback"></div>
        </div>
        
        <button class="nav-btn" id="btn-page5" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第7页：度量衡 -->
    <div class="page" id="page-6" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">统一度量衡</h3>
        </div>
        <div class="text-block">
          <p>衡羽的日常工作之一，是检查货物的</p>
          <div class="clickable-text inline" onclick="collectRelic('度量衡器', this)">
            <span class="pulse-dot"></span>
            <span><strong>度量衡</strong></span>
          </div>
          <p>——这是秦始皇统一的标准。</p>
          <p>以前各国度量不同，商人常常扯皮。现在有了统一的升斗、权衡，买卖顺畅多了。</p>
        </div>
        
        <div class="mini-choice">
          <p>"衡""量""度"分别指什么？</p>
          <div class="mini-options">
            <button onclick="selectMiniChoice(this, '长度', false)">长度</button>
            <button onclick="selectMiniChoice(this, '重量', true)">重量</button>
            <button onclick="selectMiniChoice(this, '容量', false)">容量</button>
          </div>
          <div class="mini-result" id="mini-result-1"></div>
        </div>
        
        <button class="nav-btn" id="btn-page6" onclick="nextPage()" disabled>下一页 →</button>
      </div>
    </div>
    
    <!-- 第8页：秦简 -->
    <div class="page" id="page-7" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">04</span>
          <h3 class="chapter-title">驿站印信</h3>
        </div>
        <div class="scene-with-text">
          <div class="text-side">
            <p>驿站有一枚铜印，是身份的凭证。文书封泥上要盖印，过往官员要验</p>
            <div class="clickable-text inline" onclick="collectRelic('驿站印信', this)">
              <span class="pulse-dot"></span>
              <span><strong>印信</strong></span>
            </div>
            <p>衡羽把它锁在匣子里，每天清点。</p>
          </div>
          <div class="scene-side">
            <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="印信" class="scene-img"/>
          </div>
        </div>
        
        <div class="artifact-showcase" onclick="collectRelic('秦简', this); this.classList.add('collected')">
          <div class="artifact-visual scene-placeholder small"><span>秦简</span></div>
          <div class="artifact-info">
            <p><strong>睡虎地秦简</strong></p>
            <p class="sub">云梦睡虎地出土的秦代竹简，记录了秦律和行政文书</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第9页：铜车马 -->
    <div class="page" id="page-8" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">04</span>
          <h3 class="chapter-title">驿站器物</h3>
        </div>
        <div class="text-block">
          <p>驿站里最值钱的东西，除了印信，就是那辆</p>
          <div class="clickable-text inline" onclick="collectRelic('铜车马构件', this)">
            <span class="pulse-dot"></span>
            <span><strong>铜车马</strong></span>
          </div>
          <p>——上级配发的公务用车。</p>
          <p>衡羽每天擦拭，检查轮轴。这辆车不知送过多少紧急文书，车轮滚滚，连接着帝国的神经。</p>
        </div>
        
        <div class="dialogue-box">
          <div class="dialogue-avatar elder"></div>
          <div class="dialogue-content">
            <span class="speaker">老驿卒</span>
            <p>"始皇帝在时，文书从边关到咸阳，只要七天。"</p>
          </div>
        </div>
        
        <button class="nav-btn" onclick="showSummary()">查看探索成果 →</button>
      </div>
    </div>
    
    <!-- 第10页：总结 -->
    <div class="page" id="page-8-summary" style="display:none">
      <div class="summary-layout">
        <h2 class="summary-title">探索完成</h2>
        
        <div class="stats-row">
          <div class="stat-box">
            <span class="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
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
  </div>
  
</div>

<style>
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

/* 场景图 */
.scene-img {
  max-width: 100%;
  max-height: 300px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  filter: sepia(20%) saturate(80%) hue-rotate(-10deg);
}

.scene-placeholder {
  width: 280px;
  height: 200px;
  background: linear-gradient(135deg, #e8e0d8 0%, #d8d0c8 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scene-placeholder.small {
  width: 120px;
  height: 80px;
}

.scene-placeholder span {
  color: rgba(128,0,32,0.3);
  font-family: "Songti SC", serif;
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
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
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
  border: 1.5px solid #d0c8d0;
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

/* 浮动工具栏 */
.floating-toolbar {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 100;
}

.floating-toolbar .toolbar-btn {
  width: 50px;
  height: 50px;
  background: var(--accent);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  box-shadow: 0 4px 15px rgba(128,0,32,0.3);
  transition: all 0.3s;
  position: relative;
}

.floating-toolbar .toolbar-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(128,0,32,0.4);
}

.toolbar-badge {
  position: absolute;
  top: -5px;
  right: -5px;
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
  .choice-cards { flex-direction: column; align-items: center; }
  .stats-row { flex-direction: column; gap: 15px; }
}
</style>

<script>
var currentPage = 0;
var totalPages = 9;
var collections = { nodes: {}, relics: {} };
var unlockedPages = [0];

function showPage(n) {
  if (!unlockedPages.includes(n)) return;
  
  document.querySelectorAll('.page').forEach(function(page, i) {
    page.style.display = i === n ? 'block' : 'none';
  });
  
  document.querySelectorAll('.dot').forEach(function(dot, i) {
    dot.classList.toggle('active', i === n);
  });
  
  currentPage = n;
  window.scrollTo(0, 0);
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    unlockedPages.push(currentPage + 1);
    showPage(currentPage + 1);
  }
}

function isPageUnlocked(n) {
  return unlockedPages.includes(n);
}

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
  var allNodes = ['驿舍', '咸阳', '驰道', '文书', '行商'];
  nodesGrid.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectNode(\'' + n + '\', \'旅\', this)">' + n + '</span>';
  }).join('');
  
  var relicsGrid = document.getElementById('panel-relics');
  var allRelics = ['驿站印信', '秦简', '铜车马构件', '度量衡器'];
  relicsGrid.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectRelic(\'' + r + '\', this)">' + r + '</span>';
  }).join('');
}

function selectAnswer(el, answer, isCorrect) {
  var parent = el.parentElement;
  parent.querySelectorAll('.choice-card').forEach(function(card) {
    card.classList.remove('correct', 'wrong');
  });
  
  var feedback = document.getElementById('answer-feedback');
  
  if (isCorrect) {
    el.classList.add('correct');
    feedback.textContent = '正确！驿站每隔三十里一座。';
    document.getElementById('btn-page5').disabled = false;
  } else {
    el.classList.add('wrong');
    feedback.textContent = '不对，再想想。';
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
    result.textContent = '"衡"指重量，"量"指容量，"度"指长度。秦始皇统一了这三个标准。';
    result.classList.add('show');
    document.getElementById('btn-page6').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '再想想看。';
    result.classList.add('show');
  }
}

function showSummary() {
  var nodeCount = Object.keys(collections.nodes).length;
  var relicCount = Object.keys(collections.relics).length;
  
  document.getElementById('summary-node-count').textContent = nodeCount;
  document.getElementById('summary-relic-count').textContent = relicCount;
  
  var nodesList = document.getElementById('summary-nodes');
  var allNodes = ['驿舍', '咸阳', '驰道', '文书', '行商'];
  nodesList.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="item ' + collected + '">' + n + '</span>';
  }).join('');
  
  var relicsList = document.getElementById('summary-relics');
  var allRelics = ['驿站印信', '秦简', '铜车马构件', '度量衡器'];
  relicsList.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="item ' + collected + '">' + r + '</span>';
  }).join('');
  
  unlockedPages.push(8);
  showPage(8);
}

function restart() {
  currentPage = 0;
  collections = { nodes: {}, relics: {} };
  unlockedPages = [0];
  document.querySelectorAll('.collected').forEach(function(el) {
    el.classList.remove('collected');
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