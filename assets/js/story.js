/**
 * 生民卷故事页通用脚本
 * 统一的页面切换、收集系统、交互逻辑
 */

(function() {
  'use strict';

  // 全局状态
  var StoryApp = {
    currentPage: 0,
    totalPages: 1,
    unlockedPages: [0],
    collections: { nodes: {}, relics: {} },
    config: window.STORY_CONFIG || { nodes: [], relics: [], totalPages: 1 }
  };

  // 初始化
  StoryApp.init = function() {
    this.totalPages = this.config.totalPages || document.querySelectorAll('.page').length;
    this.setupPageDots();
    this.setupKeyboardNav();
    this.showPage(0);
    this.updateCollectionPanel();
    this.updateBadge();
  };

  // 显示指定页面
  StoryApp.showPage = function(pageNum) {
    if (!this.unlockedPages.includes(pageNum)) return;

    // 隐藏所有页面
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
      pages[i].classList.remove('active');
    }

    // 显示目标页面
    var target = document.getElementById('page-' + pageNum);
    if (target) {
      target.style.display = 'block';
      target.classList.add('active');
    }

    this.currentPage = pageNum;
    this.updatePageDots();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 下一页
  StoryApp.nextPage = function() {
    if (this.currentPage < this.totalPages - 1) {
      if (!this.unlockedPages.includes(this.currentPage + 1)) {
        this.unlockedPages.push(this.currentPage + 1);
      }
      this.showPage(this.currentPage + 1);
    }
  };

  // 检查页面是否解锁
  StoryApp.isPageUnlocked = function(pageNum) {
    return this.unlockedPages.includes(pageNum);
  };

  // 生成页面指示器
  StoryApp.setupPageDots = function() {
    var dotsContainer = document.getElementById('pageDots');
    if (!dotsContainer) return;

    dotsContainer.innerHTML = '';
    for (var i = 0; i < this.totalPages; i++) {
      var dot = document.createElement('span');
      dot.className = 'dot' + (i === this.totalPages - 1 ? ' final' : '');
      dot.onclick = (function(page) {
        return function() {
          if (StoryApp.isPageUnlocked(page)) {
            StoryApp.showPage(page);
          }
        };
      })(i);
      dotsContainer.appendChild(dot);
    }
  };

  // 更新页面指示器状态
  StoryApp.updatePageDots = function() {
    var dots = document.querySelectorAll('.dot');
    for (var i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('active', i === this.currentPage);
    }
  };

  // 键盘导航
  StoryApp.setupKeyboardNav = function() {
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        StoryApp.nextPage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (StoryApp.currentPage > 0) {
          StoryApp.showPage(StoryApp.currentPage - 1);
        }
      }
    });
  };

  // 收集节点
  StoryApp.collectNode = function(nodeName, theme, element) {
    if (!this.collections.nodes[nodeName]) {
      this.collections.nodes[nodeName] = { theme: theme };
      if (element) element.classList.add('collected');
      this.showToast('已点亮节点：' + nodeName);
      this.updateBadge();
      this.updateCollectionPanel();
      return true;
    }
    return false;
  };

  // 收集文物
  StoryApp.collectRelic = function(relicName, element) {
    if (!this.collections.relics[relicName]) {
      this.collections.relics[relicName] = true;
      if (element) element.classList.add('collected');
      this.showToast('已收集文物：' + relicName);
      this.updateBadge();
      this.updateCollectionPanel();
      return true;
    }
    return false;
  };

  // 更新徽章
  StoryApp.updateBadge = function() {
    var count = Object.keys(this.collections.nodes).length + 
                Object.keys(this.collections.relics).length;
    var badge = document.getElementById('collection-badge');
    if (badge) badge.textContent = count;
  };

  // 切换收集面板
  StoryApp.toggleCollectionPanel = function() {
    var panel = document.getElementById('collectionPanel');
    if (panel) {
      panel.classList.toggle('active');
    }
  };

  // 更新收集面板
  StoryApp.updateCollectionPanel = function() {
    var nodesGrid = document.getElementById('panel-nodes');
    var relicsGrid = document.getElementById('panel-relics');

    if (nodesGrid && this.config.nodes) {
      nodesGrid.innerHTML = this.config.nodes.map(function(n) {
        var collected = StoryApp.collections.nodes[n.name] ? 'collected' : '';
        return '<span class="panel-item ' + collected + '" onclick="StoryApp.collectNode(\'' + n.name + '\', \'' + n.theme + '\', this)">' + n.name + '</span>';
      }).join('');
    }

    if (relicsGrid && this.config.relics) {
      relicsGrid.innerHTML = this.config.relics.map(function(r) {
        var collected = StoryApp.collections.relics[r] ? 'collected' : '';
        return '<span class="panel-item ' + collected + '" onclick="StoryApp.collectRelic(\'' + r + '\', this)">' + r + '</span>';
      }).join('');
    }
  };

  // 显示Toast
  StoryApp.showToast = function(message) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function() {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 2500);
  };

  // 显示总结页
  StoryApp.showSummary = function() {
    this.showPage(this.totalPages - 1);
    this.updateSummary();
  };

  // 更新总结页
  StoryApp.updateSummary = function() {
    var nodeCount = document.getElementById('summary-node-count');
    var relicCount = document.getElementById('summary-relic-count');

    if (nodeCount) nodeCount.textContent = Object.keys(this.collections.nodes).length;
    if (relicCount) relicCount.textContent = Object.keys(this.collections.relics).length;

    var nodesList = document.getElementById('summary-nodes');
    var relicsList = document.getElementById('summary-relics');

    if (nodesList && this.config.nodes) {
      nodesList.innerHTML = this.config.nodes.map(function(n) {
        var collected = StoryApp.collections.nodes[n.name] ? 'collected' : '';
        return '<span class="item ' + collected + '">' + n.name + '</span>';
      }).join('');
    }

    if (relicsList && this.config.relics) {
      relicsList.innerHTML = this.config.relics.map(function(r) {
        var collected = StoryApp.collections.relics[r] ? 'collected' : '';
        return '<span class="item ' + collected + '">' + r + '</span>';
      }).join('');
    }
  };

  // 重置
  StoryApp.restart = function() {
    this.currentPage = 0;
    this.collections = { nodes: {}, relics: {} };
    this.unlockedPages = [0];

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
      if (el.id && el.id.match(/^btn-page\d+$/)) {
        el.disabled = true;
      }
    });

    this.updateBadge();
    this.updateCollectionPanel();
    this.showPage(0);
  };

  // 导出进度
  StoryApp.exportProgress = function() {
    var data = {
      page: this.currentPage,
      collections: this.collections,
      unlocked: this.unlockedPages,
      timestamp: Date.now()
    };
    var json = JSON.stringify(data);
    var base64 = btoa(encodeURIComponent(json));
    
    navigator.clipboard.writeText(base64).then(function() {
      StoryApp.showToast('进度已复制到剪贴板');
    }).catch(function() {
      StoryApp.showToast('分享功能需要剪贴板权限');
    });
  };

  // 暴露全局函数供HTML调用
  window.StoryApp = StoryApp;
  window.showPage = function(n) { return StoryApp.showPage(n); };
  window.nextPage = function() { return StoryApp.nextPage(); };
  window.isPageUnlocked = function(n) { return StoryApp.isPageUnlocked(n); };
  window.collectNode = function(name, theme, el) { return StoryApp.collectNode(name, theme, el); };
  window.collectRelic = function(name, el) { return StoryApp.collectRelic(name, el); };
  window.toggleCollectionPanel = function() { return StoryApp.toggleCollectionPanel(); };
  window.showSummary = function() { return StoryApp.showSummary(); };
  window.restart = function() { return StoryApp.restart(); };
  window.exportProgress = function() { return StoryApp.exportProgress(); };

  // DOM就绪后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      StoryApp.init();
    });
  } else {
    StoryApp.init();
  }
})();
