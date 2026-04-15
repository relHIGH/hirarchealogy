---
layout: story
title: 茶岑
total_pages: 9
nodes:
  - name: 大理国
    theme: 饮
  - name: 茶马古道
    theme: 饮
  - name: 普洱茶
    theme: 饮
  - name: 马帮
    theme: 饮
  - name: 藏区
    theme: 饮
relics:
  - 普洱茶砖
  - 马铃铛
  - 银饰
  - 茶盏
---

<!-- 第1页：介绍 -->
<div class="page" id="page-0">
  <div class="intro-layout">
    <div class="intro-left">
      <h1 class="char-name">茶岑篇</h1>
      <p class="char-era">大理国 · 茶马古道商人</p>
      <div class="char-bio">
        <p>生于大理国苍洱之间。这里是茶马古道的起点，普洱茶从这里走向雪域高原。她继承了家族的马帮，带领骡马队翻山越岭，用茶叶换取藏区的马匹、药材和皮毛。</p>
      </div>
      <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
    </div>      
    <div class="intro-right">
      <img src="{{ site.baseurl }}/assets/images/scenes/茶岑.png" alt="茶岑" class="scene-img"/>
    </div>
  </div>
</div>

<!-- 第2页：苍洱之间 -->
<div class="page" id="page-1">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">苍洱之间</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <img src="{{ site.baseurl }}/assets/images/scenes/茶岑.png" alt="大理风光" class="scene-img"/>
        <div class="interact-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
          <span>点击场景中的光点</span>
        </div>
      </div>
      <div class="text-side">
        <p>茶岑生在<span class="clickable-text inline" onclick="collectNode('大理国', '饮', this)"><span class="pulse-dot"></span><strong>大理国</strong></span>，长在苍山脚下、洱海之滨。</p>
        <p>这里是茶马古道的起点，每年春天，茶农们把晒好的普洱茶装上马背，沿着蜿蜒的山路走向西藏。</p>
        <p>她从小跟着父亲走<span class="clickable-text inline" onclick="collectNode('茶马古道', '饮', this)"><span class="pulse-dot"></span><strong>茶马古道</strong></span>，熟悉每一条山路、每一个驿站。</p>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第3页：普洱茶 -->
<div class="page" id="page-2">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">苍洱之间</h3>
    </div>
    
    <div class="text-block">
      <p>大理的茶叶以<span class="clickable-text inline" onclick="collectNode('普洱茶', '饮', this)"><span class="pulse-dot"></span><strong>普洱茶</strong></span>最为著名。茶饼压得紧实，便于马帮长途运输，越陈越香。</p>
      <p>她家世代经营茶叶，她能从茶汤的颜色分辨出茶叶的年份和产地。</p>
    </div>
    
    <div class="artifact-showcase" onclick="collectRelic('普洱茶砖', this)">
      <div class="artifact-visual">
        <div class="scene-placeholder small"><span>茶砖</span></div>
      </div>
      <div class="artifact-info">
        <span class="pulse-dot"></span>
        <p>祖传<strong>普洱茶砖</strong></p>
        <p class="sub">压制于三十年前，价值连城</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第4页：马帮 -->
<div class="page" id="page-3">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">马帮铃声</h3>
    </div>
    
    <div class="scene-with-text">
      <div class="text-side">
        <p>她二十岁那年，正式接管了家族的<span class="clickable-text inline" onclick="collectNode('马帮', '饮', this)"><span class="pulse-dot"></span><strong>马帮</strong></span>。</p>
        <p>二十匹骡马，十个赶马人，载着两吨茶叶，这就是她的全部家当。</p>
        <p>每次出发，马铃声响彻山谷，那是商人最动听的音乐。</p>
      </div>
      <div class="scene-side">
        <div class="scene-placeholder"><span>马帮</span></div>
      </div>
    </div>
    
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">老赶马人</span>
        <p>"马帮有三宝：好马、好茶、好向导。姑娘占了前两样，这第三样，得靠经验积累。"</p>
      </div>
    </div>
    
    <div class="clickable-text" onclick="collectRelic('马铃铛', this)">
      <span class="pulse-dot"></span>
      <span>祖传<strong>马铃铛</strong>，每一声都是家族的回响</span>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第5页：滇藏之路 -->
<div class="page" id="page-4">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">马帮铃声</h3>
    </div>
    
    <div class="text-block">
      <p>从大理到拉萨，要走四十五天。途经丽江、中甸、德钦，翻越梅里雪山，才能到达雪域高原。</p>
      <p>一路上，她见识了各个民族的风情：白族的三道茶、纳西族的东巴文、藏族的酥油茶。</p>
    </div>
    
    <div class="mini-choice">
      <p>茶马古道上，马帮用什么交换藏区的马匹？</p>
      <div class="mini-options">
        <button onclick="selectMiniChoice(this, '金银', false)">金银</button>
        <button onclick="selectMiniChoice(this, '茶叶', true)">茶叶</button>
        <button onclick="selectMiniChoice(this, '丝绸', false)">丝绸</button>
      </div>
      <div class="mini-result" id="mini-result-1"></div>
    </div>
    
    <button class="nav-btn" id="btn-page4" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第6页：交易 -->
<div class="page" id="page-5">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">以茶易马</h3>
    </div>
    
    <div class="scene-with-text">
      <div class="scene-side">
        <div class="scene-placeholder"><span>集市</span></div>
      </div>
      <div class="text-side">
        <p>拉萨的八廓街是茶马交易的中心。</p>
        <p>她用一驮普洱茶，可以换一匹<span class="clickable-text inline" onclick="collectNode('藏区', '饮', this)"><span class="pulse-dot"></span><strong>藏区</strong></span>的良马。</p>
        <p>除了马匹，她还带回藏红花、麝香、皮毛，在大理能卖出高价。</p>
      </div>
    </div>
    
    <div class="item-row">
      <div class="clickable-item" onclick="collectRelic('银饰', this)">
        <span class="pulse-dot"></span>
        <span>藏族<strong>银饰</strong></span>
      </div>
      <span>——这是她用一块茶饼换来的宝贝</span>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第7页：酥油茶 -->
<div class="page" id="page-6">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">以茶易马</h3>
    </div>
    
    <div class="text-block">
      <p>藏民最爱喝酥油茶，而做酥油茶必须用普洱茶。</p>
      <p>茶叶在高原上煮得浓浓的，加入酥油和盐，是藏民每日必备的饮品。</p>
      <p>她学会了打酥油茶，藏民都说她的手艺比当地人还好。</p>
    </div>
    
    <div class="reveal-card" onclick="revealText(this)">
      <div class="reveal-front">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4"/>
          <line x1="10" y1="1" x2="10" y2="4"/>
          <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
        <span>看看她的收藏</span>
      </div>
      <div class="reveal-back">
        <div class="highlight-text" onclick="collectRelic('茶盏', this)">
          <span class="pulse-dot"></span>
          <strong>大理窑茶盏</strong>
        </div>
        <p>这是她最珍爱的器物，每次喝茶都用它。</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第8页：尾声 -->
<div class="page" id="page-7">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">04</span>
      <h3 class="chapter-title">茶香万里</h3>
    </div>
    
    <div class="ending-text">
      <p>她最终定居拉萨，开设了商号。</p>
      <p>来自云南的普洱茶，经过她的手，成为高原上酥油茶的珍贵原料。</p>
      <div class="divider"></div>
      <p class="final">她感叹人生如茶，</p>
      <p class="final">苦涩之后自有回甘；</p>
      <p class="final">行路虽远，终有归处。</p>
    </div>
    
    <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
  </div>
</div>

<!-- 第9页：总结 -->
<div class="page summary-page" id="page-8">
  <div class="summary-layout">
    <h2 class="summary-title">探索完成</h2>
    
    <div class="stats-row">
      <div class="stat-box">
        <span class="stat-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m4.22-10.22l4.24-4.24M6.34 17.66l-4.24 4.24M23 12h-6m-6 0H1m20.24 4.24l-4.24-4.24M6.34 6.34L2.1 2.1"/>
          </svg>
        </span>
        <span class="stat-num" id="summary-node-count">0</span>
        <span class="stat-label">主题节点</span>
      </div>
      
      <div class="stat-box">
        <span class="stat-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><rect x="6" y="3" width="15" height="14" rx="2"/>
          </svg>
        </span>
        <span class="stat-num" id="summary-relic-count">0</span>
        <span class="stat-label">历史文物</span>
      </div>
    </div>
    
    <div class="collection-showcase">
      <div class="showcase-section">
        <h4>主题节点</h4>
        <div class="showcase-list" id="summary-nodes"></div>
      </div>
      
      <div class="showcase-section">
        <h4>历史文物</h4>
        <div class="showcase-list" id="summary-relics"></div>
      </div>
    </div>
    
    <div class="summary-actions">
      <button class="btn-primary" onclick="restart()">重新探索</button>
      <button onclick="exportProgress()">复制分享链接</button>
    </div>
  </div>
</div>

<script>
// 页面特定的交互函数
function selectMiniChoice(el, answer, isCorrect) {
  var parent = el.parentElement;
  var buttons = parent.querySelectorAll('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('correct', 'wrong');
  }
  
  var result = document.getElementById('mini-result-1');
  
  if (isCorrect) {
    el.classList.add('correct');
    if (result) {
      result.textContent = '正确！茶马古道上，云南的茶叶是最重要的交换物资。';
      result.classList.add('show');
    }
    var btn = document.getElementById('btn-page4');
    if (btn) btn.disabled = false;
  } else {
    el.classList.add('wrong');
    if (result) {
      result.textContent = '不对，再想想。';
      result.classList.add('show');
    }
  }
}

function revealText(el) {
  el.classList.add('revealed');
}
</script>
