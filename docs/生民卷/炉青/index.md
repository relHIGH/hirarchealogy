---
layout: default
title: 冶辛
---

<div class="story-wrapper" id="storyWrapper">
  
  <!-- 页面容器 -->
  <div class="pages-container" id="pagesContainer">
    
    <!-- 第1页 -->
    <div class="page" id="page-0">
      <div class="intro-layout">
        <div class="intro-left">
          <h1 class="char-name">冶辛篇</h1>
          <p class="char-era">战国 · 冶铁作坊学徒</p>
          <div class="char-bio">
            <p>前271年生于上党郡，一个被山包围、被炉火照亮的冶铁作坊里。从往炉子里添炭的学徒，到能辨认矿石、控制火候的匠人——她的青春期是在铁渣堆和陶范碎片中度过的。没见过外面的世界，但她的手知道铁的温度。</p>
          </div>
          <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
        </div>      
        <div class="intro-right">
          <img src="{{ site.baseurl }}/assets/images/scenes/炉青.png" alt="冶辛场景" class="scene-img"/>
        </div>
      </div>
    </div>
    
    <!-- 第2页 -->
    <div class="page" id="page-1" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">01</span>
          <h3 class="chapter-title">矿山与炉火</h3>
        </div>
        <div class="chapter-content">
          <p>上党这地方，山多得像谁随手撒了一把石头。冶辛家就蹲在其中一座山的半山腰，旁边是个冶铁作坊——说白了就是几间破草房围着一座土炉子，常年冒着黑烟，远看像山神在抽烟。</p>
          <p>她从小就在这烟火气里长大。六岁时，爹让她往炉子里添炭，她差点把头发烧了；八岁时，她能分辨出哪种石头敲开是铁的，哪种是废石——"铁的沉，废石轻，敲起来声音不一样，"爹说，"像挑瓜，熟的和生的拍两下就知道。"</p>
          <p>作坊不大，但人来来往往。有挖矿的、运炭的、还有各地来的商人。最忙的时候，炉火三天三夜不灭，风箱呼哧呼哧像头老牛。冶辛最烦上夜班——不是怕累，是怕犯困时把铁水倒错地方。她见过一个学徒手抖，把铁水泼在地上，结果那块石头从此多了个黑印子。</p>
          <p>铁水从炉口流出来时，红得发亮，像岩浆。爹总是稳稳地接住，倒进</p>
          <div class="story-choice" data-answer="坩埚" data-q="1">
            <div class="choice-prompt" onclick="showChoices(1)">
              <span class="choice-q">?</span>
              <span class="choice-hint">点击选择</span>
            </div>
            <div class="choice-options" id="choices-1">
              <button class="choice-btn" onclick="selectAnswer(1, '陶罐', false)">陶罐</button>
              <button class="choice-btn" onclick="selectAnswer(1, '坩埚', true)">坩埚</button>
              <button class="choice-btn" onclick="selectAnswer(1, '铁锅', false)">铁锅</button>
            </div>
            <div class="choice-result" id="result-1">
              <span class="result-word">坩埚</span>
            </div>
          </div>
          <p>——一种用耐火土烧制的厚壁陶罐，烧坏了不知道多少个。铁水在里面冷静片刻，再倒出来锤打，就能成型。她知道这东西的名字，却不知道怎么写——那个年代，谁会写这玩意儿？</p>
          <p>作坊院子里永远堆着两堆东西：黑色的铁渣，和碎裂的陶片。前者是矿石的骸骨，后者是容器的尸体。下雨的时候，铁渣堆会渗出黄绿色的锈水，像山在流泪。后来她才知道，那种水叫"矾水"，能染布、能入药，但那时候她只觉得它脏，还臭。</p>
          <p>很多年后，考古的人挖开了这片山。他们指着那些堆叠的炉渣、扭曲的陶范、还有氧化成红褐色的铁块，兴奋地说："看，这是战国时期的冶铁遗址！生铁冶铸技术！"冶辛听不懂这些词。但如果她能看到，大概会指着那些铁渣说："哦，那是我们倒掉的。"</p>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第3页 -->
    <div class="page" id="page-2" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">02</span>
          <h3 class="chapter-title">铁器与农田</h3>
        </div>
        <div class="chapter-content">
          <p>冶辛十五岁那年，发现来作坊的农人越来越多，而且话都变少了——不是不想聊，是手里攥着钱，急着换东西。</p>
          <p>那时她才知道，上党郡外头正在打仗。秦国人往东打，赵国人往西顶，两边死磕。农人急着翻地、急着收成、急着在征兵令下来之前多攒点粮食。铁器成了抢手货，比铜钱还硬。</p>
          <p>她亲眼见过一个老农，牵着牛走了一天山路，就为换一把新犁。老农说："地太硬，木犁扛不住，铁犁能翻半尺深。"冶辛不懂翻半尺深是什么概念，但她知道，那把铁犁在炉子里锤了整整三个时辰。</p>
          <p>作坊里渐渐多了她没见过的东西：铁镰、铁锤，还有那种三角形、前端弯弯的</p>        
          <div class="story-choice" data-answer="铁犁" data-q="2">
            <div class="choice-prompt" onclick="showChoices(2)">
              <span class="choice-q">?</span>
              <span class="choice-hint">点击选择</span>
            </div>
            <div class="choice-options" id="choices-2">
              <button class="choice-btn" onclick="selectAnswer(2, '铁剑', false)">铁剑</button>
              <button class="choice-btn" onclick="selectAnswer(2, '铁犁', true)">铁犁</button>
              <button class="choice-btn" onclick="selectAnswer(2, '铁斧', false)">铁斧</button>
            </div>
            <div class="choice-result" id="result-2">
              <span class="result-word">铁犁</span>
            </div>
          </div>        
          
          <p>。</p>
          <p>这些铁家伙比木头的贵三倍，但农人还是抢着要。冶辛问过爹为什么，爹说："一亩地用木犁，两个人一天翻一亩；用铁犁，一个人一天翻两亩。你算算。"
          </p>
          <p>她算了算，没算明白，但她看到农人脸上的表情——那种攥着新铁器、像攥着希望的表情。她知道这些铁块不只是铁块，是让地多产粮、让人少挨饿的东西。虽然那时候她还不知道，两千年后的人会管这叫"农业革命"。</p>
        </div>
        <button class="nav-btn" onclick="nextPage()">下一页 →</button>
      </div>
    </div>
    
    <!-- 第4页 -->
    <div class="page" id="page-3" style="display:none">
      <div class="chapter-layout">
        <div class="chapter-header">
          <span class="chapter-num">03</span>
          <h3 class="chapter-title">战争的影子</h3>
        </div>
        <div class="chapter-content">
          <p>战争这东西，像季风，说来就来。冶辛十八岁那年，作坊来了个穿皮甲的军官，身后跟着几个士兵，开口就要"百套兵器，月底交货"。</p>
          <p>爹没敢接。不是不想赚钱，是知道这意味着什么——农具得让路，炉火得改配方。铁的成色不一样：做犁要韧，做剑要硬。她跟着爹学了好一阵子，怎么掺碳、怎么淬火，才能把铁变成钢。</p>
          <p>最忙的时候，作坊像个军营。士兵来取货时，把成捆的矛、成袋的箭头往肩上一扛，也不说话，转身就走。冶辛数过，一个箭袋能装五十支，一个士兵背四袋。她不知道这些箭最后射向了谁，但她知道每一支都经过她的手。</p>
          <p>后来她才听说，那年长平之战，赵国输了四十万人。她坐在炉子边，想着那些铁器去了哪里，是不是埋在哪个战场上，和骨头一起锈成了土。</p>
          <p>很多年后，考古的人挖开了上党这片山。他们发现了冶铁炉的遗址、成堆的铁渣，还有那些碎裂的陶范——上面还留着金属凝固时的一线痕迹。他们管这叫"生铁冶铸技术"，说是战国时期的重大发明。冶辛听不懂这些词，但如果她能看见，大概会撇撇嘴说："哦，就是那个啊。"</p>
          <p>哦对了，她说的是那种三棱的、能射穿皮甲的</p>
          <div class="story-choice" data-answer="箭镞" data-q="3">
            <div class="choice-prompt" onclick="showChoices(3)">
              <span class="choice-q">?</span>
              <span class="choice-hint">点击选择</span>
            </div>
            <div class="choice-options" id="choices-3">
              <button class="choice-btn" onclick="selectAnswer(3, '箭镞', true)">箭镞</button>
              <button class="choice-btn" onclick="selectAnswer(3, '矛头', false)">矛头</button>
              <button class="choice-btn" onclick="selectAnswer(3, '刀鞘', false)">刀鞘</button>
            </div>
            <div class="choice-result" id="result-3">
              <span class="result-word">箭镞</span>
            </div>
          </div>
          <p>——一种她闭着眼睛都能认出来的小东西。两千多年后，有人在一个叫秦始皇陵的地方挖出了成捆成捆的这种东西，铜的、铁的，整整齐齐码在地下。专家说那是为了"保卫来世"。冶辛要是知道了，大概会翻个白眼："活着都守不住，死了能顶什么用？"</p>
          <p>但她确实做了一辈子的铁。农具、兵器、锅碗瓢盆——炉火不息，铁水照面。她知道每块铁的来处，却永远猜不到它们的归途。有的进了田，有的上了战场，有的埋进了土里，等着后人来猜。</p>
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
              <span class="answer-stage">矿山与炉火</span>
              <span class="answer-value" id="ans-1">—</span>
            </div>          
            <div class="answer-item">
              <span class="answer-stage">铁器与农田</span>
              <span class="answer-value" id="ans-2">—</span>
            </div>          
            <div class="answer-item">
              <span class="answer-stage">战争的影子</span>
              <span class="answer-value" id="ans-3">—</span>
            </div>        
          </div>
        </div>      
        <div class="summary-sections">        
          <div class="summary-box placeholder">
            <h4>主题节点</h4>
            <p class="placeholder-text">探索收集的主题节点将在此展示</p>
          </div>        
          <div class="summary-box placeholder">
            <h4>历史文物</h4>
            <p class="placeholder-text">故事中提及的文物将在此展示</p>
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
  margin-bottom: 10px;
  display: inline;
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

/* 页面指示点 */
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
  var correctAnswers = { 1: '坩埚', 2: '铁犁', 3: '箭镞' };
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
});
</script>