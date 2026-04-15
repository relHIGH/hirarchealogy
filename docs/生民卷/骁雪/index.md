---
layout: story
title: 萧骐
---

<!-- 第1页：介绍 -->
<div class="page" id="page-0">
  <div class="intro-layout">
    <div class="intro-left">
      <h1 class="char-name">萧骐篇</h1>
      <p class="char-era">辽 · 草原牧民信使</p>
      <div class="char-bio">
        <p>生于辽国上京附近的草原，父亲是部落信使。她从小骑着马，在广袤的蒙古高原上奔驰，熟悉契丹的毡帐，见证着草原与中原的往来。</p>
      </div>
      <button class="nav-btn" onclick="nextPage()">开始探索 →</button>
    </div>      
    <div class="intro-right">
      <img src="{{ site.baseurl }}/assets/images/scenes/骁雪.png" alt="萧骐" class="scene-img"/>
    </div>
  </div>
</div>

<!-- 第2页：草原 -->
<div class="page" id="page-1" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">草原长调</h3>
    </div>
    <div class="scene-with-text">
      <div class="scene-side">
        <img src="{{ site.baseurl }}/assets/images/scenes/骁雪.png" alt="草原" class="scene-img"/>
      </div>
      <div class="text-side">
        <p>萧骐生于
        <span class="clickable-text" data-node="辽" data-theme="旅">
          <span class="pulse-dot"></span>
          <strong>辽</strong>
        </span>
        国上京附近的
        <span class="clickable-text" data-node="草原" data-theme="旅">
          <span class="pulse-dot"></span>
          <strong>草原</strong>
        </span>
        ，父亲是部落
        <span class="clickable-text" data-node="信使" data-theme="旅">
          <span class="pulse-dot"></span>
          <strong>信使</strong>
        </span>
        。</p>
        <p>她从小骑着马，在广袤的
        <span class="clickable-text" data-node="蒙古高原" data-theme="旅">
          <span class="pulse-dot"></span>
          <strong>蒙古高原</strong>
        </span>
        上奔驰，熟悉契丹的毡帐，听得懂鹰的啸叫。</p>
      </div>
    </div>
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第3页：马匹 -->
<div class="page" id="page-2" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">01</span>
      <h3 class="chapter-title">草原长调</h3>
    </div>
    
    <div class="text-block">
      <p>在草原上，
      <span class="clickable-text" data-node="马" data-theme="旅">
        <span class="pulse-dot"></span>
        <strong>马</strong>
      </span>
      是最重要的伙伴。</p>
      <p>萧骐三岁时就有了自己的小马驹，八岁能骑马射箭，十二岁就能独自骑马传递消息。</p>
    </div>
    
    <div class="artifact-showcase" data-relic="马镫">
      <div class="artifact-visual">
        <div class="scene-placeholder small"><span>马镫</span></div>
      </div>
      <div class="artifact-info">
        <span class="pulse-dot"></span>
        <p>辽代铁铸<strong>马镫</strong></p>
        <p class="sub">契丹骑兵的标准装备</p>
      </div>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第4页：驿路 -->
<div class="page" id="page-3" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">驿路风尘</h3>
    </div>
    
    <div class="scene-with-text">
      <div class="text-side">
        <p>辽国实行
        <span class="clickable-text" data-node="南北面官" data-theme="旅">
          <span class="pulse-dot"></span>
          <strong>南北面官</strong>
        </span>
        制度，萧骐经常往返于契丹旧俗与汉地农耕之间。</p>
        <p>她传递诏令，运送贡品，在
        <span class="clickable-text" data-node="驿路" data-theme="旅">
          <span class="pulse-dot"></span>
          <strong>驿路</strong>
        </span>
        上奔驰，见证着五京的繁华。</p>
      </div>
      <div class="scene-side">
        <div class="scene-placeholder"><span>驿路</span></div>
      </div>
    </div>
    
    <div class="dialogue-box">
      <div class="dialogue-avatar"></div>
      <div class="dialogue-content">
        <span class="speaker">部落长老</span>
        <p>"一个合格的信使，要能日行三百里，要能辨别方向，还要能在野外生存。"</p>
      </div>
    </div>
    
    <div class="clickable-text" data-relic="驿符牌">
      <span class="pulse-dot"></span>
      <span>萧骐随身携带的<strong>驿符牌</strong></span>
    </div>
    
    <button class="nav-btn" onclick="nextPage()">下一页 →</button>
  </div>
</div>

<!-- 第5页：捺钵 -->
<div class="page" id="page-4" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">02</span>
      <h3 class="chapter-title">驿路风尘</h3>
    </div>
    
    <div class="text-block">
      <p>辽国皇帝实行捺钵制度，四季巡狩。</p>
      <p>萧骐随皇室巡行，在冰上捕鱼，在草原上围猎。行路千里，只为传递一纸文书。</p>
    </div>
    
    <div class="mini-choice">
      <p>辽国皇帝的行宫叫什么？</p>
      <div class="mini-options">
        <button data-answer="宫殿" data-correct="false">宫殿</button>
        <button data-answer="捺钵" data-correct="true">捺钵</button>
        <button data-answer="毡帐" data-correct="false">毡帐</button>
      </div>
      <div class="mini-result" id="mini-result-1"></div>
    </div>
    
    <div class="clickable-text" data-relic="马鞍">
      <span class="pulse-dot"></span>
      <span>精制<strong>马鞍</strong>，皇帝的赏赐</span>
    </div>
    
    <button class="nav-btn" id="btn-page4" onclick="nextPage()" disabled>下一页 →</button>
  </div>
</div>

<!-- 第6页：游牧 -->
<div class="page" id="page-5" style="display:none">
  <div class="chapter-layout">
    <div class="chapter-header">
      <span class="chapter-num">03</span>
      <h3 class="chapter-title">白马青牛</h3>
    </div>
    
    <div class="text-block">
      <p>岁月如草原上的风，萧骐渐渐老去。</p>
      <p>她给孙子讲述着
      <span class="clickable-text" data-node="游牧" data-theme="旅">
        <span class="pulse-dot"></span>
        <strong>游牧</strong>
      </span>
      的故事，那白马青牛的传说，仍在草原上传唱。</p>
    </div>
    
    <div class="reveal-card">
      <div class="reveal-front">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
        </svg>
        <span>萧骐的珍藏</span>
      </div>
      <div class="reveal-back">
        <div class="highlight-text" data-relic="狼牙棒">
          <span class="pulse-dot"></span>
          <strong>契丹狼牙棒</strong>
        </div>
        <p>这是萧骐年轻时使用的武器，见证了她无数次穿越草原的艰险旅程。</p>
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
      <h3 class="chapter-title">草原回响</h3>
    </div>
    
    <div class="ending-text">
      <p>萧骐一生都在马上度过，走过的路能绕草原三圈。</p>
      <p>她见证了辽国的兴衰，也见证了草原的永恒。</p>
      <div class="divider"></div>
      <p class="final">她忆起年少时驰骋的马背，</p>
      <p class="final">那是她最珍贵的境界。</p>
      <p class="final">草原是家，</p>
      <p class="final">马匹是命，</p>
      <p class="final">信使是责。</p>
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
  <span class="dot active" data-page="0"></span>
  <span class="dot" data-page="1"></span>
  <span class="dot" data-page="2"></span>
  <span class="dot" data-page="3"></span>
  <span class="dot" data-page="4"></span>
  <span class="dot" data-page="5"></span>
  <span class="dot" data-page="6"></span>
  <span class="dot" data-page="7"></span>
</div>

<script>
// 页面特定配置
const storyConfig = {
  totalPages: 8,
  nodes: ['辽', '草原', '信使', '马', '蒙古高原', '驿路', '南北面官', '游牧'],
  relics: ['马镫', '驿符牌', '马鞍', '狼牙棒']
};

// 页面特定交互逻辑
document.addEventListener('DOMContentLoaded', function() {
  // 迷你选择题逻辑
  document.querySelectorAll('.mini-options button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var parent = this.parentElement;
      parent.querySelectorAll('button').forEach(function(b) { 
        b.classList.remove('correct', 'wrong'); 
      });
      var result = document.getElementById('mini-result-1');
      if (this.dataset.correct === 'true') {
        this.classList.add('correct');
        result.textContent = '正确！辽国皇帝实行捺钵制度，四季巡狩于草原。';
        result.classList.add('show');
        document.getElementById('btn-page4').disabled = false;
      } else {
        this.classList.add('wrong');
        result.textContent = '不对，再想想。';
        result.classList.add('show');
      }
    });
  });
  
  // 揭示卡片逻辑
  document.querySelectorAll('.reveal-card').forEach(function(card) {
    card.addEventListener('click', function() {
      this.classList.add('revealed');
    });
  });
});
</script>
