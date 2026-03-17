---
layout: default
title: 安密罗
---

<div class="story-page story-new">
  <div class="story-layout">
    <div class="story-intro">
      <h1>安密罗</h1>
      <p class="story-era">唐 · 长安胡商</p>
      <div class="story-bio">
        <p>来自粟特，定居长安西市。她操着流利的汉语和胡语，打理商铺，学会了辨认波斯的宝石、大食的香料，见证了盛唐的繁华与变迁。</p>
      </div>
    </div>
    <div class="story-scene">
      <img src="{{ site.baseurl }}/assets/images/scenes/月珑.png" alt="月珑场景"/>
    </div>
  </div>
  
  <div class="story-timeline-new">
    
    <div class="story-chapter-new" data-chapter="1">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第一阶段｜西市繁华</h3>
        <p>月珑来自[[粟特]]，定居[[长安]][[西市]]。这里是丝绸之路的终点，各国的[[胡商]]云集于此。</p>
        <p>她学会了辨认[[波斯]]的</p>
        
        <div class="story-choice" data-answer="宝石">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="丝绸">丝绸</button>
            <button class="choice-btn" data-value="宝石">宝石</button>
            <button class="choice-btn" data-value="瓷器">瓷器</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">宝石</span>
          </div>
        </div>
        
        <p>、[[大食]]的[[香料]]、[[突厥]]的[[皮毛]]。[[茶]]与[[酒]]是她最爱的[[饮品]]，也是待客必备的[[礼]]数。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="2">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第二阶段｜胡风唐韵</h3>
        <p>月珑操着流利的[[汉语]]和[[胡语]]，打理[[商铺]]。她见过[[玄奘]]西行归来时的盛况，也参加过</p>
        
        <div class="story-choice" data-answer="上元节">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="中秋节">中秋节</button>
            <button class="choice-btn" data-value="端午节">端午节</button>
            <button class="choice-btn" data-value="上元节">上元节</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">上元节</span>
          </div>
        </div>
        
        <p>的灯会。</p>
        <p>[[胡旋舞]]的乐声常在夜晚响起，[[葡萄酒]]的香气弥漫街头。每逢[[宴饮]]，她都会用精致的[[酒器]]款待宾客，展现[[礼]]仪之邦的风范。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="3">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第三阶段｜盛世回响</h3>
        <p>安史之乱后，长安的繁华渐褪。月珑整理着多年积攒的</p>
        
        <div class="story-choice" data-answer="货单">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="账簿">账簿</button>
            <button class="choice-btn" data-value="货单">货单</button>
            <button class="choice-btn" data-value="契约">契约</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">货单</span>
          </div>
        </div>
        
        <p>与[[账本]]，那些来自遥远国度的[[货物]]，承载着盛唐的记忆。</p>
        <p>她时常[[感]]叹，人生如[[茶]]，浮沉有时；世事如[[酒]]，浓淡自知。</p>
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
  character: '安密罗',
  nodes: ['粟特', '长安', '西市', '胡商', '波斯', '宝石', '大食', '香料', '突厥', '皮毛', '汉语', '胡语', '商铺', '玄奘', '上元节', '胡旋舞', '葡萄酒', '货单', '账本', '货物', '茶', '酒', '饮品', '礼', '宴饮', '酒器', '感'],
  relics: ['宝石', '香料', '货单']
};
</script>
 '宴饮', '酒器', '感'],
  relics: ['宝石', '香料', '货单']
};
</script>
