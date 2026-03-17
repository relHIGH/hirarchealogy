---
layout: default
title: 冶辛
---

<div class="story-slider" id="storySlider">

  <!-- 页面指示器 -->
  <div class="page-dots">
    <span class="dot active" data-page="0"></span>
    <span class="dot" data-page="1"></span>
    <span class="dot" data-page="2"></span>
    <span class="dot" data-page="3"></span>
    <span class="dot" data-page="4"></span>
  </div>

  <!-- 第1页：信息页 -->
  <div class="slide-page active" data-page="0">
    <div class="info-layout">
      <div class="info-left">
        <h1 class="char-name">冶辛</h1>
        <p class="char-era">战国 · 冶铁作坊学徒</p>
        <div class="char-bio-wide">
          <p>前271年生于上党郡，时年13岁。在炭火与铁锤声中学习冶铁的作坊学徒，从搬运矿石到辨识矿质，在炉火与铁器间见证铁器如何改变农田与生活。</p>
        </div>
        <button class="start-btn" onclick="goToPage(1)">开始探索 <span class="arrow">→</span></button>
      </div>      
      <div class="info-right">
        <img src="{{ site.baseurl }}/assets/images/scenes/炉青.png" alt="炉青场景" class="scene-img"/>
      </div>
    </div>
  </div>
  
  <!-- 第2页：第一章 -->
  <div class="slide-page" data-page="1">
    <div class="chapter-layout">
      <div class="chapter-indicator">
        <span class="stage-dot"></span>
        <span class="stage-dot"></span>
        <span class="stage-dot"></span>
        <span class="stage-line"></span>
      </div>      
      <div class="chapter-content-full">
        <h3 class="chapter-title">矿山与炉火</h3>        
        <p>她出生在山地矿区。村子旁边就是一处冶铁作坊。每天清晨，矿石从山坡被运下来，堆在院子的角落。她小时候的任务只是把矿石搬到炉旁，再把木炭添进炉口。</p>        
        <p>炉火一旦点燃，就会持续整夜。风箱推动空气进入炉中，铁水慢慢在高温里融化。父亲把铁水从炉口引出，倒进</p>        
        <div class="story-choice" data-answer="坩埚" data-q="1">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="陶罐">陶罐</button>
            <button class="choice-btn" data-value="坩埚">坩埚</button>
            <button class="choice-btn" data-value="铁锅">铁锅</button>
          </div>
          <div class="choice-result">
            <span class="result-word">坩埚</span>
          </div>
        </div>        
        <p>里，再用铁锤反复敲打。</p>        
        <p>院子里堆满黑色的铁渣和碎裂的陶片。很多年后，人们只看到冶铁炉遗址、鼓风管和成堆铁渣，却仍能知道这里曾经有一座忙碌的铁作坊。</p>
        <div class="nav-hint">完成选择后继续 <span class="arrow">↓</span></div>
      </div>
    </div>
  </div>
  
  <!-- 第3页：第二章 -->
  <div class="slide-page" data-page="2">
    <div class="chapter-layout">
      <div class="chapter-indicator">
        <span class="stage-dot active"></span>
        <span class="stage-dot"></span>
        <span class="stage-dot"></span>
        <span class="stage-line" style="top: 33%"></span>
      </div>      
      <div class="chapter-content-full">
        <h3 class="chapter-title">铁器与农田</h3>        
        <p>随着年龄增长，她学会辨认矿石。敲开矿石，看到暗色金属光泽，她就知道这一炉可能成功。</p>        
        <p>村子里的农人越来越多地来到作坊。他们拿旧器具来换新的农具。作坊木架上挂着铁镰、铁锤，还有一排刚锻造出来的</p>        
        <div class="story-choice" data-answer="铁犁" data-q="2">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="铁剑">铁剑</button>
            <button class="choice-btn" data-value="铁犁">铁犁</button>
            <button class="choice-btn" data-value="铁斧">铁斧</button>
          </div>
          <div class="choice-result">
            <span class="result-word">铁犁</span>
          </div>
        </div>        
        <p>。</p>        
        <p>农田里的变化很明显。土地被翻得更深，麦子长得更密。她第一次意识到，这些器物正在改变整个村庄的生活。</p>        
        <div class="nav-hint">完成选择后继续 <span class="arrow">↓</span></div>
      </div>
    </div>
  </div>
  
  <!-- 第4页：第三章 -->
  <div class="slide-page" data-page="3">
    <div class="chapter-layout">
      <div class="chapter-indicator">
        <span class="stage-dot active"></span>
        <span class="stage-dot active"></span>
        <span class="stage-dot"></span>
        <span class="stage-line" style="top: 66%"></span>
      </div>      
      <div class="chapter-content-full">
        <h3 class="chapter-title">战争的影子</h3>        
        <p>几年之后，作坊开始接到更多兵器订单。士兵来取货时，会把一捆捆兵器背在肩上离开。</p>        
        <p>木架另一侧摆满锋利的武器。最常见的是铁矛和成束的</p>        
        <div class="story-choice" data-answer="箭镞" data-q="3">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="箭镞">箭镞</button>
            <button class="choice-btn" data-value="矛头">矛头</button>
            <button class="choice-btn" data-value="刀鞘">刀鞘</button>
          </div>
          <div class="choice-result">
            <span class="result-word">箭镞</span>
          </div>
        </div>        
        <p>。</p>        
        <p>她逐渐明白，炉火里的铁不仅进入农田，也进入战场。后来出土的兵器、铁渣和冶铁炉遗迹，让人们知道这里曾经是战国时期重要的铁器生产地点。</p>        
        <div class="nav-hint">完成选择后查看总结 <span class="arrow">↓</span></div>
      </div>
    </div>
  </div>
  
  <!-- 第5页：总结页 -->
  <div class="slide-page" data-page="4">
    <div class="summary-layout">
      <h2 class="summary-title">探索完成</h2>      
      <div class="answers-section">
        <h4>你的选择</h4>
        <div class="answers-list">          
          <div class="answer-item" data-q="1">
            <span class="answer-stage">矿山与炉火</span>
            <span class="answer-value">—</span>
          </div>          
          <div class="answer-item" data-q="2">
            <span class="answer-stage">铁器与农田</span>
            <span class="answer-value">—</span>
          </div>          
          <div class="answer-item" data-q="3">
            <span class="answer-stage">战争的影子</span>
            <span class="answer-value">—</span>
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
        </div>      </div>      
      <div class="summary-actions">
        <button class="share-btn" onclick="Shengmin.exportLink()">复制分享链接</button>
        <button class="restart-btn" onclick="goToPage(0)">重新探索</button>
      </div>    
    </div>
  </div>
</div>

<style>
/* 滑动容器 */
.story-slider {
  position: relative;
  min-height: 80vh;
  overflow: visible;
}

.slide-page {
  display: none;
  width: 100%;
  min-height: 80vh;
  padding: 40px;
  box-sizing: border-box;
}

.slide-page.active {
  display: block;
}

/* 页面指示点 */
.page-dots {
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
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
  transform: scale(1.3);
}

/* 第1页：信息页 */
.info-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  height: 100%;
  align-items: center;
}

.char-name {
  font-family: "Songti SC", serif;
  font-size: 4rem;
  color: var(--accent);
  margin: 0;
  text-align: left;
  letter-spacing: 8px;
}

.char-era {
  font-size: 1.1rem;
  color: #888;
  margin: 10px 0 30px;
  letter-spacing: 3px;
  text-align: left;
}

.char-bio-wide {
  background: rgba(128,0,32,0.03);
  padding: 30px;
  border-radius: 12px;
  border-left: 4px solid var(--accent);
  max-width: 90%;
}

.char-bio-wide p {
  line-height: 2;
  color: #555;
  margin: 0;
  font-size: 1rem;
}

.start-btn {
  margin-top: 40px;
  padding: 14px 40px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Songti SC", serif;
}

.start-btn:hover {
  transform: translateX(5px);
  box-shadow: 0 10px 30px rgba(128,0,32,0.3);
}

.arrow {
  margin-left: 8px;
  transition: transform 0.3s;
}

.start-btn:hover .arrow {
  transform: translateX(5px);
}

.scene-img {
  width: 100%;
  max-width: 450px;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

/* 章节页 */
.chapter-layout {
  display: flex;
  height: 100%;
  gap: 40px;
}

.chapter-indicator {
  position: relative;
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}

.stage-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(128,0,32,0.2);
  margin: 20px 0;
  position: relative;
  z-index: 2;
  transition: all 0.3s;
}

.stage-dot.active {
  background: var(--accent);
  transform: scale(1.2);
}

.stage-line {
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, var(--accent), rgba(128,0,32,0.1));
  z-index: 1;
}

.chapter-content-full {
  flex: 1;
  max-width: 700px;
  padding: 20px 0;
}

.chapter-title {
  font-family: "Songti SC", serif;
  font-size: 1.8rem;
  color: var(--accent);
  margin-bottom: 30px;
  letter-spacing: 4px;
}

.chapter-content-full p {
  line-height: 2.2;
  color: #444;
  margin-bottom: 20px;
  font-size: 1.05rem;
  display: inline;
}

/* 选择题 */
.story-choice {
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
}

.choice-prompt {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 16px;
  background: rgba(128,0,32,0.08);
  border-radius: 20px;
  border: 2px dashed var(--accent);
  transition: all 0.3s;
}

.choice-prompt:hover {
  background: rgba(128,0,32,0.15);
  transform: scale(1.05);
}

.choice-q {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
}

.choice-hint {
  font-size: 0.85rem;
  color: #666;
}

.choice-options {
  display: none;
  gap: 12px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.choice-options[style*="flex"] {
  display: flex !important;
}

.choice-btn {
  padding: 10px 24px;
  background: white;
  border: 2px solid rgba(128,0,32,0.2);
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
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
  border-color: #ddd;
}

.choice-result {
  display: none;
  align-items: center;
  padding: 10px 20px;
  background: rgba(128,0,32,0.08);
  border-radius: 25px;
  margin: 10px 0;
}

.choice-result[style*="flex"] {
  display: inline-flex !important;
}

.result-word {
  font-weight: bold;
  color: var(--accent);
  font-size: 1.1rem;
  font-family: "Songti SC", serif;
}

.nav-hint {
  margin-top: 40px;
  color: #888;
  font-size: 0.9rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* 总结页 */
.summary-layout {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.summary-title {
  font-family: "Songti SC", serif;
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 40px;
  letter-spacing: 8px;
}

.answers-section {
  background: rgba(128,0,32,0.03);
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.answers-section h4 {
  color: var(--accent);
  margin-bottom: 20px;
  font-family: "Songti SC", serif;
}

.answers-list {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.answer-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.answer-stage {
  font-size: 0.85rem;
  color: #888;
}

.answer-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--accent);
  font-family: "Songti SC", serif;
  min-width: 60px;
}

.answer-value.answered {
  color: var(--accent);
}

.summary-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
}

.summary-box {
  padding: 25px;
  border-radius: 12px;
  background: white;
  border: 1px solid rgba(128,0,32,0.1);
}

.summary-box.placeholder {
  background: rgba(128,0,32,0.02);
}

.summary-box h4 {
  color: var(--accent);
  margin-bottom: 15px;
  font-family: "Songti SC", serif;
}

.placeholder-text {
  color: #aaa;
  font-size: 0.9rem;
}

.summary-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.share-btn, .restart-btn {
  padding: 14px 40px;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: "Songti SC", serif;
}

.share-btn {
  background: var(--accent);
  color: white;
  border: none;
}

.share-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(128,0,32,0.3);
}

.restart-btn {
  background: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
}

.restart-btn:hover {
  background: rgba(128,0,32,0.05);
}

@media (max-width: 900px) {
  .info-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .char-name {
    font-size: 3rem;
  }
  .scene-img {
    max-width: 100%;
  }
  .page-dots {
    bottom: 20px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    top: auto;
  }
  .chapter-layout {
    flex-direction: column;
  }
  .chapter-indicator {
    flex-direction: row;
    padding: 0;
    width: auto;
    justify-content: center;
  }
  .stage-line {
    display: none;
  }
  .summary-sections {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  let currentPage = 0;
  const totalPages = 5;
  const answers = { 1: null, 2: null, 3: null };

  function goToPage(page) {
    currentPage = page;
    document.querySelectorAll('.slide-page').forEach((p, i) => {
      p.classList.toggle('active', i === page);
    });
    document.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === page);
    });
  }

  window.goToPage = goToPage;

  // 点击指示点切换
  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
      goToPage(parseInt(dot.dataset.page));
    });
  });

  // 选择题交互
  document.querySelectorAll('.story-choice').forEach(choice => {
    const prompt = choice.querySelector('.choice-prompt');
    const options = choice.querySelector('.choice-options');
    const result = choice.querySelector('.choice-result');
    const answer = choice.dataset.answer;
    const qNum = choice.dataset.q;
    
    if (prompt) {
      prompt.addEventListener('click', (e) => {
        e.stopPropagation();
        if (answers[qNum]) return;
        options.style.display = 'flex';
        prompt.style.display = 'none';
      });
    }
    
    choice.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (answers[qNum]) return;
        
        const value = btn.dataset.value;
        const isCorrect = value === answer;
        answers[qNum] = value;
        
        // 显示选项结果
        choice.querySelectorAll('.choice-btn').forEach(b => {
          if (b.dataset.value === answer) {
            b.classList.add('correct');
          } else if (b === btn && !isCorrect) {
            b.classList.add('wrong');
          }
        });
        
        // 延迟后显示答案并切换页面
        setTimeout(() => {
          options.style.display = 'none';
          result.style.display = 'inline-flex';
          
          // 更新总结页
          const summaryItem = document.querySelector(`.answer-item[data-q="${qNum}"] .answer-value`);
          if (summaryItem) {
            summaryItem.textContent = answer;
            summaryItem.classList.add('answered');
          }
          
          // 收藏节点
          if (typeof Shengmin !== 'undefined') {
            Shengmin.collectItem(answer, false);
          }
          
          // 自动进入下一页
          setTimeout(() => {
            if (currentPage < totalPages - 1) {
              goToPage(currentPage + 1);
            }
          }, 1500);
          
        }, 800);
      });
    });
  });

  // 键盘导航
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      if (currentPage < totalPages - 1) goToPage(currentPage + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      if (currentPage > 0) goToPage(currentPage - 1);
    }
  });

  // 触摸滑动支持
  let touchStartY = 0;
  document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  });

  document.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentPage < totalPages - 1) {
        goToPage(currentPage + 1);
      } else if (diff < 0 && currentPage > 0) {
        goToPage(currentPage - 1);
      }
    }
  });

  if (typeof Shengmin !== 'undefined') {
    Shengmin.storyData = {
      character: '炉青',
      nodes: ['作坊', '铁矿石', '高炉', '鼓风', '兵器', '冶铁遗址', '生产工具', '行商', '行路', '驿使', '游侠', '驿站', '坩埚', '铁犁', '箭镞'],
      relics: ['冶铁遗址', '兵器', '生产工具']
    };
  }
});
</script>
;
  }
});
</script>
