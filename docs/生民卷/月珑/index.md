---
layout: story
title: 月珑
nodes:
  - name: 长安
    theme: 旅
  - name: 西市
    theme: 旅
  - name: 胡商
    theme: 旅
  - name: 香料
    theme: 旅
  - name: 丝路
    theme: 旅
relics:
  - 香料囊
  - 开元通宝
  - 波斯银币
  - 骆驼俑
total_pages: 10
---

<!-- 第1页：介绍 -->
<div class="page" id="page-0">
  <div class="intro-layout">
    <div class="intro-left">
      <h1 class="char-name">月珑篇</h1>
      <p class="char-era">唐 · 长安胡商</p>
      <div class="char-bio">
        <p>生于波斯，长于长安。开元年间经营香料铺于西市，是丝路贸易中的一个微小节点。她的故事，是东西方交汇的缩影。</p>
      </div>
      <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
    </div>      
    <div class="intro-right">
      <div class="scene-placeholder"><span>长安西市</span></div>
    </div>
  </div>
</div>

<!-- 第2页：长安 -->
<div class="page" id="page-1">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">大唐长安</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <div class="scene-placeholder"><span>长安城</span></div>
        <div class="interact-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
          <span>点击场景中的光点</span>
        </div>
      </div>
      <div class="text-side">
        <p>月珑的父亲是波斯商人，母亲是长安歌姬。</p>
        <p>她从小在西市长大，说得一口流利的唐言和波斯语。</p>
        <div class="clickable-text" onclick="collectNode('长安', '旅', this)">
          <span class="pulse-dot"></span>
          <span><strong>长安</strong>是世界的中心，每天有成千上万的人从这里经过。</span>
        </div>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第3页：西市 -->
<div class="page" id="page-2">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">大唐长安</h3>
    </div>
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">父亲</span>
        <p>"西市是胡商的天下，你要学会和所有人打交道。"</p>
      </div>
    </div>
    <div class="text-block">
      <p>西市有两百多行，四万多家店铺。</p>
      <div class="clickable-text" onclick="collectNode('西市', '旅', this)">
        <span class="pulse-dot"></span>
        <span>丝绸、香料、珠宝、药材……<strong>西市</strong>应有尽有。</span>
      </div>
    </div>
    
    <div class="mini-choice">
      <p>唐代长安的东市主要卖什么？</p>
      <div class="mini-options">
        <button onclick="selectMiniChoice(this, '奢侈品', false)">奢侈品</button>
        <button onclick="selectMiniChoice(this, '本地货物', true)">本地货物</button>
        <button onclick="selectMiniChoice(this, '外国商品', false)">外国商品</button>
      </div>
      <div class="mini-result" id="mini-result-1"></div>
    </div>
    
    <button class="nav-btn" id="btn-page2" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第4页：胡商 -->
<div class="page" id="page-3">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">大唐长安</h3>
    </div>
    <div class="text-block">
      <p>月珑二十岁那年，父亲病逝，她接手了香料铺。</p>
      <p>作为<strong>胡商</strong>，她有自己的优势——懂得异域香料，会说多种语言。</p>
    </div>
    <div class="scene-wide">
      <div class="scene-placeholder wide"><span>香料铺</span></div>
    </div>
    <div class="clickable-text" onclick="collectNode('胡商', '旅', this)">
      <span class="pulse-dot"></span>
      <span>但她也要面对歧视和猜忌，毕竟不是"自己人"。</span>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第5页：丝路 -->
<div class="page" id="page-4">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">丝路漫漫</h3>
    </div>
    <div class="scene-with-text">
      <div class="text-side">
        <p>香料从波斯运来，要经过漫长的<strong>丝路</strong>。</p>
        <p>骆驼队要走半年，穿越沙漠、翻越高山。</p>
        <div class="clickable-text" onclick="collectNode('丝路', '旅', this)">
          <span class="pulse-dot"></span>
          <span>每一颗香料，都沾着风沙和汗水。</span>
        </div>
      </div>
      <div class="scene-side">
        <div class="scene-placeholder"><span>驼队</span></div>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第6页：香料 -->
<div class="page" id="page-5">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">丝路漫漫</h3>
    </div>
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">顾客</span>
        <p>"这龙涎香是真的吗？听说价比黄金。"</p>
      </div>
    </div>
    <div class="text-block">
      <div class="clickable-text" onclick="collectNode('香料', '旅', this); collectRelic('香料囊', this);">
        <span class="pulse-dot"></span>
        <span><strong>香料</strong>不只是调味品，还是药材、香水、祭祀用品。</span>
      </div>
      <p>月珑最骄傲的是，她能分辨上百种香料的真假。</p>
    </div>
    
    <div class="interaction-area">
      <p class="instruction">以下哪种不是唐代常见的进口香料？</p>
      <div class="choice-cards">
        <div class="choice-card" onclick="selectChoice(this, '胡椒', false)">
          <div class="card-icon spice"></div>
          <span>胡椒</span>
        </div>
        <div class="choice-card" onclick="selectChoice(this, '咖啡', true)">
          <div class="card-icon bean"></div>
          <span>咖啡</span>
        </div>
      </div>
      <div class="feedback" id="choice-feedback"></div>
    </div>
    
    <button class="nav-btn" id="btn-page5" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第7页：货币 -->
<div class="page" id="page-6">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">丝路漫漫</h3>
    </div>
    <div class="reveal-card" onclick="revealText(this)">
      <div class="reveal-front">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>交易的秘密</span>
      </div>
      <div class="reveal-back">
        <p>胡商做生意，要用好几种货币。</p>
        <div class="highlight-text" onclick="collectRelic('开元通宝', this)">
          <span class="pulse-dot"></span>
          <strong>开元通宝</strong>——大唐的铜钱，流通最广。
        </div>
        <div class="highlight-text" onclick="collectRelic('波斯银币', this)">
          <span class="pulse-dot"></span>
          <strong>波斯银币</strong>——来自遥远的萨珊王朝。
        </div>
        <p class="aside">月珑的钱匣里，装着整个丝绸之路。</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第8页：骆驼 -->
<div class="page" id="page-7">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">异域风情</h3>
    </div>
    
    <div class="scene-with-text">
      <div class="scene-side">
        <div class="scene-placeholder"><span>骆驼俑</span></div>
      </div>
      <div class="text-side">
        <p>月珑的铺子里，除了香料，还卖一些异域工艺品。</p>
        <p>最受长安贵族欢迎的是<strong>骆驼俑</strong>——丝路商队的象征。</p>
        <div class="clickable-text" onclick="collectRelic('骆驼俑', this)">
          <span class="pulse-dot"></span>
          <span>唐三彩的骆驼，载着乐伎和货物，是身份的象征。</span>
        </div>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第9页：结尾 -->
<div class="page" id="page-8">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">尾声</h3>
    </div>
    
    <div class="ending-text">
      <p>天宝年间，安史之乱爆发，长安陷入战火。</p>
      <p>月珑带着积蓄和货物，跟随商队向西返回波斯。</p>
      <div class="divider"></div>
      <p class="final">她走了一辈子的丝路，</p>
      <p class="final">终于踏上了回家的路，</p>
      <p class="final">却不知道还能不能再回来。</p>
    </div>
    
    <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
  </div>
</div>

<!-- 第10页：总结 -->
<div class="page" id="page-9">
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

<style>
/* 页面特定样式 */
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

.card-icon.spice {
  background: linear-gradient(135deg, #8a6a4a, #6d4d3d);
}

.card-icon.bean {
  background: linear-gradient(135deg, #3a2a1a, #2d1d0d);
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

/* 响应式调整 */
@media (max-width: 900px) {
  .intro-layout { flex-direction: column; }
  .intro-left { flex: none; width: 100%; }
  .scene-with-text { flex-direction: column; }
  .scene-side { flex: none; }
  .choice-cards { flex-direction: column; align-items: center; }
  .stats-row { flex-direction: column; gap: 15px; }
}
</style>

<script>
// 页面特定交互函数
function selectChoice(el, answer, isCorrect) {
  document.querySelectorAll('.choice-card').forEach(function(c) {
    c.classList.remove('correct', 'wrong');
  });
  
  if (isCorrect) {
    el.classList.add('correct');
    document.getElementById('choice-feedback').textContent = '正确！咖啡在唐代尚未传入中国。';
    document.getElementById('btn-page5').disabled = false;
  } else {
    el.classList.add('wrong');
    document.getElementById('choice-feedback').textContent = '不对，胡椒是常见进口香料。';
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
    result.textContent = '东市主要卖本地货物，西市才是胡商的天下。';
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
</script>
