---
layout: default
title: 炉青
---

<div class="story-page story-new">
  <div class="story-layout">
    <!-- 左上角：人物介绍 -->
    <div class="story-intro">
      <h1>炉青</h1>
      <p class="story-era">战国 · 冶铁作坊匠人</p>
      <div class="story-bio">
        <p>生于战国末年的邯郸冶铁世家，自幼在炉火与矿石间长大。从搬运矿石到辨识矿质，从锻造农具到铸造兵器，她见证了铁器如何改变农田，又如何走向战场。</p>
      </div>
    </div>
    
    <!-- 右上角：场景图 -->
    <div class="story-scene">
      <img src="{{ site.baseurl }}/assets/images/scenes/炉青.png" alt="炉青场景"/>
    </div>
  </div>
  
  <!-- 故事时间线 -->
  <div class="story-timeline-new">
    
    <!-- 第一章 -->
    <div class="story-chapter-new" data-chapter="1">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第一阶段｜矿山与炉火</h3>
        <p>她出生在山地矿区。村子旁边就是一处冶铁作坊。每天清晨，矿石从山坡被运下来，堆在院子的角落。她小时候的任务只是把矿石搬到炉旁，再把木炭添进炉口。</p>
        <p>炉火一旦点燃，就会持续整夜。风箱推动空气进入炉中，铁水慢慢在高温里融化。父亲把铁水从炉口引出，倒进</p>
        
        <div class="story-choice" data-answer="坩埚">
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
            <span class="result-text"></span>
            <span class="result-word">坩埚</span>
          </div>
        </div>
        
        <p>里，再用铁锤反复敲打。</p>
        <p>院子里堆满黑色的铁渣和碎裂的陶片。很多年后，人们只看到冶铁炉遗址、鼓风管和成堆铁渣，却仍能知道这里曾经有一座忙碌的铁作坊。</p>
      </div>
    </div>
    
    <!-- 第二章 -->
    <div class="story-chapter-new" data-chapter="2">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第二阶段｜铁器与农田</h3>
        <p>随着年龄增长，她学会辨认矿石。敲开矿石，看到暗色金属光泽，她就知道这一炉可能成功。</p>
        <p>村子里的农人越来越多地来到作坊。他们拿旧器具来换新的农具。作坊木架上挂着铁镰、铁锤，还有一排刚锻造出来的</p>
        
        <div class="story-choice" data-answer="铁犁">
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
            <span class="result-text"></span>
            <span class="result-word">铁犁</span>
          </div>
        </div>
        
        <p>。</p>
        <p>农田里的变化很明显。土地被翻得更深，麦子长得更密。她第一次意识到，这些器物正在改变整个村庄的生活。</p>
      </div>
    </div>
    
    <!-- 第三章 -->
    <div class="story-chapter-new" data-chapter="3">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第三阶段｜战争的影子</h3>
        <p>几年之后，作坊开始接到更多兵器订单。士兵来取货时，会把一捆捆兵器背在肩上离开。</p>
        <p>木架另一侧摆满锋利的武器。最常见的是铁矛和成束的</p>
        
        <div class="story-choice" data-answer="箭镞">
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
            <span class="result-text"></span>
            <span class="result-word">箭镞</span>
          </div>
        </div>
        
        <p>。</p>
        <p>她逐渐明白，炉火里的铁不仅进入农田，也进入战场。后来出土的兵器、铁渣和冶铁炉遗迹，让人们知道这里曾经是战国时期重要的铁器生产地点。</p>
      </div>
    </div>
    
  </div>
  
  <!-- 探索收藏 -->
  <div class="story-collection" id="collection-section">
    <h2>探索收藏</h2>
    <div class="collection-grid">
      <div class="collection-group">
        <h4>主题节点</h4>
        <div class="collected-nodes" id="nodes-lit"></div>
      </div>
      <div class="collection-group">
        <h4>历史文物</h4>
        <div class="collected-relics" id="relics-lit"></div>
      </div>
    </div>
    
    <div class="export-actions">
      <button onclick="Shengmin.exportLink()">复制分享链接</button>
    </div>
  </div>
</div>

<style>
/* 新布局 */
.story-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.story-intro h1 {
  font-family: "Songti SC", serif;
  color: var(--accent);
  font-size: 2rem;
  margin-bottom: 8px;
}

.story-era {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.story-bio {
  background: rgba(128,0,32,0.03);
  padding: 20px;
  border-radius: 8px;
  border-left: 3px solid var(--accent);
}

.story-bio p {
  line-height: 1.8;
  color: #555;
  margin: 0;
}

.story-scene img {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* 故事时间线 */
.story-timeline-new {
  position: relative;
  padding-left: 40px;
  margin: 60px 0;
}

.story-timeline-new::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--accent), rgba(128,0,32,0.1));
}

.story-chapter-new {
  position: relative;
  margin-bottom: 80px;
}

.chapter-marker {
  position: absolute;
  left: -33px;
  top: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 3px solid white;
  box-shadow: 0 0 0 2px var(--accent);
}

.chapter-content h3 {
  font-family: "Songti SC", serif;
  color: var(--accent);
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.chapter-content p {
  line-height: 2;
  color: #444;
  margin-bottom: 16px;
}

/* 选择题 */
.story-choice {
  display: inline-block;
  margin: 10px 0;
  vertical-align: middle;
}

.choice-prompt {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 16px;
  background: rgba(128,0,32,0.05);
  border-radius: 20px;
  border: 1px dashed var(--accent);
  transition: all 0.3s;
}

.choice-prompt:hover {
  background: rgba(128,0,32,0.1);
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
  font-size: 0.8rem;
  color: #888;
}

.choice-options {
  display: none;
  gap: 8px;
  margin-top: 10px;
}

.choice-options.active {
  display: flex;
}

.choice-btn {
  padding: 6px 14px;
  background: white;
  border: 1px solid rgba(128,0,32,0.2);
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.choice-btn:hover {
  background: rgba(128,0,32,0.05);
}

.choice-btn.correct {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.choice-btn.wrong {
  background: #ccc;
  color: #666;
  border-color: #ccc;
}

.choice-result {
  display: none;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(128,0,32,0.05);
  border-radius: 20px;
}

.choice-result.active {
  display: inline-flex;
}

.result-word {
  font-weight: bold;
  color: var(--accent);
}

@media (max-width: 800px) {
  .story-layout {
    grid-template-columns: 1fr;
  }
  .story-scene {
    order: -1;
  }
  .story-scene img {
    max-width: 100%;
  }
}
</style>

<script>
// 选择题交互
document.querySelectorAll('.story-choice').forEach(choice => {
  const prompt = choice.querySelector('.choice-prompt');
  const options = choice.querySelector('.choice-options');
  const result = choice.querySelector('.choice-result');
  const answer = choice.dataset.answer;
  
  let answered = false;
  
  prompt.addEventListener('click', () => {
    if (answered) return;
    options.classList.add('active');
    prompt.style.display = 'none';
  });
  
  choice.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      
      const value = btn.dataset.value;
      const isCorrect = value === answer;
      
      choice.querySelectorAll('.choice-btn').forEach(b => {
        if (b.dataset.value === answer) {
          b.classList.add('correct');
        } else if (b === btn && !isCorrect) {
          b.classList.add('wrong');
        }
      });
      
      setTimeout(() => {
        options.classList.remove('active');
        result.classList.add('active');
        result.querySelector('.result-text').textContent = isCorrect ? '回答正确：' : '正确答案是：';
        
        // 收藏节点
        if (isCorrect && typeof Shengmin !== 'undefined') {
          Shengmin.collectItem(answer, false);
        }
      }, 800);
    });
  });
});

Shengmin.storyData = {
  character: '炉青',
  nodes: ['作坊', '铁矿石', '高炉', '鼓风', '兵器', '冶铁遗址', '生产工具', '行商', '行路', '驿使', '游侠', '驿站', '坩埚', '铁犁', '箭镞'],
  relics: ['冶铁遗址', '兵器', '生产工具']
};
</script>
