---
layout: default
title: 冶辛
---

<div class="story-wrapper">
  <!-- 页面容器 -->
  <div class="pages-container" id="pagesContainer">
    
    <!-- 第1页 -->
    <div class="page" id="page-0">
      <div class="intro-layout">
        <div class="intro-left">
          <h1 class="char-name">冶辛</h1>
          <p class="char-era">战国 · 冶铁作坊学徒</p>
          <div class="char-bio">
            <p>前271年生于上党郡，时年13岁。在炭火与铁锤声中学习冶铁的作坊学徒，从搬运矿石到辨识矿质，在炉火与铁器间见证铁器如何改变农田与生活。</p>
          </div>
          <button class="nav-btn" onclick="showPage(1)">开始探索 →</button>
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
          <p>她出生在山地矿区。村子旁边就是一处冶铁作坊。每天清晨，矿石从山坡被运下来，堆在院子的角落。她小时候的任务只是把矿石搬到炉旁，再把木炭添进炉口。</p>        
          <p>炉火一旦点燃，就会持续整夜。风箱推动空气进入炉中，铁水慢慢在高温里融化。父亲把铁水从炉口引出，倒进</p>        
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
          
          <p>里，再用铁锤反复敲打。</p>        
          <p>院子里堆满黑色的铁渣和碎裂的陶片。很多年后，人们只看到冶铁炉遗址、鼓风管和成堆铁渣，却仍能知道这里曾经有一座忙碌的铁作坊。</p>
        </div>
        <button class="nav-btn" onclick="showPage(2)">下一页 →</button>
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
          <p>随着年龄增长，她学会辨认矿石。敲开矿石，看到暗色金属光泽，她就知道这一炉可能成功。</p>        
          <p>村子里的农人越来越多地来到作坊。他们拿旧器具来换新的农具。作坊木架上挂着铁镰、铁锤，还有一排刚锻造出来的</p>        
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
          <p>农田里的变化很明显。土地被翻得更深，麦子长得更密。她第一次意识到，这些器物正在改变整个村庄的生活。</p>
        </div>
        <button class="nav-btn" onclick="showPage(3)">下一页 →</button>
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
          <p>几年之后，作坊开始接到更多兵器订单。士兵来取货时，会把一捆捆兵器背在肩上离开。</p>        
          <p>木架另一侧摆满锋利的武器。最常见的是铁矛和成束的</p>        
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
          
          <p>。</p>        
          <p>她逐渐明白，炉火里的铁不仅进入农田，也进入战场。后来出土的兵器、铁渣和冶铁炉遗迹，让人们知道这里曾经是战国时期重要的铁器生产地点。</p>
        </div>
        <button class="nav-btn" onclick="showPage(4)">下一页 →</button>
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
.story-wrapper {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 60px);
}

.pages-container {
  width: 100%;
  padding: 40px 60px;
  box-sizing: border-box;
}

.page {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* 介绍页 */
.intro-layout {
  display: flex;
  height: calc(100vh - 140px);
  align-items: center;
  gap: 40px;
}

.intro-left {
  flex: 0 0 45%;
}

.intro-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.char-name {
  font-family: "Songti SC", serif;
  font-size: 3.5rem;
  color: var(--accent);
  margin: 0 0 10px 0;
  letter-spacing: 8px;
}

.char-era {
  font-size: 1rem;
  color: #888;
  margin: 0 0 25px 0;
  letter-spacing: 2px;
}

.char-bio {
  background: rgba(128,0,32,0.03);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid var(--accent);
}

.char-bio p {
  line-height: 1.7;
  color: #555;
  margin: 0;
  font-size: 0.95rem;
}

.nav-btn {
  margin-top: 30px;
  padding: 12px 30px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Songti SC", serif;
  letter-spacing: 2px;
}

.nav-btn:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 30px rgba(128,0,32,0.3);
}

.scene-img {
  max-width: 100%;
  max-height: 60vh;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

/* 章节页 */
.chapter-layout {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 20px;
}

.chapter-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 25px;
}

.chapter-num {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: bold;
}

.chapter-title {
  font-family: "Songti SC", serif;
  font-size: 1.6rem;
  color: var(--accent);
  margin: 0;
  letter-spacing: 3px;
}

.chapter-content {
  line-height: 1.9;
  color: #444;
  font-size: 1rem;
}

.chapter-content p {
  margin-bottom: 12px;
  display: inline;
}

/* 选择题 */
.story-choice {
  display: inline-block;
  margin: 0 6px;
  vertical-align: middle;
}

.choice-prompt {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 6px 12px;
  background: rgba(128,0,32,0.08);
  border-radius: 20px;
  border: 2px dashed var(--accent);
}

.choice-q {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
}

.choice-hint {
  font-size: 0.8rem;
  color: #666;
}

.choice-options {
  display: none;
  gap: 10px;
  margin: 12px 0;
}

.choice-options.show {
  display: flex;
}

.choice-btn {
  padding: 8px 20px;
  background: white;
  border: 2px solid rgba(128,0,32,0.2);
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.95rem;
  font-family: "Songti SC", serif;
}

.choice-btn:hover {
  background: rgba(128,0,32,0.05);
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
  padding: 8px 16px;
  background: rgba(128,0,32,0.08);
  border-radius: 20px;
  margin: 8px 0;
}

.choice-result.show {
  display: inline-flex;
}

.result-word {
  font-weight: bold;
  color: var(--accent);
  font-size: 1rem;
  font-family: "Songti SC", serif;
}

/* 页面指示点 */
.page-dots {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1000;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(128,0,32,0.2);
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background: var(--accent);
  transform: scale(1.2);
}

/* 总结页 */
.summary-layout {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
}

.summary-title {
  font-family: "Songti SC", serif;
  font-size: 2rem;
  color: var(--accent);
  margin-bottom: 30px;
  letter-spacing: 6px;
}

.answers-section {
  background: rgba(128,0,32,0.03);
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 25px;
}

.answers-section h4 {
  color: var(--accent);
  margin-bottom: 15px;
  font-family: "Songti SC", serif;
}

.answers-list {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.answer-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.answer-stage {
  font-size: 0.8rem;
  color: #888;
}

.answer-value {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--accent);
  font-family: "Songti SC", serif;
}

.summary-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
}

.summary-box {
  padding: 20px;
  border-radius: 12px;
  background: white;
  border: 1px solid rgba(128,0,32,0.1);
}

.summary-box.placeholder {
  background: rgba(128,0,32,0.02);
}

.summary-box h4 {
  color: var(--accent);
  margin-bottom: 10px;
  font-family: "Songti SC", serif;
  font-size: 0.95rem;
}

.placeholder-text {
  color: #aaa;
  font-size: 0.85rem;
}

.summary-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.share-btn, .restart-btn {
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 0.9rem;
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
  border: 2px solid var(--accent);
}

@media (max-width: 900px) {
  .pages-container { padding: 30px; }
  .intro-layout { flex-direction: column; gap: 20px; height: auto; }
  .char-name { font-size: 2.5rem; }
  .scene-img { max-height: 35vh; }
  .summary-sections { grid-template-columns: 1fr; }
}
</style>

<script>
// 当前页码
var currentPage = 0;
var totalPages = 5;

// 显示指定页面
function showPage(pageNum) {
  // 隐藏所有页面
  for (var i = 0; i < totalPages; i++) {
    var page = document.getElementById('page-' + i);
    if (page) {
      page.style.display = 'none';
    }
  }
  
  // 显示目标页面
  var targetPage = document.getElementById('page-' + pageNum);
  if (targetPage) {
    targetPage.style.display = 'block';
  }
  
  // 更新当前页码
  currentPage = pageNum;
  
  // 更新圆点状态
  var dots = document.querySelectorAll('.dot');
  for (var i = 0; i < dots.length; i++) {
    if (i === pageNum) {
      dots[i].classList.add('active');
    } else {
      dots[i].classList.remove('active');
    }
  }
  
  // 滚动到顶部
  window.scrollTo(0, 0);
}

// 显示选择题选项
function showChoices(qNum) {
  var choicesDiv = document.getElementById('choices-' + qNum);
  var promptDiv = document.querySelector('#page-' + currentPage + ' .story-choice[data-q="' + qNum + '"] .choice-prompt');
  
  if (choicesDiv) {
    choicesDiv.classList.add('show');
  }
  if (promptDiv) {
    promptDiv.style.display = 'none';
  }
}

// 选择答案
function selectAnswer(qNum, answer, isCorrect) {
  var choicesDiv = document.getElementById('choices-' + qNum);
  var resultDiv = document.getElementById('result-' + qNum);
  var ansSpan = document.getElementById('ans-' + qNum);
  
  // 标记按钮
  var buttons = document.querySelectorAll('#choices-' + qNum + ' .choice-btn');
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    var btnAnswer = btn.getAttribute('onclick').match(/'([^']+)'/)[1];
    if (btnAnswer === getCorrectAnswer(qNum)) {
      btn.classList.add('correct');
    } else if (btn === event.target && !isCorrect) {
      btn.classList.add('wrong');
    }
  }
  
  // 显示结果
  setTimeout(function() {
    if (choicesDiv) choicesDiv.classList.remove('show');
    if (resultDiv) resultDiv.classList.add('show');
    if (ansSpan) {
      ansSpan.textContent = getCorrectAnswer(qNum);
      ansSpan.classList.add('answered');
    }
  }, 500);
}

// 获取正确答案
function getCorrectAnswer(qNum) {
  var answers = { 1: '坩埚', 2: '铁犁', 3: '箭镞' };
  return answers[qNum];
}

// 键盘导航
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    if (currentPage < totalPages - 1) showPage(currentPage + 1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    if (currentPage > 0) showPage(currentPage - 1);
  }
});

// 初始化第一页
document.addEventListener('DOMContentLoaded', function() {
  showPage(0);
});
</script>