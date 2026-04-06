---
layout: default
title: 关系图谱
---

<div class="graph-page">
  <div class="graph-header">
    <h2>节点碰撞网络</h2>
    <p class="graph-desc">人物通过故事中共同提及的主题节点产生关联</p>
  </div>
  
  <div class="graph-filters">
    <button class="filter-btn active" data-filter="all">全部</button>
    <button class="filter-btn" data-filter="旅">旅</button>
    <button class="filter-btn" data-filter="戏">戏</button>
    <button class="filter-btn" data-filter="饮">饮</button>
    <button class="filter-btn" data-filter="感">感</button>
  </div>
  
  <div id="network-graph" class="network-container"></div>
  
  <div class="graph-legend">
    <div class="legend-item"><span class="legend-dot character"></span>历史人物</div>
    <div class="legend-item"><span class="legend-dot theme-旅"></span>旅主题节点</div>
    <div class="legend-item"><span class="legend-dot theme-戏"></span>戏主题节点</div>
    <div class="legend-item"><span class="legend-dot theme-饮"></span>饮主题节点</div>
    <div class="legend-item"><span class="legend-dot theme-感"></span>感主题节点</div>
  </div>
</div>

<style>
.graph-page {
  height: 75vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.graph-header {
  text-align: center;
  margin-bottom: 20px;
}

.graph-header h2 {
  font-family: "Songti SC", serif;
  color: var(--accent);
  margin-bottom: 8px;
}

.graph-desc {
  color: #888;
  font-size: 0.9rem;
}

.graph-filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  padding: 6px 16px;
  background: transparent;
  border: 1px solid rgba(128,0,32,0.2);
  border-radius: 15px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 13px;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.network-container {
  flex: 1;
  position: relative;
  background: rgba(128,0,32,0.02);
  border-radius: 12px;
  overflow: hidden;
}

.network-container svg {
  width: 100%;
  height: 100%;
}

.node {
  cursor: pointer;
  transition: all 0.3s;
}

.node:hover {
  filter: brightness(1.2);
}

.node-circle {
  stroke: white;
  stroke-width: 2px;
}

.node-text {
  font-family: "Songti SC", serif;
  font-size: 12px;
  fill: #333;
  text-anchor: middle;
  dominant-baseline: middle;
  pointer-events: none;
}

.node.character .node-circle {
  fill: var(--accent);
}

.node.character .node-text {
  fill: white;
  font-size: 11px;
}

.node.theme-旅 .node-circle { fill: #e8b4b8; }
.node.theme-戏 .node-circle { fill: #b8d4e8; }
.node.theme-饮 .node-circle { fill: #d4e8b8; }
.node.theme-感 .node-circle { fill: #e8d4b8; }

.link {
  stroke: rgba(128,0,32,0.15);
  stroke-width: 1.5px;
  transition: all 0.3s;
}

.link.highlight {
  stroke: var(--accent);
  stroke-width: 2.5px;
  opacity: 0.6;
}

.node.dimmed {
  opacity: 0.2;
}

.link.dimmed {
  opacity: 0.1;
}

.graph-legend {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
  flex-wrap: wrap;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #666;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.legend-dot.character { background: var(--accent); }
.legend-dot.theme-旅 { background: #e8b4b8; }
.legend-dot.theme-戏 { background: #b8d4e8; }
.legend-dot.theme-饮 { background: #d4e8b8; }
.legend-dot.theme-感 { background: #e8d4b8; }
</style>

<script>
// 数据定义
const nodes = [
  // 人物节点
  { id: '冶辛', type: 'character', era: '战国' },
  { id: '衡羽', type: 'character', era: '秦' },
  { id: '禾宁', type: 'character', era: '汉' },
  { id: '石兰', type: 'character', era: '北魏' },
  { id: '月珑', type: 'character', era: '唐' },
  { id: '潮音', type: 'character', era: '五代十国' },
  { id: '清弦', type: 'character', era: '宋' },
  { id: '骁雪', type: 'character', era: '辽' },
  { id: '墨岚', type: 'character', era: '西夏' },
  { id: '茶岑', type: 'character', era: '大理国' },
  
  // 旅主题节点
  { id: '行', type: 'theme-旅' },
  { id: '路', type: 'theme-旅' },
  { id: '驿', type: 'theme-旅' },
  { id: '游', type: 'theme-旅' },
  { id: '车', type: 'theme-旅' },
  { id: '马', type: 'theme-旅' },
  { id: '舟', type: 'theme-旅' },
  { id: '行路', type: 'theme-旅' },
  { id: '驿站', type: 'theme-旅' },
  { id: '行商', type: 'theme-旅' },
  
  // 戏主题节点
  { id: '曲', type: 'theme-戏' },
  { id: '台', type: 'theme-戏' },
  { id: '伶', type: 'theme-戏' },
  { id: '剧', type: 'theme-戏' },
  { id: '戏', type: 'theme-戏' },
  { id: '琵琶', type: 'theme-戏' },
  { id: '杂剧', type: 'theme-戏' },
  { id: '傀儡戏', type: 'theme-戏' },
  
  // 饮主题节点
  { id: '茶', type: 'theme-饮' },
  { id: '酒', type: 'theme-饮' },
  { id: '器', type: 'theme-饮' },
  { id: '礼', type: 'theme-饮' },
  { id: '饮品', type: 'theme-饮' },
  { id: '宴饮', type: 'theme-饮' },
  { id: '酒器', type: 'theme-饮' },
  { id: '茶肆', type: 'theme-饮' },
  
  // 感主题节点
  { id: '情', type: 'theme-感' },
  { id: '境', type: 'theme-感' },
  { id: '忆', type: 'theme-感' },
  { id: '悟', type: 'theme-感' },
  { id: '感', type: 'theme-感' },
  { id: '节庆', type: 'theme-感' },
];

// 连接关系（人物与主题节点的关联）
const links = [
  // 冶辛
  { source: '冶辛', target: '行商' },
  { source: '冶辛', target: '行路' },
  { source: '冶辛', target: '驿' },
  { source: '冶辛', target: '器' },
  
  // 衡羽
  { source: '衡羽', target: '行路' },
  { source: '衡羽', target: '驿站' },
  { source: '衡羽', target: '车' },
  { source: '衡羽', target: '路' },
  
  // 禾宁
  { source: '禾宁', target: '行商' },
  { source: '禾宁', target: '茶' },
  { source: '禾宁', target: '酒' },
  { source: '禾宁', target: '路' },
  { source: '禾宁', target: '驿' },
  
  // 石兰
  { source: '石兰', target: '情' },
  { source: '石兰', target: '境' },
  { source: '石兰', target: '感' },
  
  // 月珑
  { source: '月珑', target: '茶' },
  { source: '月珑', target: '酒' },
  { source: '月珑', target: '饮品' },
  { source: '月珑', target: '礼' },
  { source: '月珑', target: '宴饮' },
  { source: '月珑', target: '酒器' },
  { source: '月珑', target: '感' },
  
  // 潮音
  { source: '潮音', target: '舟' },
  { source: '潮音', target: '行路' },
  { source: '潮音', target: '戏' },
  { source: '潮音', target: '伶' },
  { source: '潮音', target: '节庆' },
  { source: '潮音', target: '感' },
  
  // 清弦
  { source: '清弦', target: '曲' },
  { source: '清弦', target: '戏' },
  { source: '清弦', target: '琵琶' },
  { source: '清弦', target: '茶' },
  { source: '清弦', target: '酒' },
  { source: '清弦', target: '情' },
  { source: '清弦', target: '境' },
  { source: '清弦', target: '忆' },
  { source: '清弦', target: '感' },
  
  // 骁雪
  { source: '骁雪', target: '行' },
  { source: '骁雪', target: '马' },
  { source: '骁雪', target: '路' },
  { source: '骁雪', target: '节庆' },
  { source: '骁雪', target: '感' },
  { source: '骁雪', target: '忆' },
  { source: '骁雪', target: '境' },
  
  // 墨岚
  { source: '墨岚', target: '茶' },
  { source: '墨岚', target: '酒' },
  { source: '墨岚', target: '行商' },
  { source: '墨岚', target: '感' },
  { source: '墨岚', target: '境' },
  { source: '墨岚', target: '忆' },
  
  // 茶岑
  { source: '茶岑', target: '茶' },
  { source: '茶岑', target: '行' },
  { source: '茶岑', target: '路' },
  { source: '茶岑', target: '马' },
  { source: '茶岑', target: '酒' },
  { source: '茶岑', target: '礼' },
  { source: '茶岑', target: '感' },
];

// 简单的力导向布局实现
function createNetwork() {
  const container = document.getElementById('network-graph');
  const width = container.clientWidth;
  const height = container.clientHeight;
  
  // 创建SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  container.appendChild(svg);
  
  // 创建组
  const linkGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const nodeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  svg.appendChild(linkGroup);
  svg.appendChild(nodeGroup);
  
  // 初始化位置（人物在中间，主题节点围绕）
  const centerX = width / 2;
  const centerY = height / 2;
  
  nodes.forEach((node, i) => {
    if (node.type === 'character') {
      // 人物节点分布在中间区域
      const angle = (i / 10) * Math.PI * 2;
      node.x = centerX + Math.cos(angle) * 80;
      node.y = centerY + Math.sin(angle) * 80;
      node.r = 25;
    } else {
      // 主题节点分布在外围
      const themeIndex = nodes.filter(n => n.type === node.type).indexOf(node);
      const themeCount = nodes.filter(n => n.type === node.type).length;
      const typeAngle = {
        'theme-旅': 0,
        'theme-戏': Math.PI / 2,
        'theme-饮': Math.PI,
        'theme-感': Math.PI * 1.5
      }[node.type] || 0;
      
      const spread = Math.PI / 3;
      const angle = typeAngle + (themeIndex - themeCount / 2) * spread / themeCount;
      const distance = Math.min(width, height) * 0.35;
      
      node.x = centerX + Math.cos(angle) * distance;
      node.y = centerY + Math.sin(angle) * distance;
      node.r = 18;
    }
  });
  
  // 绘制连线
  const linkElements = links.map(link => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', 'link');
    line.setAttribute('data-source', link.source);
    line.setAttribute('data-target', link.target);
    linkGroup.appendChild(line);
    return { ...link, element: line };
  });
  
  // 绘制节点
  const nodeElements = nodes.map(node => {
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', `node ${node.type}`);
    g.setAttribute('data-id', node.id);
    g.setAttribute('data-type', node.type);
    
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('class', 'node-circle');
    circle.setAttribute('r', node.r);
    
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('class', 'node-text');
    text.textContent = node.id;
    
    g.appendChild(circle);
    g.appendChild(text);
    nodeGroup.appendChild(g);
    
    // 悬停效果
    g.addEventListener('mouseenter', () => highlightNode(node.id));
    g.addEventListener('mouseleave', () => resetHighlight());
    
    // 点击跳转
    if (node.type === 'character') {
      g.addEventListener('click', () => {
        window.location.href = `{{ site.baseurl }}/docs/%E7%94%9F%E6%B0%91%E5%8D%B7/${node.id}/`;
      });
    } else if (node.type.startsWith('theme-')) {
      // 主题节点点击跳转到对应主题页
      const themeMap = {
        'theme-旅': '{{ site.baseurl }}/docs/%E5%8F%A4%E4%BB%A3%E6%97%85%E8%A1%8C/',
        'theme-戏': '{{ site.baseurl }}/docs/%E6%88%8F/',
        'theme-饮': '{{ site.baseurl }}/docs/%E9%A5%AE/',
        'theme-感': '{{ site.baseurl }}/docs/%E6%84%9F/'
      };
      g.addEventListener('click', () => {
        window.location.href = themeMap[node.type];
      });
    }
    
    return { ...node, element: g };
  });
  
  // 更新位置
  function updatePositions() {
    nodeElements.forEach(node => {
      node.element.setAttribute('transform', `translate(${node.x}, ${node.y})`);
    });
    
    linkElements.forEach(link => {
      const sourceNode = nodeElements.find(n => n.id === link.source);
      const targetNode = nodeElements.find(n => n.id === link.target);
      if (sourceNode && targetNode) {
        link.element.setAttribute('x1', sourceNode.x);
        link.element.setAttribute('y1', sourceNode.y);
        link.element.setAttribute('x2', targetNode.x);
        link.element.setAttribute('y2', targetNode.y);
      }
    });
  }
  
  // 高亮节点及其连接
  function highlightNode(nodeId) {
    const connectedNodes = new Set([nodeId]);
    linkElements.forEach(link => {
      if (link.source === nodeId || link.target === nodeId) {
        connectedNodes.add(link.source);
        connectedNodes.add(link.target);
        link.element.classList.add('highlight');
      } else {
        link.element.classList.add('dimmed');
      }
    });
    
    nodeElements.forEach(node => {
      if (connectedNodes.has(node.id)) {
        node.element.classList.remove('dimmed');
      } else {
        node.element.classList.add('dimmed');
      }
    });
  }
  
  function resetHighlight() {
    nodeElements.forEach(node => node.element.classList.remove('dimmed'));
    linkElements.forEach(link => {
      link.element.classList.remove('highlight');
      link.element.classList.remove('dimmed');
    });
  }
  
  // 简单的物理模拟
  let iteration = 0;
  const maxIterations = 100;
  
  function simulate() {
    if (iteration >= maxIterations) return;
    iteration++;
    
    // 斥力
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x;
        const dy = nodes[j].y - nodes[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = 2000 / (dist * dist);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        
        if (nodes[i].type !== 'character') {
          nodes[i].x -= fx;
          nodes[i].y -= fy;
        }
        if (nodes[j].type !== 'character') {
          nodes[j].x += fx;
          nodes[j].y += fy;
        }
      }
    }
    
    // 引力（连接的节点）
    links.forEach(link => {
      const source = nodes.find(n => n.id === link.source);
      const target = nodes.find(n => n.id === link.target);
      if (source && target) {
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (dist - 100) * 0.01;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        
        if (source.type !== 'character') {
          source.x += fx;
          source.y += fy;
        }
        if (target.type !== 'character') {
          target.x -= fx;
          target.y -= fy;
        }
      }
    });
    
    // 向中心引力（防止跑太远）
    nodes.forEach(node => {
      if (node.type !== 'character') {
        const dx = centerX - node.x;
        const dy = centerY - node.y;
        node.x += dx * 0.01;
        node.y += dy * 0.01;
      }
    });
    
    updatePositions();
    requestAnimationFrame(simulate);
  }
  
  updatePositions();
  simulate();
}

// 筛选功能
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    document.querySelectorAll('.node').forEach(node => {
      const type = node.dataset.type;
      if (filter === 'all' || type === 'character' || type === `theme-${filter}`) {
        node.style.opacity = '1';
      } else {
        node.style.opacity = '0.1';
      }
    });
    
    document.querySelectorAll('.link').forEach(link => {
      if (filter === 'all') {
        link.style.opacity = '1';
      } else {
        link.style.opacity = '0.05';
      }
    });
  });
});

// 初始化
document.addEventListener('DOMContentLoaded', createNetwork);
</script>
