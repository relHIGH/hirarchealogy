---
layout: default
title: 衡羽
---

<div class="story-page story-new">
  <div class="story-layout">
    <div class="story-intro">
      <h1>衡羽</h1>
      <p class="story-era">秦 · 咸阳驿舍管事</p>
      <div class="story-bio">
        <p>任职于秦咸阳城东的驿舍，精通律令，负责登记来往文书。她见证了帝国驰道纵横、文书往来的繁华，也经历了秦末动乱中驿站系统的崩溃。</p>
      </div>
    </div>
    <div class="story-scene">
      <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="衡羽场景"/>
    </div>
  </div>
  
  <div class="story-timeline-new">
    
    <div class="story-chapter-new" data-chapter="1">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第一阶段｜咸阳驿站</h3>
        <p>衡羽任职于[[咸阳]]城东的[[驿舍]]，这里是帝国[[交通]]网络的枢纽。每日迎来送往，见证着天下的风云变幻。</p>
        <p>她精通</p>
        
        <div class="story-choice" data-answer="律令">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="礼法">礼法</button>
            <button class="choice-btn" data-value="律令">律令</button>
            <button class="choice-btn" data-value="规章">规章</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">律令</span>
          </div>
        </div>
        
        <p>，能准确计算[[传食]]配额，从不让过路的[[官吏]]久等。[[驿路]]上马蹄声声，[[驿使]]穿梭如飞。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="2">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第二阶段｜文书往来</h3>
        <p>秦统一后，[[驰道]]纵横天下，[[车]]马[[行路]]一日千里。衡羽负责登记来往</p>
        
        <div class="story-choice" data-answer="文书">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="账册">账册</button>
            <button class="choice-btn" data-value="文书">文书</button>
            <button class="choice-btn" data-value="名册">名册</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">文书</span>
          </div>
        </div>
        
        <p>，那些竹简上记录着帝国的[[政令]]与[[军报]]。</p>
        <p>她学会辨认各地的[[封泥]]印记，从中读出天下大势。每封[[文书]]都是一条[[路]]，连接着帝国的每个角落。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="3">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第三阶段｜帝国余音</h3>
        <p>秦末动乱，[[驿站]]系统逐渐崩溃。衡羽收拾行囊，带着多年积累的</p>
        
        <div class="story-choice" data-answer="简牍">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="简牍">简牍</button>
            <button class="choice-btn" data-value="典籍">典籍</button>
            <button class="choice-btn" data-value="册页">册页</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">简牍</span>
          </div>
        </div>
        
        <p>，踏上了寻找安宁的[[旅途]]。</p>
        <p>她曾管理的[[驿舍]]变成废墟，但那些[[路]]还在，只是[[行路]]的人换了一批又一批。</p>
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
  character: '衡羽',
  nodes: ['咸阳', '驿舍', '律令', '传食', '官吏', '驰道', '文书', '政令', '军报', '封泥', '简牍', '交通', '驿路', '驿使', '车', '行路', '路', '驿站', '旅途'],
  relics: ['简牍', '封泥']
};
</script>
