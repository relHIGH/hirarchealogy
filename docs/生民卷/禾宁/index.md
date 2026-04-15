---
layout: story
title: 禾宁
total_pages: 10
nodes:
  - name: 屯田
    theme: 旅
  - name: 灌溉
    theme: 旅
  - name: 戍边
    theme: 旅
  - name: 河西
    theme: 旅
  - name: 丝路
    theme: 旅
relics:
  - 烽火台遗迹
  - 丝绸残片
  - 汉简农书
  - 铁铧犁
---

<!-- 第1页：介绍 -->
<div class="page" id="page-0">
  <div class="intro-layout">
    <div class="intro-left">
      <h1 class="char-name">禾宁篇</h1>
      <p class="char-era">汉 · 河西屯田农户</p>
      <div class="char-bio">
        <p>前119年生于陇西。随军屯田至河西走廊，在戈壁与绿洲之间开垦出一片生计。她的青春与汗水，浇灌了丝绸之路上的第一茬庄稼。</p>
      </div>
      <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
    </div>      
    <div class="intro-right">
      <div class="scene-placeholder"><span>河西屯田</span></div>
    </div>
  </div>
</div>

<!-- 第2页：屯田令 -->
<div class="page" id="page-1">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">屯田令下</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <div class="scene-placeholder"><span>戈壁荒原</span></div>
        <div class="interact-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
          <span>点击场景中的光点</span>
        </div>
      </div>
      <div class="text-side">
        <p>元狩四年，霍去病大败匈奴，朝廷下诏移民实边。</p>
        <p>禾宁一家从陇西迁来，车马颠簸了整整两个月。</p>
        <div class="clickable-text" onclick="collectNode('屯田', '旅', this)">
          <span class="pulse-dot"></span>
          <span>官府分给每户<strong>五十亩荒地</strong>，头三年免赋税。</span>
        </div>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第3页：灌溉 -->
<div class="page" id="page-2">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">屯田令下</h3>
    </div>
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">父亲</span>
        <p>"没有水，这地就是石头。"</p>
      </div>
    </div>
    <div class="text-block">
      <p>河西走廊的水，全靠祁连山的雪水。</p>
      <p>村里人合力挖了一条渠道，把雪山融水引到田里。</p>
      <div class="clickable-text" onclick="collectNode('灌溉', '旅', this)">
        <span class="pulse-dot"></span>
        <span>这叫<strong>坎儿井</strong>，是西域人传过来的法子。</span>
      </div>
    </div>
    
    <div class="mini-choice">
      <p>坎儿井主要分布在哪里？</p>
      <div class="mini-options">
        <button onclick="selectMiniChoice(this, '江南', false)">江南</button>
        <button onclick="selectMiniChoice(this, '河西走廊', true)">河西走廊</button>
        <button onclick="selectMiniChoice(this, '辽东', false)">辽东</button>
      </div>
      <div class="mini-result" id="mini-result-1"></div>
    </div>
    
    <button class="nav-btn" id="btn-page2" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第4页：戍边 -->
<div class="page" id="page-3">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">屯田令下</h3>
    </div>
    <div class="text-block">
      <p>屯田不是单纯的种地，还要配合军队戍边。</p>
      <p>农忙时种地，农闲时要协助守烽燧、修工事。</p>
    </div>
    <div class="scene-wide">
      <div class="scene-placeholder wide"><span>烽火台</span></div>
    </div>
    <div class="clickable-text" onclick="collectNode('戍边', '旅', this); collectRelic('烽火台遗迹', this);">
      <span class="pulse-dot"></span>
      <span>夜里登上<strong>烽火台</strong>，能看见远处匈奴的营火。</span>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第5页：河西走廊 -->
<div class="page" id="page-4">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">丝路绿洲</h3>
    </div>
    <div class="scene-with-text">
      <div class="text-side">
        <p>第三年，庄稼终于能自给自足了。</p>
        <p>更重要的是，通往西域的商路越来越热闹。</p>
        <div class="clickable-text" onclick="collectNode('河西', '旅', this)">
          <span class="pulse-dot"></span>
          <span>驼队从<strong>河西走廊</strong>经过，带来远方的消息。</span>
        </div>
      </div>
      <div class="scene-side">
        <div class="scene-placeholder"><span>驼队</span></div>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第6页：丝路 -->
<div class="page" id="page-5">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">丝路绿洲</h3>
    </div>
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">胡商</span>
        <p>"姑娘，你们种的麦子，比西域的甜。"</p>
      </div>
    </div>
    <div class="text-block">
      <p>商人们用骆驼换粮食，用香料换布匹。</p>
      <div class="clickable-text" onclick="collectNode('丝路', '旅', this); collectRelic('丝绸残片', this);">
        <span class="pulse-dot"></span>
        <span>有个波斯商人送她一小块<strong>彩色丝绸</strong>，说是从大秦来的。</span>
      </div>
    </div>
    
    <div class="interaction-area">
      <p class="instruction">汉代丝绸之路的起点是：</p>
      <div class="choice-cards">
        <div class="choice-card" onclick="selectChoice(this, '洛阳', false)">
          <div class="card-icon city"></div>
          <span>洛阳</span>
        </div>
        <div class="choice-card" onclick="selectChoice(this, '长安', true)">
          <div class="card-icon capital"></div>
          <span>长安</span>
        </div>
      </div>
      <div class="feedback" id="choice-feedback"></div>
    </div>
    
    <button class="nav-btn" id="btn-page5" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第7页：农书 -->
<div class="page" id="page-6">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">丝路绿洲</h3>
    </div>
    <div class="reveal-card" onclick="revealText(this)">
      <div class="reveal-front">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>两千年后</span>
      </div>
      <div class="reveal-back">
        <p>考古学家在敦煌烽燧遗址发现了一批汉简，其中就有关于屯田的记录：</p>
        <div class="highlight-text" onclick="collectRelic('汉简农书', this)">
          <span class="pulse-dot"></span>
          <strong>"田卒十二人，耕作五十亩，收粟百石。"</strong>
        </div>
        <p class="aside">禾宁要是知道，大概会笑着说："那年的收成真不错。"</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第8页：铁铧犁 -->
<div class="page" id="page-7">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">铁器与丰收</h3>
    </div>
    
    <div class="scene-with-text">
      <div class="scene-side">
        <div class="scene-placeholder"><span>铁犁</span></div>
      </div>
      <div class="text-side">
        <p>官府发下来的新农具，比木犁好用十倍。</p>
        <div class="clickable-text" onclick="collectRelic('铁铧犁', this)">
          <span class="pulse-dot"></span>
          <span><strong>铁铧犁</strong>能翻更深的土，草根都能挖出来。</span>
        </div>
      </div>
    </div>
    
    <div class="text-block">
      <p>有了铁犁，荒地三年就能变成良田。</p>
      <p class="aside">这在以前，至少要十年。</p>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第9页：结尾 -->
<div class="page" id="page-8">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">尾声</h3>
    </div>
    
    <div class="ending-text">
      <p>禾宁在河西种了二十年地。</p>
      <p>她的子孙沿着丝绸之路继续西迁，有的去了敦煌，有的去了吐鲁番。</p>
      <div class="divider"></div>
      <p class="final">她种了一辈子地，</p>
      <p class="final">不知道什么叫"丝路"，</p>
      <p class="final">但她知道，麦子熟了，日子就能过下去。</p>
    </div>
    
    <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
  </div>
</div>

<!-- 第10页：总结 -->
<div class="page summary-page" id="page-9">
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
  parent.querySelectorAll('button').forEach(function(b) {
    b.classList.remove('correct', 'wrong');
  });
  
  var result = document.getElementById('mini-result-1');
  
  if (isCorrect) {
    el.classList.add('correct');
    result.textContent = '坎儿井是西域地区独特的灌溉系统。';
    result.classList.add('show');
    document.getElementById('btn-page2').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '不对，再想想。';
    result.classList.add('show');
  }
}

function selectChoice(el, answer, isCorrect) {
  document.querySelectorAll('.choice-card').forEach(function(c) {
    c.classList.remove('correct', 'wrong');
  });
  
  if (isCorrect) {
    el.classList.add('correct');
    document.getElementById('choice-feedback').textContent = '正确！长安是丝绸之路的起点。';
    document.getElementById('btn-page5').disabled = false;
  } else {
    el.classList.add('wrong');
    document.getElementById('choice-feedback').textContent = '不对，再想想。';
  }
}

function revealText(el) {
  el.classList.add('revealed');
}
</script>
