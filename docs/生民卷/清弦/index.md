---
layout: story
title: 柳边声
---

<!-- 第1页：介绍 -->
<div class="page" id="page-0">
  <div class="intro-layout">
    <div class="intro-left">
      <h1 class="char-name">柳边声篇</h1>
      <p class="char-era">宋 · 汴梁瓦舍艺人</p>
      <div class="char-bio">
        <p>汴梁瓦舍中的琵琶艺人。北宋的东京繁华冠绝天下，勾栏瓦舍夜夜笙歌。她的曲子讲述着市井故事，说书声与杂剧声交织在灯火阑珊处。</p>
      </div>
      <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
    </div>      
    <div class="intro-right">
      <img src="{{ site.baseurl }}/assets/images/scenes/清弦.png" alt="柳边声" class="scene-img"/>
    </div>
  </div>
</div>

<!-- 第2页：汴京梦华 -->
<div class="page" id="page-1" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">汴京梦华</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <img src="{{ site.baseurl }}/assets/images/scenes/清弦.png" alt="瓦舍" class="scene-img"/>
      </div>
      <div class="text-side">
        <p>清弦是
        <div class="clickable-text inline" onclick="collectNode('汴梁', '戏', this)">
          <span class="pulse-dot"></span>
          <span><strong>汴梁</strong></span>
        </div>
        <div class="clickable-text inline" onclick="collectNode('瓦舍', '戏', this)">
          <span class="pulse-dot"></span>
          <span><strong>瓦舍</strong></span>
        </div>
        中的艺人。</p>
        <p>北宋的东京城繁华冠绝天下，勾栏瓦舍夜夜笙歌，那是艺人最好的时代。</p>
        <p>清弦精通
        <div class="clickable-text inline" onclick="collectNode('琵琶', '戏', this)">
          <span class="pulse-dot"></span>
          <span><strong>琵琶</strong></span>
        </div>
        ，一曲《霓裳羽衣》能让满座宾客屏息凝神。</p>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第3页：勾栏 -->
<div class="page" id="page-2" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">汴京梦华</h3>
    </div>
    
    <div class="text-block">
      <p>瓦舍是宋代的城市娱乐中心，里面有
      <div class="clickable-text inline" onclick="collectNode('勾栏', '戏', this)">
        <span class="pulse-dot"></span>
        <span><strong>勾栏</strong></span>
      </div>
      、戏台、茶座。</p>
      <p>清弦每天在这里演出，她的听众有达官贵人，也有贩夫走卒。瓦舍不分贵贱，只要有钱买门票，谁都能进来听曲。</p>
    </div>
    
    <div class="artifact-showcase" onclick="collectRelic('琵琶', this)">
      <div class="artifact-visual">
        <div class="scene-placeholder small"><span>琵琶</span></div>
      </div>
      <div class="artifact-info">
        <span class="pulse-dot"></span>
        <p>清弦的<strong>琵琶</strong></p>
        <p class="sub">陪伴她十年的老伙计</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第4页：弦歌 -->
<div class="page" id="page-3" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">弦歌不绝</h3>
    </div>
    
    <div class="scene-with-text">
      <div class="text-side">
        <p>清弦不仅精通
        <div class="clickable-text inline" onclick="collectNode('词曲', '戏', this)">
          <span class="pulse-dot"></span>
          <span><strong>词曲</strong></span>
        </div>
        ，还学会了
        <div class="clickable-text inline" onclick="collectNode('傀儡戏', '戏', this)">
          <span class="pulse-dot"></span>
          <span><strong>傀儡戏</strong></span>
        </div>
        。</p>
        <p>她在《清明上河图》般的市井中穿梭，见证着酒楼的兴盛、茶肆的热闹。</p>
      </div>
      <div class="scene-side">
        <div class="scene-placeholder"><span>瓦舍表演</span></div>
      </div>
    </div>
    
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">老艺人</span>
        <p>"咱们唱戏的，靠的是真本事。一曲动天下，方能立世间。"</p>
      </div>
    </div>
    
    <div class="clickable-text" onclick="collectRelic('戏服', this)">
      <span class="pulse-dot"></span>
      <span>精致的<strong>戏服</strong>，是艺人最珍贵的家当</span>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第5页：说书 -->
<div class="page" id="page-4" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">弦歌不绝</h3>
    </div>
    
    <div class="text-block">
      <p>除了弹唱，清弦还会
      <div class="clickable-text inline" onclick="collectNode('说书', '戏', this)">
        <span class="pulse-dot"></span>
        <span><strong>说书</strong></span>
      </div>
      。</p>
      <p>《三国演义》《西游记》，她能把书中人物讲得活灵活现。听众们围坐一团，听到精彩处，满堂喝彩。</p>
    </div>
    
    <div class="mini-choice">
      <p>宋代瓦舍中表演说话艺术的叫什么？</p>
      <div class="mini-options">
        <button onclick="selectMiniChoice(this, '说书', true)">说书</button>
        <button onclick="selectMiniChoice(this, '评弹', false)">评弹</button>
        <button onclick="selectMiniChoice(this, '相声', false)">相声</button>
      </div>
      <div class="mini-result" id="mini-result-1"></div>
    </div>
    
    <div class="clickable-text" onclick="collectRelic('话本', this)">
      <span class="pulse-dot"></span>
      <span>清弦珍藏的<strong>话本</strong>脚本</span>
    </div>
    
    <button class="nav-btn" id="btn-page4" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第6页：南渡 -->
<div class="page" id="page-5" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">南渡余音</h3>
    </div>
    
    <div class="text-block">
      <p>1127年，靖康之变，北宋灭亡。清弦随众人南渡，离开熟悉的汴梁。</p>
      <p>在临安的新瓦舍中，她仍弹奏着故都的曲调，让汴梁的记忆在弦上延续。</p>
    </div>
    
    <div class="reveal-card" onclick="revealText(this)">
      <div class="reveal-front">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
        </svg>
        <span>清弦的最后演出</span>
      </div>
      <div class="reveal-back">
        <div class="highlight-text" onclick="collectRelic('铜锣', this)">
          <span class="pulse-dot"></span>
          <strong>演出用的铜锣</strong>
        </div>
        <p>那是她在临安的最后一次演出，台下坐着流亡的汴梁旧人，听着听着便泪如雨下。</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第7页：尾声 -->
<div class="page" id="page-6" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">04</span>
      <h3 class="chapter-title">曲终人散</h3>
    </div>
    
    <div class="ending-text">
      <p>清弦晚年隐居于西湖畔，偶尔为游人弹奏一曲。</p>
      <p>那熟悉的旋律里，有汴梁的繁华，有南渡的悲凉，有艺人的一生。</p>
      <div class="divider"></div>
      <p class="final">人生如戏，</p>
      <p class="final">聚散无常。</p>
      <p class="final">唯有弦声，</p>
      <p class="final">穿越千年，余音绕梁。</p>
    </div>
    
    <button class="nav-btn" onclick="showSummary()">探索完成 →</button>
  </div>
</div>

<!-- 第8页：总结 -->
<div class="page" id="page-7" style="display:none">
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
</div>

<script>
// 页面导航
var currentPage = 0;
var totalPages = 8;
var unlockedPages = [0];

function showPage(n) {
  if (!unlockedPages.includes(n)) return;
  document.querySelectorAll('.page').forEach(function(page, i) { page.style.display = i === n ? 'block' : 'none'; });
  document.querySelectorAll('.dot').forEach(function(dot, i) { dot.classList.toggle('active', i === n); });
  currentPage = n;
  window.scrollTo(0, 0);
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    unlockedPages.push(currentPage + 1);
    showPage(currentPage + 1);
  }
}

function isPageUnlocked(n) { return unlockedPages.includes(n); }

// 迷你选择
function selectMiniChoice(el, answer, isCorrect) {
  var parent = el.parentElement;
  parent.querySelectorAll('button').forEach(function(b) { b.classList.remove('correct', 'wrong'); });
  var result = document.getElementById('mini-result-1');
  if (isCorrect) {
    el.classList.add('correct');
    result.textContent = '正确！宋代瓦舍中表演说话艺术称为"说书"。';
    result.classList.add('show');
    document.getElementById('btn-page4').disabled = false;
  } else {
    el.classList.add('wrong');
    result.textContent = '不对，再想想。';
    result.classList.add('show');
  }
}

// 揭示卡片
function revealText(el) { el.classList.add('revealed'); }

// 总结页
function showSummary() {
  var nodeCount = Object.keys(collections.nodes).length;
  var relicCount = Object.keys(collections.relics).length;
  document.getElementById('summary-node-count').textContent = nodeCount;
  document.getElementById('summary-relic-count').textContent = relicCount;
  var nodesList = document.getElementById('summary-nodes');
  var allNodes = ['汴梁', '瓦舍', '琵琶', '勾栏', '词曲', '傀儡戏', '说书'];
  nodesList.innerHTML = allNodes.map(function(n) {
    var collected = collections.nodes[n] ? 'collected' : '';
    return '<span class="item ' + collected + '">' + n + '</span>';
  }).join('');
  var relicsList = document.getElementById('summary-relics');
  var allRelics = ['琵琶', '戏服', '话本', '铜锣'];
  relicsList.innerHTML = allRelics.map(function(r) {
    var collected = collections.relics[r] ? 'collected' : '';
    return '<span class="item ' + collected + '">' + r + '</span>';
  }).join('');
  unlockedPages.push(7);
  showPage(7);
}

function restart() {
  currentPage = 0; collections = { nodes: {}, relics: {} }; unlockedPages = [0];
  document.querySelectorAll('.collected').forEach(function(el) { el.classList.remove('collected'); });
  document.querySelectorAll('.revealed').forEach(function(el) { el.classList.remove('revealed'); });
  document.querySelectorAll('.correct, .wrong').forEach(function(el) { el.classList.remove('correct', 'wrong'); });
  document.querySelectorAll('.mini-result').forEach(function(el) { el.classList.remove('show'); el.textContent = ''; });
  updateBadge(); updateCollectionPanel(); showPage(0);
}

function exportProgress() { alert('分享功能开发中'); }

// 初始化
document.addEventListener('DOMContentLoaded', function() { showPage(0); updateCollectionPanel(); });
</script>
