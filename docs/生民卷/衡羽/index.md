---
layout: story
title: 衡羽
---

<!-- 第1页：介绍 -->
<div class="page" id="page-0">
  <div class="intro-layout">
    <div class="intro-left">
      <h1 class="char-name">衡羽篇</h1>
      <p class="char-era">秦 · 咸阳驿舍管事</p>
      <div class="char-bio">
        <p>前241年生于咸阳，时年25岁。负责驿舍食宿、换马与接待官吏的驿站管事，见证了帝国驰道纵横、文书往来的繁华，也经历了秦末动乱中驿站系统的崩溃。</p>
      </div>
      <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
    </div>      
    <div class="intro-right">
      <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="衡羽" class="scene-img"/>
    </div>
  </div>
</div>

<!-- 第2页：咸阳驿站 -->
<div class="page" id="page-1" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">咸阳驿站</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="驿站" class="scene-img"/>
        <div class="interact-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
          <span>点击场景中的光点</span>
        </div>
      </div>
      <div class="text-side">
        <p>咸阳城东十五里，有一座</p>
        <div class="clickable-text" onclick="collectNode('驿舍', '旅', this)">
          <span class="pulse-dot"></span>
          <span><strong>驿舍</strong></span>
        </div>
        <p>每天迎来送往，有送军报的骑兵，有赴任的官员，也有商队和旅人。</p>
        <p>衡羽负责登记、安排食宿、更换马匹。</p>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第3页：咸阳城 -->
<div class="page" id="page-2" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">咸阳驿站</h3>
    </div>
    <div class="text-block">
      <p>衡羽生在</p>
      <div class="clickable-text inline" onclick="collectNode('咸阳', '旅', this)">
        <span class="pulse-dot"></span>
        <span><strong>咸阳</strong></span>
      </div>
      <p>长在咸阳，这辈子没离开过方圆百里。</p>
      <p>但他见过天下。每天都有人从四面八方来，带来各地的消息。</p>
      <p>"楚地水灾"、"赵边战事"、"齐地盐价"……衡羽在登记簿上一一记下。</p>
    </div>
    
    <div class="dialogue-box">
      <div class="dialogue-avatar traveler"></div>
      <div class="dialogue-content">
        <span class="speaker">旅人</span>
        <p>"从邯郸来，走了十天。这驰道真好走，比以前的山路强多了。"</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第4页：驰道 -->
<div class="page" id="page-3" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">驰道纵横</h3>
    </div>
    <div class="scene-with-text">
      <div class="text-side">
        <p>秦始皇统一后，修建了从咸阳通往各地的</p>
        <div class="clickable-text" onclick="collectNode('驰道', '旅', this)">
          <span class="pulse-dot"></span>
          <span><strong>驰道</strong></span>
        </div>
        <p>宽五十步，路基夯得坚实，两旁种着青松。</p>
        <p>驿舍就设在驰道旁，每隔三十里一座，像一串珠子连起帝国。</p>
      </div>
      <div class="scene-side">
        <div class="scene-placeholder"><span>驰道</span></div>
      </div>
    </div>
    
    <div class="interaction-area">
      <p class="instruction">驿站每隔多少里设置一座？</p>
      <div class="choice-cards">
        <div class="choice-card" onclick="selectAnswer(this, '十里', false)">
          <span>十里</span>
        </div>
        <div class="choice-card" onclick="selectAnswer(this, '三十里', true)">
          <span>三十里</span>
        </div>
        <div class="choice-card" onclick="selectAnswer(this, '五十里', false)">
          <span>五十里</span>
        </div>
      </div>
      <div class="feedback" id="answer-feedback"></div>
    </div>
    
    <div class="item-row">
      <div class="clickable-item" onclick="collectRelic('驿站印信', this)">
        <span class="pulse-dot"></span>
        <span><strong>驿站印信</strong></span>
      </div>
      <span>——验证公文真伪的凭证</span>
    </div>
    
    <button class="nav-btn" id="btn-page3" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第5页：文书 -->
<div class="page" id="page-4" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">文书往来</h3>
    </div>
    
    <div class="text-block">
      <p>驿站最重要的任务，是传递</p>
      <div class="clickable-text inline" onclick="collectNode('文书', '旅', this)">
        <span class="pulse-dot"></span>
        <span><strong>文书</strong></span>
      </div>
      <p>军情急报、皇帝诏书、地方奏章……都在驿路上飞驰。</p>
      <p>"最急的时候，一天要换八匹马。"衡羽说，"信使跑到驿站，从马背上跳下来，嘴里还喊着'八百里加急'，人就晕过去了。"</p>
    </div>
    
    <div class="reveal-card" onclick="revealText(this)">
      <div class="reveal-front">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M8 12h8M12 8v8"/>
        </svg>
        <span>查看秦简</span>
      </div>
      <div class="reveal-back">
        <div class="highlight-text" onclick="collectRelic('秦简', this)">
          <span class="pulse-dot"></span>
          <strong>秦简文书</strong>
        </div>
        <p>竹简上记录着驿站的日常：某月某日，收信几封，发信几封，用马几匹，食粟几石。</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第6页：商贾 -->
<div class="page" id="page-5" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">04</span>
      <h3 class="chapter-title">商贾云集</h3>
    </div>
    
    <div class="dialogue-box">
      <div class="dialogue-avatar merchant"></div>
      <div class="dialogue-content">
        <span class="speaker">商人</span>
        <div class="clickable-text inline" onclick="collectNode('行商', '旅', this)">
          <span class="pulse-dot"></span>
          <strong>"从临淄来，贩丝绸。这驰道修得好，生意好做多了。"</strong>
        </div>
      </div>
    </div>
    
    <div class="scene-with-text">
      <div class="scene-side">
        <div class="scene-placeholder"><span>商队</span></div>
      </div>
      <div class="text-side">
        <p>除了官差，最多的就是商人。</p>
        <p>齐地的盐、楚地的漆、赵地的铁、燕地的鱼……都在驿路上流转。</p>
        <p>衡羽见多了，一听口音就知道是哪里人。</p>
      </div>
    </div>
    
    <div class="artifact-showcase" onclick="collectRelic('铜车马构件', this)">
      <div class="artifact-visual">
        <div class="scene-placeholder small"><span>车马</span></div>
      </div>
      <div class="artifact-info">
        <span class="pulse-dot"></span>
        <p>驿站出土的<strong>铜车马构件</strong></p>
        <p class="sub">帝国交通的见证</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第7页：度量衡 -->
<div class="page" id="page-6" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">04</span>
      <h3 class="chapter-title">商贾云集</h3>
    </div>
    
    <div class="text-block">
      <p>秦始皇统一了度量衡，衡羽的驿站里挂着标准的尺、斗、秤。</p>
      <p>"以前六国各有各的规矩，做生意麻烦。现在好了，一尺就是一尺，一升就是一升。"</p>
    </div>
    
    <div class="mini-choice">
      <p>秦始皇统一的度量衡中，"衡"指的是什么？</p>
      <div class="mini-options">
        <button onclick="selectMiniChoice(this, '长度', false)">长度</button>
        <button onclick="selectMiniChoice(this, '容量', false)">容量</button>
        <button onclick="selectMiniChoice(this, '重量', true)">重量</button>
      </div>
      <div class="mini-result" id="mini-result-1"></div>
    </div>
    
    <div class="item-row">
      <div class="clickable-item" onclick="collectRelic('度量衡器', this)">
        <span class="pulse-dot"></span>
        <span><strong>秦权度量衡器</strong></span>
      </div>
    </div>
    
    <button class="nav-btn" id="btn-page6" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第8页：帝国余晖 -->
<div class="page" id="page-7" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">05</span>
      <h3 class="chapter-title">帝国余晖</h3>
    </div>
    
    <div class="text-block">
      <p>公元前210年，秦始皇驾崩。消息传到驿站时，衡羽正在登记一匹马。</p>
      <p>"那天之后，驿路上的信使越来越少。"</p>
      <p>陈胜吴广起义，天下大乱。驰道上不再跑的是信使，而是逃难的人群。</p>
    </div>
    
    <div class="ending-text">
      <div class="divider"></div>
      <p class="final">我在驿站待了十五年。</p>
      <p class="final">见过帝国的繁华，也见过它的崩塌。</p>
      <p class="final">那些来来往往的人，那些飞驰而过的马，</p>
      <p class="final">都成了历史里的尘埃。</p>
    </div>
    
    <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
  </div>
</div>

<!-- 第9页：总结 -->
<div class="page" id="page-8" style="display:none">
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
</div>

<script>
// 页面管理
var currentPage = 0;
var totalPages = 9;
var unlockedPages = [0];
var collections = { nodes: {}, relics: {} };

function showPage(n) {
  if (!unlockedPages.includes(n)) return;
  
  document.querySelectorAll('.page').forEach(function(page, i) {
    page.style.display = i === n ? 'block' : 'none';
  });
  
  document.querySelectorAll('.dot').forEach(function(dot, i) {
    dot.classList.toggle('active', i === n);
  });
  
  currentPage = n;
  window.scrollTo(0, 0);
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    unlockedPages.push(currentPage + 1);
    showPage(currentPage + 1);
  }
}

function isPageUnlocked(n) {
  return unlockedPages.includes(n);
}

// 收集功能
function collectNode(nodeName, theme, el) {
  if (!collections.nodes[nodeName]) {
    collections.nodes[nodeName] = { theme: theme };
    if (el) el.classList.add('collected');
    updateBadge();
    updateCollectionPanel();
    showToast('收集节点：' + nodeName);
  }
}

function collectRelic(relicName, el) {
  if (!collections.relics[relicName]) {
    collections.relics[relicName] = true;
    if (el) el.classList.add('collected');
    updateBadge();
    updateCollectionPanel();
    showToast('收集文物：' + relicName);
  }
}

function updateBadge() {
  var count = Object.keys(collections.nodes).length + Object.keys(collections.relics).length;
  document.getElementById('collection-badge').textContent = count;
}

function toggleCollectionPanel() {
  document.getElementById('collectionPanel').classList.toggle('active');
}

function updateCollectionPanel() {
  var nodesGrid = document.getElementById('panel-nodes');
  var allNodes = ['驿舍', '咸阳', '驰道', '文书', '行商'];
  nodesGrid.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectNode(\'' + n + '\', \'旅\', this)">' + n + '</span>';
  }).join('');
  
  var relicsGrid = document.getElementById('panel-relics');
  var allRelics = ['驿站印信', '秦简', '铜车马构件', '度量衡器'];
  relicsGrid.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="panel-item ' + collected + '" onclick="collectRelic(\'' + r + '\', this)">' + r + '</span>';
  }).join('');
}

// 选择功能
function selectAnswer(el, answer, isCorrect) {
  var parent = el.parentElement;
  parent.querySelectorAll('.choice-card').forEach(function(card) {
    card.classList.remove('correct', 'wrong');
  });
  
  var feedback = document.getElementById('answer-feedback');
  
  if (isCorrect) {
    el.classList.add('correct');
    feedback.textContent = '正确！驿站每隔三十里一座。';
    document.getElementById('btn-page3').disabled = false;
  } else {
    el.classList.add('wrong');
    feedback.textContent = '不对，再想想。';
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
    result.textContent = '"衡"指重量，"量"指容量，"度"指长度。秦始皇统一了这三个标准。';
    result.classList.add('show');
    document.getElementById('btn-page6').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '再想想看。';
    result.classList.add('show');
  }
}

function revealText(el) {
  el.classList.add('revealed');
}

function showSummary() {
  var nodeCount = Object.keys(collections.nodes).length;
  var relicCount = Object.keys(collections.relics).length;
  
  document.getElementById('summary-node-count').textContent = nodeCount;
  document.getElementById('summary-relic-count').textContent = relicCount;
  
  var nodesList = document.getElementById('summary-nodes');
  var allNodes = ['驿舍', '咸阳', '驰道', '文书', '行商'];
  nodesList.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="item ' + collected + '">' + n + '</span>';
  }).join('');
  
  var relicsList = document.getElementById('summary-relics');
  var allRelics = ['驿站印信', '秦简', '铜车马构件', '度量衡器'];
  relicsList.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="item ' + collected + '">' + r + '</span>';
  }).join('');
  
  unlockedPages.push(8);
  showPage(8);
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
