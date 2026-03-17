---
layout: default
title: 刘禾
---

<div class="story-page story-new">
  <div class="story-layout">
    <div class="story-intro">
      <h1>刘禾</h1>
      <p class="story-era">汉 · 河西屯田农户</p>
      <div class="story-bio">
        <p>随父兄来到河西走廊屯田，见证了丝绸之路的繁忙。她学会了在干旱之地寻找水源，用坎儿井灌溉麦田，也见证了东西方文明的交汇。</p>
      </div>
    </div>
    <div class="story-scene">
      <img src="{{ site.baseurl }}/assets/images/scenes/禾宁.png" alt="禾宁场景"/>
    </div>
  </div>
  
  <div class="story-timeline-new">
    
    <div class="story-chapter-new" data-chapter="1">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第一阶段｜河西屯田</h3>
        <p>禾宁随父兄来到[[河西走廊]]，这里是汉帝国向西域拓展的咽喉。朝廷在此[[屯田]]驻军，开垦荒地。</p>
        <p>她学会了在干旱之地寻找[[水源]]，用</p>
        
        <div class="story-choice" data-answer="坎儿井">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="水渠">水渠</button>
            <button class="choice-btn" data-value="坎儿井">坎儿井</button>
            <button class="choice-btn" data-value="水井">水井</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">坎儿井</span>
          </div>
        </div>
        
        <p>灌溉[[麦田]]。[[行商]]们沿着[[丝路]]而来，带来远方的[[茶]]叶与[[酒]]。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="2">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第二阶段｜丝路初现</h3>
        <p>张骞通西域后，[[丝绸之路]]日渐繁忙。禾宁的村庄位于商道旁，她见过[[骆驼]]队载着</p>
        
        <div class="story-choice" data-answer="丝绸">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="丝绸">丝绸</button>
            <button class="choice-btn" data-value="瓷器">瓷器</button>
            <button class="choice-btn" data-value="茶叶">茶叶</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">丝绸</span>
          </div>
        </div>
        
        <p>西行，也见过[[胡商]]带来的[[葡萄]]与[[苜蓿]]。</p>
        <p>每逢[[驿站]]换马，便有[[行商]]歇脚，他们讲述的远方故事，让禾宁对[[行路]]生出无限向往。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="3">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第三阶段｜边塞岁月</h3>
        <p>岁月流转，禾宁在[[烽燧]]旁建起家园。她守护着一方</p>
        
        <div class="story-choice" data-answer="良田">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="良田">良田</button>
            <button class="choice-btn" data-value="宅院">宅院</button>
            <button class="choice-btn" data-value="庄园">庄园</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">良田</span>
          </div>
        </div>
        
        <p>，见证着东西方文明的交汇。</p>
        <p>远处[[驿路]]上的[[车]]马从未停歇，那是连接中原与西域的[[路]]，也是她心中永远的牵挂。</p>
      </div>
    </div>
    
  </div>
  
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
  display: inline;
}

.story-choice {
  display: inline-block;
  margin: 0 4px;
  vertical-align: middle;
}

.choice-prompt {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 6px 14px;
  background: rgba(128,0,32,0.05);
  border-radius: 20px;
  border: 1px dashed var(--accent);
  transition: all 0.3s;
}

.choice-prompt:hover {
  background: rgba(128,0,32,0.1);
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
  font-size: 0.75rem;
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
  padding: 6px 14px;
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
        
        if (isCorrect && typeof Shengmin !== 'undefined') {
          Shengmin.collectItem(answer, false);
        }
      }, 800);
    });
  });
});

Shengmin.storyData = {
  character: '刘禾',
  nodes: ['河西走廊', '屯田', '水源', '坎儿井', '麦田', '丝绸之路', '骆驼', '丝绸', '胡商', '葡萄', '苜蓿', '烽燧', '良田', '行商', '茶', '酒', '驿站', '行路', '车', '路'],
  relics: ['丝绸', '烽燧']
};
</script>
�'],
  relics: ['丝绸', '烽燧']
};
</script>
