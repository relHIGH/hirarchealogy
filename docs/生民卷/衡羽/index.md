---
layout: default
title: 衡路
---

<div class="story-wrapper" id="storyWrapper">
  
  <!-- 页面容器 -->
  <div class="pages-container" id="pagesContainer">
    
    <!-- 第1页 -->
    <div class="page" id="page-0">
      <div class="intro-layout">
        <div class="intro-left">
          <h1 class="char-name">衡路篇</h1>
          <p class="char-era">秦 · 咸阳驿舍管事</p>
          <div class="char-bio">
            <p>前241年生于咸阳，时年25岁。负责驿舍食宿、换马与接待官吏的驿站管事，见证了帝国驰道纵横、文书往来的繁华，也经历了秦末动乱中驿站系统的崩溃。</p>
          </div>
          <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
        </div>      
        <div class="intro-right">
          <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="衡路场景" class="scene-img"/>
        </div>
      </div>
    </div>
    
    <!-- 第2页 -->
    <div class="page" id="page-1" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">咸阳驿站</h3>
        </div>
        <div class="chapter-content">
          <p>衡路任职于<a href="#" class="node-tag" data-node="咸阳" data-theme="旅" onclick="collectNode('咸阳', '旅'); return false;">咸阳</a>城东的<a href="#" class="node-tag" data-node="驿舍" data-theme="旅" onclick="collectNode('驿舍', '旅'); return false;">驿舍</a>，这里是帝国<a href="#" class="node-tag" data-node="交通" data-theme="旅" onclick="collectNode('交通', '旅'); return false;">交通</a>网络的枢纽。每日迎来送往，见证着天下的风云变幻。</p>
          <p>她精通</p>
          <div class="story-choice" data-answer="律令" data-q="1">
            <div class="choice-prompt" onclick="showChoices(1)">
              <span class="choice-q">?</span>
              <span class="choice-hint">点击选择</span>
            </div>
            <div class="choice-options" id="choices-1">
              <button class="choice-btn" onclick="selectAnswer(1, '礼法', false)">礼法</button>
              <button class="choice-btn" onclick="selectAnswer(1, '律令', true)">律令</button>
              <button class="choice-btn" onclick="selectAnswer(1, '规章', false)">规章</button>
            </div>
            <div class="choice-result" id="result-1">
              <span class="result-word">律令</span>
            </div>
          </div>
          <p>，能准确计算<a href="#" class="node-tag" data-node="传食" data-theme="感" onclick="collectNode('传食', '感'); return false;">传食</a>配额，从不让过路的<a href="#" class="node-tag" data-node="官吏" data-theme="感" onclick="collectNode('官吏', '感'); return false;">官吏</a>久等。<a href="#" class="node-tag" data-node="驿路" data-theme="旅" onclick="collectNode('驿路', '旅'); return false;">驿路</a>上马蹄声声，<a href="#" class="node-tag" data-node="驿使" data-theme="旅" onclick="collectNode('驿使', '旅'); return false;">驿使</a>穿梭如飞。</p>
          <p>驿站里常年备有快马数十匹，每匹马都有专门的<a href="#" class="relic-tag" data-relic="马政册" onclick="collectRelic('马政册'); return false;"></a>记录。她记得每匹马的毛色、脚力和性情——哪匹适合长途奔袭，哪匹只能短途接力。这是她的饭碗，也是她的骄傲。</p>
          <p>最忙的时候，一日要接待十余批<a href="#" class="node-tag" data-node="车" data-theme="旅" onclick="collectNode('车', '旅'); return false;">车</a><a href="#" class="node-tag" data-node="行路" data-theme="旅" onclick="collectNode('行路', '旅'); return false;">马</a>。有人急着赴任，有人押送刑徒，还有人身负密诏，连姓名都不能透露。衡路从不多问，只管递上热饭、换上新马。</p>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第3页 -->
    <div class="page" id="page-2" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">文书往来</h3>
        </div>
        <div class="chapter-content">
          <p>秦统一后，<a href="#" class="node-tag" data-node="驰道" data-theme="旅" onclick="collectNode('驰道', '旅'); return false;">驰道</a>纵横天下，车马行路一日千里。衡路负责登记来往</p>        
          <div class="story-choice" data-answer="文书" data-q="2">
            <div class="choice-prompt" onclick="showChoices(2)">
              <span class="choice-q">?</span>
              <span class="choice-hint">点击选择</span>
            </div>
            <div class="choice-options" id="choices-2">
              <button class="choice-btn" onclick="selectAnswer(2, '账册', false)">账册</button>
              <button class="choice-btn" onclick="selectAnswer(2, '文书', true)">文书</button>
              <button class="choice-btn" onclick="selectAnswer(2, '名册', false)">名册</button>
            </div>
            <div class="choice-result" id="result-2">
              <span class="result-word">文书</span>
            </div>
          </div>        
          <p>，那些竹简上记录着帝国的<a href="#" class="node-tag" data-node="政令" data-theme="感" onclick="collectNode('政令', '感'); return false;">政令</a>与<a href="#" class="node-tag" data-node="军报" data-theme="感" onclick="collectNode('军报', '感'); return false;">军报</a>。</p>
          <p>她学会辨认各地的<a href="#" class="node-tag" data-node="封泥" data-theme="感" onclick="collectNode('封泥', '感'); return false;"></a><a href="#" class="relic-tag" data-relic="封泥" onclick="collectRelic('封泥'); return false;">封泥</a>印记，从中读出天下大势。每封文书都是一条<a href="#" class="node-tag" data-node="路" data-theme="旅" onclick="collectNode('路', '旅'); return false;">路</a>，连接着帝国的每个角落。</p>
          <p>最紧急的一次，是一名信使半夜拍门，马已经跑死了，要立刻换马继续赶路。那封文书上盖着皇帝玺印，封泥上还有三道红漆。衡路二话不说，把最好的马牵出来。信使上马前只说了一句："南郡急报。"</p>
          <p>后来她才听说，那是关于<a href="#" class="relic-tag" data-relic="里耶秦简" onclick="collectRelic('里耶秦简'); return false;">迁陵叛乱</a>的消息。衡路不知道迁陵在哪里，但她知道，那封文书到了咸阳，改变了无数人的命运。</p>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第4页 -->
    <div class="page" id="page-3" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">帝国余音</h3>
        </div>
        <div class="chapter-content">
          <p>秦末动乱，<a href="#" class="node-tag" data-node="驿站" data-theme="旅" onclick="collectNode('驿站', '旅'); return false;">驿站</a>系统逐渐崩溃。衡路收拾行囊，带着多年积累的</p>
          <div class="story-choice" data-answer="简牍" data-q="3">
            <div class="choice-prompt" onclick="showChoices(3)">
              <span class="choice-q">?</span>
              <span class="choice-hint">点击选择</span>
            </div>
            <div class="choice-options" id="choices-3">
              <button class="choice-btn" onclick="selectAnswer(3, '简牍', true)">简牍</button>
              <button class="choice-btn" onclick="selectAnswer(3, '典籍', false)">典籍</button>
              <button class="choice-btn" onclick="selectAnswer(3, '册页', false)">册页</button>
            </div>
            <div class="choice-result" id="result-3">
              <span class="result-word">简牍</span>
            </div>
          </div>
          <p>，踏上了寻找安宁的<a href="#" class="node-tag" data-node="旅途" data-theme="旅" onclick="collectNode('旅途', '旅'); return false;">旅途</a>。</p>
          <p>她曾管理的驿舍变成废墟，但那些路还在，只是行路的人换了一批又一批。</p>
          <p>乱世之中，她见过楚军过<a href="#" class="relic-tag" data-relic="武关" onclick="collectRelic('武关'); return false;">武关</a>，也见过汉王入咸阳。每一个经过的人，都要问："路还通吗？"她总是点头："通，一直通到东边的大海。"</p>
          <p>晚年她定居在<a href="#" class="relic-tag" data-relic="汉长安城遗址" onclick="collectRelic('汉长安城遗址'); return false;">渭水北岸</a>，看着新的长安城拔地而起。那些她当年熟悉的驿路，成了帝国新的血脉。偶尔有老驿卒路过，会说起咸阳旧事，她只是笑笑，给他们指一条近路。</p>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第5页 -->
    <div class="page" id="page-4" style="display:none">
      <div class="summary-layout">
        <h2 class="summary-title">探索完成</h2>      
        <div class="answers-section">
          <h4>你的选择</h4>
          <div class="answers-list">          
            <div class="answer-item">
              <span class="answer-stage">咸阳驿站</span>
              <span class="answer-value" id="ans-1">—</span>
            </div>          
            <div class="answer-item">
              <span class="answer-stage">文书往来</span>
              <span class="answer-value" id="ans-2">—</span>
            </div>          
            <div class="answer-item">
              <span class="answer-stage">帝国余音</span>
              <span class="answer-value" id="ans-3">—</span>
            </div>        
          </div>
        </div>      
        <div class="summary-sections">        
          <div class="summary-box" id="nodes-box">
            <h4>主题节点</h4>
            <div class="nodes-list" id="nodes-list">
              <span class="node-item" data-node="咸阳" data-theme="旅">咸阳</span>
              <span class="node-item" data-node="驿舍" data-theme="旅">驿舍</span>
              <span class="node-item" data-node="交通" data-theme="旅">交通</span>
              <span class="node-item" data-node="传食" data-theme="感">传食</span>
              <span class="node-item" data-node="官吏" data-theme="感">官吏</span>
              <span class="node-item" data-node="驿路" data-theme="旅">驿路</span>
              <span class="node-item" data-node="驿使" data-theme="旅">驿使</span>
              <span class="node-item" data-node="车" data-theme="旅">车</span>
              <span class="node-item" data-node="行路" data-theme="旅">行路</span>
              <span class="node-item" data-node="驰道" data-theme="旅">驰道</span>
              <span class="node-item" data-node="政令" data-theme="感">政令</span>
              <span class="node-item" data-node="军报" data-theme="感">军报</span>
              <span class="node-item" data-node="封泥" data-theme="感">封泥</span>
              <span class="node-item" data-node="路" data-theme="旅">路</span>
              <span class="node-item" data-node="驿站" data-theme="旅">驿站</span>
              <span class="node-item" data-node="旅途" data-theme="旅">旅途</span>
            </div>
          </div>        
          <div class="summary-box" id="relics-box">
            <h4>历史文物</h4>
            <div class="relics-list" id="relics-list">
              <span class="relic-item" data-relic="马政册">马政册</span>
              <span class="relic-item" data-relic="封泥">封泥</span>
              <span class="relic-item" data-relic="里耶秦简">里耶秦简</span>
              <span class="relic-item" data-relic="武关">武关</span>
              <span class="relic-item" data-relic="汉长安城遗址">汉长安城遗址</span>
            </div>
          </div>      
        </div>      
        <div class="summary-actions">
          <button class="share-btn" onclick="alert('分享链接功能开发中')">复制分享链接</button>
          <button class="restart-btn" onclick="showPage(0)">重新探索</button>
        </div>    
      </div>
    </div>
    
  </div>
  
  <!-- 页面指示器 -->
  <div class="page-dots">
    <span class="dot active" onclick="showPage(0)"></span>
    <span class="dot" onclick="showPage(1)"></span>
    <span class="dot" onclick="showPage(2)"></span>
    <span class="dot" onclick="showPage(3)"></span>
    <span class="dot" onclick="showPage(4)"></span>
  </div>
</div>

<style>
/* 覆盖默认布局：去掉白色卡片背景 */
.container { background: transparent !important; box-shadow: none !important; padding: 0 !important; max-width: 100% !important; margin: 0 !important; }

/* 顶栏改为浅米色，与内容区不同 */
header { background: #fdfcfa !important; }

/* 暖沙色背景 */
.story-wrapper {
  position: relative;
  width: 100%;
  min-height: auto;
  background: #faf6ee;
  margin-top: 40px;
  padding: 60px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

/* 介绍页 - 名字左对齐 */
.intro-layout {
  display: flex;
  min-height: auto;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
}

.intro-left {
  flex: 0 0 40%;
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

/* 名字+篇，严格左对齐，覆盖全局居中 */
#markdown-body .char-name,
.char-name {
  font-family: "Songti SC", serif;
  font-size: 2.2rem;
  color: var(--accent);
  margin: 0 0 6px 0;
  letter-spacing: 2px;
  text-align: left;
  align-self: flex-start;
}

.char-era {
  font-size: 1rem;
  color: #888;
  margin: 0 0 16px 0;
  letter-spacing: 2px;
  text-align: left;
  padding-left: 0;
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
  margin-top: 60px;
  padding: 8px 20px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Songti SC", serif;
  letter-spacing: 2px;
}

.nav-btn:hover {
  transform: translateX(3px);
  box-shadow: 0 8px 20px rgba(128,0,32,0.25);
}

.scene-img {
  max-width: 45%;
  max-height: 22vh;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  opacity: 0.75;
  filter: sepia(20%) saturate(80%) hue-rotate(-10deg);
}

/* 章节页 */
.chapter-layout {
  max-width: 700px;
  margin: 0 auto;
}

.chapter-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 20px;
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

.chapter-content {
  line-height: 1.8;
  color: #444;
  font-size: 0.95rem;
}

.chapter-content p {
  margin-bottom: 1.2em;
  text-indent: 2em;
  display: block;
}

/* 选择题 */
.story-choice {
  display: inline-block;
  margin: 0 5px;
  vertical-align: middle;
}

.choice-prompt {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 5px 10px;
  background: #f0ede8;
  border-radius: 15px;
  border: 1.5px dashed var(--accent);
}

.choice-q {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
}

.choice-hint {
  font-size: 0.75rem;
  color: #666;
}

.choice-options {
  display: none;
  gap: 8px;
  margin: 10px 0;
}

.choice-options.show {
  display: flex;
}

.choice-btn {
  padding: 6px 16px;
  background: #fdfcfa;
  border: 1.5px solid rgba(128,0,32,0.2);
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: "Songti SC", serif;
}

.choice-btn:hover {
  background: #f5f3f0;
  border-color: var(--accent);
}

.choice-btn.correct {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.choice-btn.wrong {
  background: #ddd;
  color: #888;
}

.choice-result {
  display: none;
  align-items: center;
  padding: 6px 14px;
  background: #f0ede8;
  border-radius: 15px;
  margin: 6px 0;
}

.choice-result.show {
  display: inline-flex;
}

.result-word {
  font-weight: bold;
  color: var(--accent);
  font-size: 0.95rem;
  font-family: "Songti SC", serif;
}

/* 节点标签样式 */
.node-tag, .relic-tag {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px dashed var(--accent);
  cursor: pointer;
  transition: all 0.3s;
}
.node-tag:hover, .relic-tag:hover {
  background: rgba(128,0,32,0.1);
  border-bottom-style: solid;
}
.node-tag.collected, .relic-tag.collected {
  background: rgba(128,0,32,0.15);
  border-bottom-style: solid;
  font-weight: bold;
}

/* 总结页节点列表 */
.nodes-list, .relics-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}
.node-item, .relic-item {
  padding: 6px 12px;
  background: #f0ede8;
  border-radius: 15px;
  font-size: 0.85rem;
  color: #888;
  border: 1px dashed #ccc;
  transition: all 0.3s;
}
.node-item.lit, .relic-item.lit {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
  border-style: solid;
}
.node-item[data-theme="旅"].lit {
  background: #8B4513;
}
.node-item[data-theme="感"].lit {
  background: #800020;
}
.page-dots {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 200;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(128,0,32,0.15);
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: var(--accent);
  transform: scale(1.2);
}

/* 总结页 */
.summary-layout {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding-left: 0;
}

/* 第5页（总结页）去掉左侧padding */
#page-4 {
  padding-left: 0;
}

.summary-title {
  font-family: "Songti SC", serif;
  font-size: 1.8rem;
  color: var(--accent);
  margin-bottom: 25px;
  letter-spacing: 5px;
}

.answers-section {
  background: #f5f3f0;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.answers-section h4 {
  color: var(--accent);
  margin-bottom: 12px;
  font-family: "Songti SC", serif;
  font-size: 0.95rem;
}

.answers-list {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.answer-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.answer-stage {
  font-size: 0.75rem;
  color: #888;
}

.answer-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--accent);
  font-family: "Songti SC", serif;
}

.summary-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 25px;
}

.summary-box {
  padding: 16px;
  border-radius: 10px;
  background: #fdfcfa;
  border: 1px solid rgba(128,0,32,0.08);
}

.summary-box.placeholder {
  background: #f8f6f3;
}

.summary-box h4 {
  color: var(--accent);
  margin-bottom: 8px;
  font-family: "Songti SC", serif;
  font-size: 0.9rem;
}

.placeholder-text {
  color: #999;
  font-size: 0.8rem;
}

.summary-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.share-btn, .restart-btn {
  padding: 10px 24px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Songti SC", serif;
}

.share-btn {
  background: var(--accent);
  color: white;
  border: none;
}

.restart-btn {
  background: transparent;
  color: var(--accent);
  border: 1.5px solid var(--accent);
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
  20% { opacity: 1; transform: translateX(-50%) translateY(0); }
  80% { opacity: 1; transform: translateX(-50%) translateY(0); }
  100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
}

@media (max-width: 900px) {
  .pages-container { padding: 30px 60px; }
  .click-zone { width: 40px; }
  .intro-layout { flex-direction: column; gap: 20px; min-height: auto; }
  .char-name { font-size: 2.2rem; }
  .scene-img { max-height: 30vh; }
  .page { padding: 25px; }
  .summary-sections { grid-template-columns: 1fr; }
}
</style>

<script>
var currentPage = 0;
var totalPages = 5;

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
    if (i === pageNum) dots[i].classList.add('active');
    else dots[i].classList.remove('active');
  }
  window.scrollTo(0, 0);
}

function nextPage() {
  if (currentPage < totalPages - 1) showPage(currentPage + 1);
}

function prevPage() {
  if (currentPage > 0) showPage(currentPage - 1);
}

function showChoices(qNum) {
  var choices = document.getElementById('choices-' + qNum);
  var prompt = document.querySelector('#page-' + currentPage + ' .story-choice[data-q="' + qNum + '"] .choice-prompt');
  if (choices) choices.classList.add('show');
  if (prompt) prompt.style.display = 'none';
}

function selectAnswer(qNum, answer, isCorrect) {
  var choices = document.getElementById('choices-' + qNum);
  var result = document.getElementById('result-' + qNum);
  var ansSpan = document.getElementById('ans-' + qNum);
  var correctAnswers = { 1: '律令', 2: '文书', 3: '简牍' };
  var correct = correctAnswers[qNum];
  
  var btns = document.querySelectorAll('#choices-' + qNum + ' .choice-btn');
  for (var i = 0; i < btns.length; i++) {
    var btnText = btns[i].textContent;
    if (btnText === correct) btns[i].classList.add('correct');
    else if (btns[i] === event.target && btnText !== correct) btns[i].classList.add('wrong');
  }
  
  setTimeout(function() {
    if (choices) choices.classList.remove('show');
    if (result) result.classList.add('show');
    if (ansSpan) {
      ansSpan.textContent = correct;
      ansSpan.classList.add('answered');
    }
  }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
  showPage(0);
  initCollection();
});

// 收藏系统
var charName = '衡路';
var storageKey = 'hr_shengmin_' + charName;

function initCollection() {
  var collections = getCollections();
  // 高亮已收集的节点
  document.querySelectorAll('.node-tag, .relic-tag').forEach(function(tag) {
    var node = tag.dataset.node;
    var relic = tag.dataset.relic;
    var key = node || relic;
    if (collections[key]) {
      tag.classList.add('collected');
    }
  });
  // 更新总结页
  updateSummary();
}

function getCollections() {
  var data = localStorage.getItem(storageKey);
  return data ? JSON.parse(data) : {};
}

function saveCollections(collections) {
  localStorage.setItem(storageKey, JSON.stringify(collections));
}

function collectNode(nodeName, theme) {
  var collections = getCollections();
  if (!collections[nodeName]) {
    collections[nodeName] = { type: 'node', theme: theme };
    saveCollections(collections);
    // 视觉反馈
    event.target.classList.add('collected');
    showToast('已点亮节点：' + nodeName);
    updateSummary();
  }
}

function collectRelic(relicName) {
  var collections = getCollections();
  if (!collections[relicName]) {
    collections[relicName] = { type: 'relic' };
    saveCollections(collections);
    event.target.classList.add('collected');
    showToast('已收集文物：' + relicName);
    updateSummary();
  }
}

function updateSummary() {
  var collections = getCollections();
  // 更新节点显示
  document.querySelectorAll('.node-item').forEach(function(item) {
    var node = item.dataset.node;
    if (collections[node]) {
      item.classList.add('lit');
    }
  });
  // 更新文物显示
  document.querySelectorAll('.relic-item').forEach(function(item) {
    var relic = item.dataset.relic;
    if (collections[relic]) {
      item.classList.add('lit');
    }
  });
}

function showToast(message) {
  var toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:rgba(128,0,32,0.9);color:white;padding:10px 20px;border-radius:20px;font-size:0.85rem;z-index:1000;animation:fadeInOut 2s forwards;';
  document.body.appendChild(toast);
  setTimeout(function() { toast.remove(); }, 2000);
}
</script>
