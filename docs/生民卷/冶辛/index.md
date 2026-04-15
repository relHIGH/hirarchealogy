---
layout: story
title: 冶辛
total_pages: 13
nodes:
  - name: 炉火
    theme: 感
  - name: 铁水
    theme: 感
  - name: 铁渣
    theme: 感
  - name: 矿石
    theme: 感
  - name: 箭镞
    theme: 感
relics:
  - 坩埚残片
  - 战国冶铁炉遗址
  - 铁犁铧
  - 三棱铁箭镞
---

<!-- 第1页：介绍 -->
<div class="page" id="page-0">
  <div class="intro-layout">
    <div class="intro-left">
      <h1 class="char-name">冶辛篇</h1>
      <p class="char-era">战国 · 冶铁作坊学徒</p>
      <div class="char-bio">
        <p>前271年生于上党郡。从添炭学徒到辨矿匠人——她的青春期是在铁渣堆和陶范碎片中度过的。</p>
      </div>
      <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
    </div>
    <div class="intro-right">
      <img src="{{ site.baseurl }}/assets/images/yexin/yexin_main.png" alt="冶辛" class="scene-img"/>
    </div>
  </div>
</div>

<!-- 第2页：炉火 -->
<div class="page" id="page-1">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">矿山与炉火</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <img src="{{ site.baseurl }}/assets/images/yexin/forge.png" alt="炉火" class="scene-img"/>
        <div class="interact-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
          <span>点击场景中的光点</span>
        </div>
      </div>
      <div class="text-side">
        <p>上党这地方，山多得像随手撒的石头。</p>
        <p>冶辛家就在半山腰，旁边是个冶铁作坊——几间破草房围着一座土炉子，常年冒着黑烟。</p>
        <div class="clickable-text" onclick="collectNode('炉火', '感', this)">
          <span class="pulse-dot"></span>
          <span>最忙的时候，<strong>炉火</strong>三天三夜不灭。</span>
        </div>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第3页：矿石 -->
<div class="page" id="page-2">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">矿山与炉火</h3>
    </div>
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">父亲</span>
        <p>"八岁就能分辨矿石了。铁的沉，废石轻，敲起来声音不一样。"</p>
      </div>
    </div>
    <div class="interaction-area">
      <p class="instruction">点击正确的石头：</p>
      <div class="choice-cards">
        <div class="choice-card" onclick="selectOre(this, false)">
          <div class="card-icon light"></div>
          <span>轻石</span>
        </div>
        <div class="choice-card" onclick="selectOre(this, true)">
          <div class="card-icon heavy"></div>
          <span>沉石</span>
        </div>
      </div>
      <div class="feedback" id="ore-feedback"></div>
    </div>
    <button class="nav-btn" id="btn-page2" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第4页：铁水 -->
<div class="page" id="page-3">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">矿山与炉火</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <img src="{{ site.baseurl }}/assets/images/yexin/molten.png" alt="铁水" class="scene-img"/>
      </div>
      <div class="text-side">
        <p>铁水从炉口流出来，红得发亮，像岩浆。</p>
        <div class="clickable-text" onclick="collectNode('铁水', '感', this)">
          <span class="pulse-dot"></span>
          <span>爹稳稳接住，倒进<strong>某种容器</strong>。</span>
        </div>
      </div>
    </div>
    <div class="mini-choice">
      <p>这是什么容器？</p>
      <div class="mini-options">
        <button onclick="selectMiniChoice(this, '陶罐', false)">陶罐</button>
        <button onclick="selectMiniChoice(this, '坩埚', true)">坩埚</button>
        <button onclick="selectMiniChoice(this, '铁锅', false)">铁锅</button>
      </div>
      <div class="mini-result" id="mini-result-1"></div>
    </div>
    <button class="nav-btn" id="btn-page3" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第5页：铁渣 -->
<div class="page" id="page-4">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">矿山与炉火</h3>
    </div>
    <div class="text-block">
      <p>作坊院子里永远堆着两堆东西：</p>
      <div class="item-row">
        <div class="clickable-item" onclick="collectNode('铁渣', '感', this)">
          <span class="pulse-dot"></span>
          <span>黑色的<strong>铁渣</strong></span>
        </div>
        <span>和</span>
        <div class="clickable-item" onclick="collectRelic('坩埚残片', this)">
          <span class="pulse-dot"></span>
          <span>碎裂的<strong>陶片</strong></span>
        </div>
      </div>
      <p class="sub-text">前者是矿石的骸骨，后者是容器的尸体。</p>
    </div>
    <div class="scene-wide">
      <div class="scene-placeholder wide"><span>铁渣堆</span></div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第6页：冶铁遗址 -->
<div class="page" id="page-5">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">矿山与炉火</h3>
    </div>
    <div class="reveal-card" onclick="revealText(this)">
      <div class="reveal-front">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>两千年后</span>
      </div>
      <div class="reveal-back">
        <p>考古的人挖开这片山，指着炉渣、陶范、红褐色的铁块，兴奋地说：</p>
        <div class="highlight-text" onclick="collectRelic('战国冶铁炉遗址', this)">
          <span class="pulse-dot"></span>
          <strong>"战国冶铁遗址！"</strong>
        </div>
        <p class="aside">冶辛要是知道，大概会指着那些铁渣说："哦，那是我们倒掉的。"</p>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第7页：铁器与农田 -->
<div class="page" id="page-6">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">铁器与农田</h3>
    </div>
    <div class="scene-with-text">
      <div class="text-side">
        <p>十五岁那年，来作坊的农人越来越多。</p>
        <p>秦赵两国正在打仗，农人急着翻地、收成。</p>
      </div>
      <div class="scene-side">
        <div class="scene-placeholder"><span>农田</span></div>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第8页：老农 -->
<div class="page" id="page-7">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">铁器与农田</h3>
    </div>
    <div class="dialogue-box">
      <div class="dialogue-avatar farmer"></div>
      <div class="dialogue-content">
        <span class="speaker">老农</span>
        <p>"地太硬，木犁扛不住。"</p>
        <div class="clickable-text inline" onclick="collectRelic('铁犁铧', this)">
          <span class="pulse-dot"></span>
          <strong>"铁犁能翻半尺深。"</strong>
        </div>
      </div>
    </div>
    <div class="mini-choice">
      <p>用铁犁的效率是木犁的几倍？</p>
      <div class="mini-options">
        <button onclick="selectMiniChoice2(this, '相同', false)">相同</button>
        <button onclick="selectMiniChoice2(this, '两倍', true)">两倍</button>
        <button onclick="selectMiniChoice2(this, '三倍', false)">三倍</button>
      </div>
      <div class="mini-result" id="mini-result-2"></div>
    </div>
    <button class="nav-btn" id="btn-page7" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第9页：农业革命 -->
<div class="page" id="page-8">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">铁器与农田</h3>
    </div>
    <div class="text-block">
      <p>一亩地用木犁，两个人一天翻一亩；</p>
      <div class="compare-row">
        <div class="compare-item">
          <span class="num">2人</span>
          <span class="unit">木犁</span>
        </div>
        <div class="compare-arrow">→</div>
        <div class="compare-item highlight">
          <span class="num">1人</span>
          <span class="unit">铁犁</span>
        </div>
      </div>
      <p class="aside">两千年后的人管这叫"农业革命"。</p>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第10页：战争的影子 -->
<div class="page" id="page-9">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">战争的影子</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <div class="scene-placeholder"><span>秦军</span></div>
      </div>
      <div class="text-side">
        <p>十八岁。作坊来个穿皮甲的军官。</p>
        <div class="quote-box">"百套兵器，月底交货。"</div>
        <p>做犁要韧，做剑要硬。炉火得改配方。</p>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第11页：箭镞 -->
<div class="page" id="page-10">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">战争的影子</h3>
    </div>
    <div class="text-block">
      <p>最忙的时候，作坊像个军营。</p>
      <p>士兵把成捆的矛、成袋的箭头往肩上一扛。</p>
      <p>冶辛数过，一个箭袋五十支，一个士兵背四袋。</p>
    </div>
    <div class="artifact-showcase" onclick="collectNode('箭镞', '感', this); collectRelic('三棱铁箭镞', this);">
      <div class="artifact-visual">
        <div class="scene-placeholder small"><span>箭镞</span></div>
      </div>
      <div class="artifact-info">
        <span class="pulse-dot"></span>
        <p>最后一批货：<strong>三棱箭镞</strong></p>
        <p class="sub">能射穿皮甲的小东西</p>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第12页：结尾 -->
<div class="page" id="page-11">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">尾声</h3>
    </div>
    <div class="ending-text">
      <p>后来她听说，那年<strong>长平之战</strong>，赵国输了四十万人。</p>
      <p>她坐在炉子边，想着那些铁器去了哪里，</p>
      <p>是不是和骨头一起锈成了土。</p>
      <div class="divider"></div>
      <p class="final">我做了一辈子的铁。</p>
      <p class="final">知道每块铁的来处，</p>
      <p class="final">却永远猜不到它们的归途。</p>
    </div>
    <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
  </div>
</div>

<!-- 第13页：总结 -->
<div class="page summary-page" id="page-12">
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
function selectOre(el, isCorrect) {
  document.querySelectorAll('.choice-card').forEach(function(c) {
    c.classList.remove('correct', 'wrong');
  });
  if (isCorrect) {
    el.classList.add('correct');
    document.getElementById('ore-feedback').textContent = '正确！铁矿石比废石沉。';
    document.getElementById('btn-page2').disabled = false;
  } else {
    el.classList.add('wrong');
    document.getElementById('ore-feedback').textContent = '不对，废石比较轻。';
  }
}

function selectMiniChoice(el, answer, isCorrect) {
  var parent = el.parentElement;
  parent.querySelectorAll('button').forEach(function(b) {
    b.classList.remove('correct', 'wrong');
  });
  var result = document.getElementById('mini-result-1');
  if (isCorrect) {
    el.classList.add('correct');
    result.textContent = '坩埚是一种用耐火土烧制的厚壁陶罐。';
    result.classList.add('show');
    StoryApp.collectRelic('坩埚残片');
    document.getElementById('btn-page3').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '不对，再想想。';
    result.classList.add('show');
  }
}

function selectMiniChoice2(el, answer, isCorrect) {
  var parent = el.parentElement;
  parent.querySelectorAll('button').forEach(function(b) {
    b.classList.remove('correct', 'wrong');
  });
  var result = document.getElementById('mini-result-2');
  if (isCorrect) {
    el.classList.add('correct');
    result.textContent = '一亩地用木犁，两个人一天翻一亩；用铁犁，一个人一天翻两亩。';
    result.classList.add('show');
    document.getElementById('btn-page7').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '再算算看。';
    result.classList.add('show');
  }
}

function revealText(el) {
  el.classList.add('revealed');
}
</script>