---
layout: default
title: 潮音
---

<div class="story-page story-new">
  <div class="story-layout">
    <div class="story-intro">
      <h1>潮音</h1>
      <p class="story-era">五代十国 · 吴越运河船家</p>
      <div class="story-bio">
        <p>生于杭州城外的运河畔，祖祖辈辈以漕运为生。她自幼在货船上长大，熟悉每一条水闸、每一处码头，听过越剧的悠扬，见过龙井的翠绿。</p>
      </div>
    </div>
    <div class="story-scene">
      <img src="{{ site.baseurl }}/assets/images/scenes/潮音.png" alt="潮音场景"/>
    </div>
  </div>
  
  <div class="story-timeline-new">
    
    <div class="story-chapter-new" data-chapter="1">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第一阶段｜运河人家</h3>
        <p>潮音生于[[杭州]]城外的[[运河]]畔，祖祖辈辈以[[漕运]]为生。[[江南运河]]贯通南北，船只往来如织。</p>
        <p>她自幼在</p>
        
        <div class="story-choice" data-answer="货船">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="客船">客船</button>
            <button class="choice-btn" data-value="渔船">渔船</button>
            <button class="choice-btn" data-value="货船">货船</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">货船</span>
          </div>
        </div>
        
        <p>上长大，熟悉每一条[[水闸]]、每一处[[码头]]。[[行商]]们乘着她的[[船]]，在[[水]]路上奔波。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="2">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第二阶段｜吴越水乡</h3>
        <p>吴越国偏安江南，[[钱镠]]王修筑海塘，开辟[[航道]]。潮音的[[漕船]]运送着[[稻米]]、[[丝绸]]、[[茶叶]]，连接着散落在水网中的城镇。</p>
        <p>她听过</p>
        
        <div class="story-choice" data-answer="越剧">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="昆曲">昆曲</button>
            <button class="choice-btn" data-value="京剧">京剧</button>
            <button class="choice-btn" data-value="越剧">越剧</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">越剧</span>
          </div>
        </div>
        
        <p>的悠扬，见过[[龙井]]的翠绿。每逢[[节庆]]，运河上的[[戏]]台便热闹起来。</p>
      </div>
    </div>
    
    <div class="story-chapter-new" data-chapter="3">
      <div class="chapter-marker"></div>
      <div class="chapter-content">
        <h3>第三阶段｜涛声依旧</h3>
        <p>宋统一江南后，运河依旧繁忙。潮音摇着[[橹]]，在</p>
        
        <div class="story-choice" data-answer="钱塘江">
          <div class="choice-prompt">
            <span class="choice-q">?</span>
            <span class="choice-hint">点击选择</span>
          </div>
          <div class="choice-options">
            <button class="choice-btn" data-value="钱塘江">钱塘江</button>
            <button class="choice-btn" data-value="黄浦江">黄浦江</button>
            <button class="choice-btn" data-value="富春江">富春江</button>
          </div>
          <div class="choice-result">
            <span class="result-text"></span>
            <span class="result-word">钱塘江</span>
          </div>
        </div>
        
        <p>的潮声中，继续着她水上的生涯。</p>
        <p>她[[感]]叹人生如[[舟]]，随波逐流；又似[[戏]]台上的[[伶]]人，演绎着悲欢离合。</p>
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
  character: '潮音',
  nodes: ['杭州', '运河', '漕运', '江南运河', '货船', '水闸', '码头', '行商', '船', '水路', '钱镠', '航道', '漕船', '稻米', '丝绸', '茶叶', '越剧', '龙井', '节庆', '戏', '橹', '钱塘江', '感', '舟', '伶'],
  relics: ['丝绸', '茶叶']
};
</script>
