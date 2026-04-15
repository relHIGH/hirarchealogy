---
layout: story
title: 细封简兰
total_pages: 8
nodes:
  - name: 西夏
    theme: 感
  - name: 黑水城
    theme: 感
  - name: 文书
    theme: 感
  - name: 西夏文
    theme: 感
  - name: 汉文
    theme: 感
  - name: 额济纳
    theme: 感
  - name: 回鹘
    theme: 感
  - name: 吐蕃
    theme: 感
  - name: 蒙古
    theme: 感
relics:
  - 西夏文木活字
  - 汉文文书
  - 藏文经卷
  - 铜印
---

<!-- 第1页：介绍 -->
<div class="page" id="page-0">
  <div class="intro-layout">
    <div class="intro-left">
      <h1 class="char-name">细封简兰篇</h1>
      <p class="char-era">西夏 · 黑水城文书吏</p>
      <div class="char-bio">
        <p>任职于西夏黑水城，这座沙漠中的军镇是丝绸之路北道的要冲。她精通西夏文和汉文，负责抄写文书、管理档案，在多元文化交汇之地见证了西夏的兴衰。</p>
      </div>
      <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
    </div>      
    <div class="intro-right">
      <img src="{{ site.baseurl }}/assets/images/scenes/墨岚.png" alt="细封简兰" class="scene-img"/>
    </div>
  </div>
</div>

<!-- 第2页：黑水城 -->
<div class="page" id="page-1">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">黑城岁月</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <img src="{{ site.baseurl }}/assets/images/scenes/墨岚.png" alt="黑水城" class="scene-img"/>
      </div>
      <div class="text-side">
        <p>细封简兰任职于
        <div class="clickable-text inline" onclick="collectNode('西夏', '感', this)">
          <span class="pulse-dot"></span>
          <span><strong>西夏</strong></span>
        </div>
        国
        <div class="clickable-text inline" onclick="collectNode('黑水城', '感', this)">
          <span class="pulse-dot"></span>
          <span><strong>黑水城</strong></span>
        </div>
        ，这座沙漠中的军镇是丝绸之路北道的要冲。</p>
        <p>城池建于西夏贞观年间，城墙用黄土夯筑，历经风沙侵蚀，依然屹立不倒。</p>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第3页：文书 -->
<div class="page" id="page-2">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">黑城岁月</h3>
    </div>
    
    <div class="text-block">
      <p>简兰的工作是抄写
      <div class="clickable-text inline" onclick="collectNode('文书', '感', this)">
        <span class="pulse-dot"></span>
        <span><strong>文书</strong></span>
      </div>
      、管理档案。</p>
      <p>她精通
      <div class="clickable-text inline" onclick="collectNode('西夏文', '感', this)">
        <span class="pulse-dot"></span>
        <span><strong>西夏文</strong></span>
      </div>
      和
      <div class="clickable-text inline" onclick="collectNode('汉文', '感', this)">
        <span class="pulse-dot"></span>
        <span><strong>汉文</strong></span>
      </div>
      ，能用两种文字记录政令、翻译典籍。</p>
      <p>每当节庆，她便用茶和酒招待来访的客商，听他们讲述远方的故事。</p>
    </div>
    
    <div class="artifact-showcase" onclick="collectRelic('西夏文木活字', this)">
      <div class="artifact-visual">
        <div class="scene-placeholder small"><span>木活字</span></div>
      </div>
      <div class="artifact-info">
        <span class="pulse-dot"></span>
        <p>简兰使用的<strong>西夏文木活字</strong></p>
        <p class="sub">世界上最早的木活字印刷实物之一</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第4页：丝路 -->
<div class="page" id="page-3">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">丝路交汇</h3>
    </div>
    
    <div class="scene-with-text">
      <div class="text-side">
        <p>黑水城地处
        <div class="clickable-text inline" onclick="collectNode('额济纳', '感', this)">
          <span class="pulse-dot"></span>
          <span><strong>额济纳</strong></span>
        </div>
        河畔，是丝路北道的枢纽。</p>
        <p>简兰见证了往来商队的繁华：
        <div class="clickable-text inline" onclick="collectNode('回鹘', '感', this)">
          <span class="pulse-dot"></span>
          <span><strong>回鹘</strong></span>
        </div>
        商人、
        <div class="clickable-text inline" onclick="collectNode('吐蕃', '感', this)">
          <span class="pulse-dot"></span>
          <span><strong>吐蕃</strong></span>
        </div>
        使节、
        <div class="clickable-text inline" onclick="collectNode('蒙古', '感', this)">
          <span class="pulse-dot"></span>
          <span><strong>蒙古</strong></span>
        </div>
        驼队，都在此停留。</p>
      </div>
      <div class="scene-side">
        <div class="scene-placeholder"><span>丝路</span></div>
      </div>
    </div>
    
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">回鹘商人</span>
        <p>"从撒马尔罕来，带了宝石和香料。这里的东西比中原便宜三成。"</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第5页：佛经 -->
<div class="page" id="page-4">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">丝路交汇</h3>
    </div>
    
    <div class="text-block">
      <p>西夏国信奉佛教，黑水城有许多寺庙。简兰在抄写佛经的过程中，融入了虔诚的信仰。</p>
      <p>夜深人静时，她常感叹人生如行路，每一程都有独特的境界。</p>
    </div>
    
    <div class="mini-choice">
      <p>西夏国主要信奉什么宗教？</p>
      <div class="mini-options">
        <button onclick="selectMiniChoice(this, '道教', false)">道教</button>
        <button onclick="selectMiniChoice(this, '佛教', true)">佛教</button>
        <button onclick="selectMiniChoice(this, '伊斯兰教', false)">伊斯兰教</button>
      </div>
      <div class="mini-result" id="mini-result-1"></div>
    </div>
    
    <div class="clickable-text" onclick="collectRelic('藏文经卷', this)">
      <span class="pulse-dot"></span>
      <span>简兰抄写的<strong>藏文经卷</strong></span>
    </div>
    
    <button class="nav-btn" id="btn-page4" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第6页：尘封 -->
<div class="page" id="page-5">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">尘封千年</h3>
    </div>
    
    <div class="text-block">
      <p>1227年，蒙古大军西征，黑水城被围困。</p>
      <p>简兰将重要文献封存在佛塔中，希望它们能够幸存。</p>
    </div>
    
    <div class="reveal-card" onclick="revealText(this)">
      <div class="reveal-front">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>考古发现</span>
      </div>
      <div class="reveal-back">
        <div class="highlight-text" onclick="collectRelic('汉文文书', this)">
          <span class="pulse-dot"></span>
          <strong>汉文文书档案</strong>
        </div>
        <p>1909年，俄国探险家科兹洛夫在黑水城发现了大量文献，包括简兰抄写的文书。这些文书后来成为研究西夏的珍贵史料。</p>
      </div>
    </div>
    
    <div class="clickable-text" onclick="collectRelic('铜印', this)">
      <span class="pulse-dot"></span>
      <span>出土的西夏<strong>铜印</strong></span>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第7页：尾声 -->
<div class="page" id="page-6">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">04</span>
      <h3 class="chapter-title">永恒的记忆</h3>
    </div>
    
    <div class="ending-text">
      <p>简兰消失在历史的尘埃中，她抄写的文书却保存了下来。</p>
      <p>那些泛黄的纸页上，记录着西夏人平凡而真实的生活。</p>
      <div class="divider"></div>
      <p class="final">她一生都在书写，</p>
      <p class="final">却不知自己也成为了历史的一部分。</p>
      <p class="final">文字比人长寿，</p>
      <p class="final">这是文书吏最大的安慰。</p>
    </div>
    
    <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
  </div>
</div>

<!-- 第8页：总结 -->
<div class="page summary-page" id="page-7">
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
  parent.querySelectorAll('button').forEach(function(b) { b.classList.remove('correct', 'wrong'); });
  var result = document.getElementById('mini-result-1');
  if (isCorrect) {
    el.classList.add('correct');
    result.textContent = '正确！西夏国信奉佛教，留下了大量佛经文献。';
    result.classList.add('show');
    document.getElementById('btn-page4').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '不对，再想想。';
    result.classList.add('show');
  }
}

function revealText(el) { el.classList.add('revealed'); }
</script>
