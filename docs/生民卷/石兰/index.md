---
layout: default
title: 张昙
---

<div class="story-page story-new">
  <div class="story-layout">
    <div class="story-intro">
      <h1>张昙</h1>
      <p class="story-era">北魏 · 云冈石窟石匠</p>
      <div class="story-bio">
        <p>生于平城郊外石匠世家，随父亲参与云冈石窟开凿。她从搬运石材做起，渐习得雕刻技艺，在飞天衣带与菩萨莲座中寄托情思。</p>
      </div>
    </div>
    <div class="story-scene">
      <img src="{{ site.baseurl }}/assets/images/scenes/石兰.png" alt="石兰场景"/>
    </div>
  </div>
  
  <div class="story-timeline-new">
    
    <div class="story-chapter-new" data-chapter="1">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第一阶段｜武州山下</h3>
        <p>石兰生于[[平城]]郊外的石匠世家。[[云冈石窟]]开凿时，她的父亲被征召去</p>
        
        <div class="story-choice" data-answer="雕刻">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="绘画">绘画</button>
            <button class="choice-btn" data-value="雕刻">雕刻</button>
            <button class="choice-btn" data-value="铸造">铸造</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">雕刻</span>
          </div>
        </div>
        
        <p>佛像，她随之前往。</p>
        <p>在[[武州山]]下，她第一次见到了规模宏大的[[石窟]]工地。[[工匠]]们从四方汇聚，每个人的背后都有一条漫长的[[行路]]。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="2">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第二阶段｜凿石成佛</h3>
        <p>石兰从搬运[[石材]]做起，渐习得雕刻技艺。她参与凿刻了</p>
        
        <div class="story-choice" data-answer="飞天">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="罗汉">罗汉</button>
            <button class="choice-btn" data-value="飞天">飞天</button>
            <button class="choice-btn" data-value="金刚">金刚</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">飞天</span>
          </div>
        </div>
        
        <p>的衣带、[[菩萨]]的莲座。</p>
        <p>每一锤下去，都是对[[佛法]]的虔诚，也是对艺术的追求。她在[[壁画]]中寄托[[情]]思，在[[造像]]中寻求[[境]]界。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="3">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第三阶段｜佛光永照</h3>
        <p>石窟完工之日，石兰站在自己参与雕刻的</p>
        
        <div class="story-choice" data-answer="大佛">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="大佛">大佛</button>
            <button class="choice-btn" data-value="宝塔">宝塔</button>
            <button class="choice-btn" data-value="经阁">经阁</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">大佛</span>
          </div>
        </div>
        
        <p>前，感到无比庄严。那些[[壁画]]与[[造像]]，将留存千年。</p>
        <p>她不禁[[感]]慨，自己的一生，也如同这[[石窟]]一般，在时光中留下永恒的[[境]]界。</p>
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
  character: '张昙',
  nodes: ['平城', '云冈石窟', '武州山', '石窟', '石材', '雕刻', '飞天', '菩萨', '佛法', '大佛', '壁画', '造像', '行路', '工匠', '情', '境', '感'],
  relics: ['石窟', '造像', '壁画']
};
</script>
壁画']
};
</script>
