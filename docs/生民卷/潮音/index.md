---
layout: story
title: 潮音
---

<!-- 第1页：介绍 -->
<div class="page" id="page-0">
  <div class="intro-layout">
    <div class="intro-left">
      <h1 class="char-name">潮音篇</h1>
      <p class="char-era">五代十国 · 吴越运河船家</p>
      <div class="char-bio">
        <p>生于杭州湾，世代船户。掌船三十年，从江南运河到钱塘江，运送粮草、丝绸和官家文书。她熟悉每一条水道，每一个码头。</p>
      </div>
      <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
    </div>      
    <div class="intro-right">
      <div class="scene-placeholder"><span>运河船只</span></div>
    </div>
  </div>
</div>

<!-- 第2页：运河 -->
<div class="page" id="page-1" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">漕运水道</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <div class="scene-placeholder"><span>江南运河</span></div>
        <div class="interact-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
          <span>点击场景中的光点</span>
        </div>
      </div>
      <div class="text-side">
        <p>潮音生在船上，长在船上。</p>
        <p>她熟悉<strong>江南运河</strong>的每一个弯道，知道哪里水浅、哪里有暗礁。</p>
        <div class="clickable-text" onclick="collectNode('运河', '旅', this)">
          <span class="pulse-dot"></span>
          <span>这条水道连接着吴越国的命脉。</span>
        </div>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第3页：漕运 -->
<div class="page" id="page-2" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">漕运水道</h3>
    </div>
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">父亲</span>
        <p>"漕运是国家的命脉，咱们船户就是命脉里的血。"</p>
      </div>
    </div>
    <div class="text-block">
      <p>吴越国虽小，但依靠<strong>漕运</strong>，富甲一方。</p>
      <p>潮音的船队每年要运送数十万石粮食到京城。</p>
      <div class="clickable-text" onclick="collectNode('漕运', '旅', this)">
        <span class="pulse-dot"></span>
        <span>这是吴越国能在乱世中存活的秘密。</span>
      </div>
    </div>
    
    <div class="mini-choice">
      <p>漕运主要运送什么货物？</p>
      <div class="mini-options">
        <button onclick="selectMiniChoice(this, '丝绸', false)">丝绸</button>
        <button onclick="selectMiniChoice(this, '粮食', true)">粮食</button>
        <button onclick="selectMiniChoice(this, '茶叶', false)">茶叶</button>
      </div>
      <div class="mini-result" id="mini-result-1"></div>
    </div>
    
    <button class="nav-btn" id="btn-page2" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第4页：船桨 -->
<div class="page" id="page-3" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">漕运水道</h3>
    </div>
    <div class="text-block">
      <p>潮音八岁开始学划船，十二岁就能独自掌舵。</p>
      <p>她的双手长满老茧，但能在风浪中稳稳握住<strong>船桨</strong>。</p>
    </div>
    <div class="scene-wide">
      <div class="scene-placeholder wide"><span>划船</span></div>
    </div>
    <div class="clickable-text" onclick="collectNode('船桨', '旅', this)">
      <span class="pulse-dot"></span>
      <span>船桨就是船户的命，磨坏了要立刻换新。</span>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第5页：码头 -->
<div class="page" id="page-4" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">江南码头</h3>
    </div>
    <div class="scene-with-text">
      <div class="text-side">
        <p>从杭州到苏州，从苏州到扬州，每一个<strong>码头</strong>都是一个世界。</p>
        <p>潮音认识每一个码头的管事，知道哪家的酒最醇、哪家的菜最实惠。</p>
        <div class="clickable-text" onclick="collectNode('码头', '旅', this)">
          <span class="pulse-dot"></span>
          <span>码头是船户的家，也是信息的集散地。</span>
        </div>
      </div>
      <div class="scene-side">
        <div class="scene-placeholder"><span>码头</span></div>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第6页：江南 -->
<div class="page" id="page-5" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">江南码头</h3>
    </div>
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">老船夫</span>
        <p>"江南好，风景旧曾谙。可咱们船户，哪有闲心看风景？"</p>
      </div>
    </div>
    <div class="text-block">
      <div class="clickable-text" onclick="collectNode('江南', '旅', this)">
        <span class="pulse-dot"></span>
        <span><strong>江南</strong>的富庶，离不开运河的滋养。</span>
      </div>
      <p>潮音常常想，如果没有这些船，江南还会这么繁华吗？</p>
    </div>
    
    <div class="interaction-area">
      <p class="instruction">江南运河连接的是哪两大水系？</p>
      <div class="choice-cards">
        <div class="choice-card" onclick="selectChoice(this, '长江黄河', false)">
          <div class="card-icon river"></div>
          <span>长江黄河</span>
        </div>
        <div class="choice-card" onclick="selectChoice(this, '长江钱塘江', true)">
          <div class="card-icon water"></div>
          <span>长江钱塘江</span>
        </div>
      </div>
      <div class="feedback" id="choice-feedback"></div>
    </div>
    
    <button class="nav-btn" id="btn-page5" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第7页：水文 -->
<div class="page" id="page-6" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">江南码头</h3>
    </div>
    <div class="reveal-card" onclick="revealText(this)">
      <div class="reveal-front">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>吴越治水</span>
      </div>
      <div class="reveal-back">
        <p>吴越国王钱镠重视水利，在运河沿线修建了许多水闸和纤道。</p>
        <div class="highlight-text" onclick="collectRelic('水文碑', this)">
          <span class="pulse-dot"></span>
          <strong>水文碑</strong>上刻着历年水位，是船户的宝贝。
        </div>
        <p class="aside">潮音每次经过，都要看看今年的水情。</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第8页：船锚 -->
<div class="page" id="page-7" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">船家器物</h3>
    </div>
    
    <div class="scene-with-text">
      <div class="scene-side">
        <div class="scene-placeholder"><span>船锚</span></div>
      </div>
      <div class="text-side">
        <p>潮音的船上有三件宝：<strong>船锚</strong>、罗盘、缆绳。</p>
        <p>船锚是铁铸的，重五十斤，能稳住船身不被水流冲走。</p>
        <div class="clickable-text" onclick="collectRelic('船锚', this)">
          <span class="pulse-dot"></span>
          <span>这是父亲传下来的老物件。</span>
        </div>
      </div>
    </div>
    
    <div class="clickable-text" onclick="collectRelic('漕船模型', this)">
      <span class="pulse-dot"></span>
      <span>她还有一个小小<strong>船模</strong>，是儿子给她刻的。</span>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第9页：青瓷 -->
<div class="page" id="page-8" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">船家器物</h3>
    </div>
    <div class="text-block">
      <p>潮音的船上还常备一套<strong>青瓷碗</strong>。</p>
      <p>这是越窑的瓷器，轻薄如纸，敲击有声如磬。</p>
    </div>
    <div class="scene-wide">
      <div class="scene-placeholder wide"><span>青瓷</span></div>
    </div>
    <div class="clickable-text" onclick="collectRelic('青瓷碗', this)">
      <span class="pulse-dot"></span>
      <span>这是吴越国的特产，也是潮音最骄傲的家当。</span>
    </div>
    
    <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
  </div>
</div>

<!-- 第10页：总结 -->
<div class="page" id="page-9" style="display:none">
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

<!-- 底部收集工具栏 -->
<div class="bottom-toolbar">
  <div class="toolbar-content">
    <span class="toolbar-label">探索收获</span>
    <button class="toolbar-btn" onclick="toggleCollectionPanel()">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
      <span class="toolbar-badge" id="collection-badge">0</span>
    </button>
  </div>
</div>

<!-- 收集品面板 -->
<div class="collection-panel" id="collectionPanel">
  <div class="panel-header">
    <h4>探索收获</h4>
    <button onclick="toggleCollectionPanel()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
  <div class="panel-body">
    <div class="panel-section">
      <h5>主题节点</h5>
      <div class="panel-grid" id="panel-nodes"></div>
    </div>
    
    <div class="panel-section">
      <h5>历史文物</h5>
      <div class="panel-grid" id="panel-relics"></div>
    </div>
  </div>
</div>

<!-- 页面指示器 -->
<div class="page-dots">
  <span class="dot active" onclick="showPage(0)"></span>
  <span class="dot" onclick="if(isPageUnlocked(1)) showPage(1)"></span>
  <span class="dot" onclick="if(isPageUnlocked(2)) showPage(2)"></span>
  <span class="dot" onclick="if(isPageUnlocked(3)) showPage(3)"></span>
  <span class="dot" onclick="if(isPageUnlocked(4)) showPage(4)"></span>
  <span class="dot" onclick="if(isPageUnlocked(5)) showPage(5)"></span>
  <span class="dot" onclick="if(isPageUnlocked(6)) showPage(6)"></span>
  <span class="dot" onclick="if(isPageUnlocked(7)) showPage(7)"></span>
  <span class="dot" onclick="if(isPageUnlocked(8)) showPage(8)"></span>
  <span class="dot final" onclick="if(isPageUnlocked(9)) showPage(9)"></span>
</div>

<script>
var currentPage = 0;
var totalPages = 10;
var collections = { nodes: {}, relics: {} };
var unlockedPages = [0];

function showPage(pageNum) {
  for (var i = 0; i < totalPages; i++) {
    var page = document.getElementById('page-' + i);
    if (page) page.style.display = 'none';
  }
  var target = document.getElementById('page-' + pageNum);
  if (target) target.style.display = 'block';
  currentPage = pageNum;
  
  var dots = document.querySelectorAll('.dot');
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.toggle('active', i === pageNum);
  }
  
  if (!unlockedPages.includes(pageNum)) {
    unlockedPages.push(pageNum);
  }
  
  window.scrollTo(0, 0);
}

function isPageUnlocked(pageNum) {
  return unlockedPages.includes(pageNum);
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    showPage(currentPage + 1);
  }
}

function showSummary() {
  showPage(9);
  updateSummary();
}

function updateSummary() {
  document.getElementById('summary-node-count').textContent = Object.keys(collections.nodes).length;
  document.getElementById('summary-relic-count').textContent = Object.keys(collections.relics).length;
  
  var nodesList = document.getElementById('summary-nodes');
  var allNodes = ['运河', '漕运', '船桨', '码头', '江南'];
  nodesList.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="item ' + collected + '" data-node="' + n + '" data-theme="' + (collections.nodes[n]?.theme || '旅') + '" onclick="collectFromSummary(this, \'' + n + '\')">' + n + '</span>';
  }).join('');
  
  var relicsList = document.getElementById('summary-relics');
  var allRelics = ['船锚', '漕船模型', '水文碑', '青瓷碗'];
  relicsList.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="item ' + collected + '" data-relic="' + r + '" onclick="collectRelicFromSummary(this, \'' + r + '\')">' + r + '</span>';
  }).join('');
}

function collectNode(nodeName, theme, el) {
  if (!collections.nodes[nodeName]) {
    collections.nodes[nodeName] = { theme: theme };
    if (el) el.classList.add('collected');
    showToast('已点亮节点：' + nodeName);
    updateCollectionPanel();
    updateBadge();
  }
}

function collectRelic(relicName, el) {
  if (!collections.relics[relicName]) {
    collections.relics[relicName] = true;
    if (el) el.classList.add('collected');
    showToast('已收集文物：' + relicName);
    updateCollectionPanel();
    updateBadge();
  }
}

function collectFromSummary(el, nodeName) {
  if (!collections.nodes[nodeName]) {
    collectNode(nodeName, '旅', el);
    updateSummary();
  }
}

function collectRelicFromSummary(el, relicName) {
  if (!collections.relics[relicName]) {
    collectRelic(relicName, el);
    updateSummary();
  }
}

function selectChoice(el, answer, isCorrect) {
  document.querySelectorAll('.choice-card').forEach(function(c) {
    c.classList.remove('correct', 'wrong');
  });
  
  if (isCorrect) {
    el.classList.add('correct');
    document.getElementById('choice-feedback').textContent = '正确！江南运河连接长江和钱塘江。';
    document.getElementById('btn-page5').disabled = false;
  } else {
    el.classList.add('wrong');
    document.getElementById('choice-feedback').textContent = '不对，再想想。';
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
    result.textContent = '漕运主要运送粮食，供应京城和军队。';
    result.classList.add('show');
    document.getElementById('btn-page2').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '不对，再想想。';
    result.classList.add('show');
  }
}

function revealText(el) {
  el.classList.add('revealed');
}

function toggleCollectionPanel() {
  document.getElementById('collectionPanel').classList.toggle('active');
}

function updateCollectionPanel() {
  var nodesGrid = document.getElementById('panel-nodes');
  var allNodes = ['运河', '漕运', '船桨', '码头', '江南'];
  nodesGrid.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectNode(\'' + n + '\', \'旅\', this)">' + n + '</span>';
  }).join('');
  
  var relicsGrid = document.getElementById('panel-relics');
  var allRelics = ['船锚', '漕船模型', '水文碑', '青瓷碗'];
  relicsGrid.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectRelic(\'' + r + '\', this)">' + r + '</span>';
  }).join('');
}

function updateBadge() {
  var count = Object.keys(collections.nodes).length + Object.keys(collections.relics).length;
  document.getElementById('collection-badge').textContent = count;
}

function restart() {
  currentPage = 0;
  collections = { nodes: {}, relics: {} };
  unlockedPages = [0];
  document.querySelectorAll('.collected').forEach(function(el) {
    el.classList.remove('collected');
  });
  document.querySelectorAll('.revealed').forEach(function(el) {
    el.classList.remove('revealed');
  });
  document.querySelectorAll('.correct, .wrong').forEach(function(el) {
    el.classList.remove('correct', 'wrong');
  });
  document.querySelectorAll('.mini-result').forEach(function(el) {
    el.classList.remove('show');
    el.textContent = '';
  });
  document.querySelectorAll('.nav-btn').forEach(function(el) {
    if (el.id && el.id.startsWith('btn-page')) {
      el.disabled = true;
    }
  });
  updateBadge();
  updateCollectionPanel();
  showPage(0);
}

function exportProgress() {
  alert('分享功能开发中');
}

function showToast(msg) {
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(function() { toast.remove(); }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
  showPage(0);
  updateCollectionPanel();
});
</script>
