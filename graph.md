---
title: 关系图谱
layout: default
---

<div id="graph-wrapper" style="position: relative; width: 100%; height: 80vh; background: #fdfaf6; border-radius: 12px; border: 1px solid #eee; overflow: hidden;">
  <div id="graph-loading" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #999; z-index: 10;">正在神经同步中...</div>
  <div id="graph-container" style="width: 100%; height: 100%;"></div>
  
  <!-- 图谱控制台 -->
  <div id="graph-controls" style="position: absolute; bottom: 20px; left: 20px; background: rgba(255,255,255,0.9); padding: 15px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); z-index: 100; font-size: 13px; border: 1px solid #eee; min-width: 180px;">
    <div style="font-weight: bold; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">🛠️ 图谱控制台</div>
    
    <div style="margin-bottom: 8px;">
      <label><input type="checkbox" id="show-labels" checked> 显示文字标签</label>
    </div>
    
    <div style="margin-bottom: 8px;">
      <label>节点颜色：<input type="color" id="node-color" value="#e67e22" style="width: 40px; height: 20px; border: none; padding: 0;"></label>
    </div>

    <div style="margin-bottom: 8px;">
      <label>连线强度：<input type="range" id="link-strength" min="0" max="50" value="20" style="width: 100%;"></label>
    </div>
    
    <div style="margin-bottom: 8px; border-top: 1px solid #eee; padding-top: 8px;">
      <label><input type="checkbox" id="show-shengmin"> 显示生民卷人物</label>
    </div>

    <div style="font-size: 11px; color: #999; margin-top: 10px;">滚轮缩放 · 拖拽移动 · 点击跳转</div>
  </div>
  
  <!-- 生民卷收藏面板 -->
  <div id="shengmin-panel" style="position: absolute; top: 20px; right: 20px; background: rgba(255,255,255,0.95); padding: 20px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); z-index: 100; font-size: 13px; border: 1px solid #eee; width: 250px; display: none;">
    <div style="font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; display: flex; align-items: center; gap: 8px;">
      <span>📜</span>
      <span>生民卷收藏</span>
    </div>
    
    <div id="shengmin-stats" style="margin-bottom: 15px;">
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span style="color: #666;">已探索人物</span>
        <span id="explored-chars" style="font-weight: bold; color: var(--accent);">0/10</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span style="color: #666;">点亮节点</span>
        <span id="lit-nodes" style="font-weight: bold; color: var(--accent);">0</span>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span style="color: #666;">收集文物</span>
        <span id="collected-relics" style="font-weight: bold; color: #8B4513;">0</span>
      </div>
    </div>
    
    <div style="border-top: 1px solid #eee; padding-top: 12px;">
      <div style="font-size: 11px; color: #999; margin-bottom: 10px;">人物间共同节点</div>
      <div id="character-collisions" style="max-height: 150px; overflow-y: auto;"></div>
    </div>
    
    <div style="border-top: 1px solid #eee; padding-top: 12px; margin-top: 12px; display: flex; gap: 8px;">
      <button onclick="Shengmin.exportImage()" style="flex: 1; padding: 8px; background: var(--accent); color: white; border: none; border-radius: 6px; font-size: 12px; cursor: pointer;">导出证书</button>
      <button onclick="Shengmin.exportLink()" style="flex: 1; padding: 8px; background: #f0f0f0; color: #666; border: none; border-radius: 6px; font-size: 12px; cursor: pointer;">分享</button>
    </div>
  </div>
</div>

<script src="https://unpkg.com/force-graph"></script>
<script>
  window.addEventListener("DOMContentLoaded", () => {
    // 1. 进入图谱页自动收起侧边栏
    if (window.toggleSidebar) window.toggleSidebar(false);
    
    // 2. 加载生民卷收藏数据
    loadShengminData();

    fetch("{{ site.baseurl }}/assets/graph_data.json")
      .then(res => res.json())
      .then(data => {
        document.getElementById("graph-loading").style.display = "none";
        const elem = document.getElementById("graph-container");
        
        let showLabels = true;
        let nodeColor = "#e67e22";
        let showShengmin = false;
        
        // 生民卷人物数据
        const shengminChars = ['炉青', '衡羽', '禾宁', '石兰', '月珑', '潮音', '清弦', '骁雪', '墨岚', '茶岑'];
        const shengminColor = "#800020";

        const Graph = ForceGraph()(elem)
          .graphData(data)
          .nodeId("id")
          .nodeLabel(node => showLabels ? null : node.id)
          .nodeCanvasObject((node, ctx, globalScale) => {
            // 判断是否是生民卷人物
            const isShengmin = shengminChars.includes(node.id);
            const actualColor = (isShengmin && showShengmin) ? shengminColor : nodeColor;
            
            // 绘制节点圆点
            ctx.fillStyle = actualColor;
            ctx.beginPath();
            ctx.arc(node.x, node.y, isShengmin ? 8 : 5, 0, 2 * Math.PI, false);
            ctx.fill();
            
            // 如果是生民卷人物，添加光环
            if (isShengmin && showShengmin) {
              ctx.strokeStyle = "rgba(128,0,32,0.3)";
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.arc(node.x, node.y, 12, 0, 2 * Math.PI, false);
              ctx.stroke();
            }

            // 如果开启了显示标签
            if (showLabels) {
              const label = node.id;
              const fontSize = 12/globalScale;
              ctx.font = `${fontSize}px Sans-Serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = isShengmin ? "#800020" : "#666";
              ctx.fillText(label, node.x, node.y + (isShengmin ? 18 : 10));
            }
          })
          .linkColor(() => "#ddd")
          .linkDirectionalParticles(2)
          .onNodeClick(node => {
            const found = pages.find(p => p.name === node.id);
            if (found) window.location.href = found.url;
          });

        // 控制台交互逻辑
        document.getElementById("show-labels").onchange = (e) => {
          showLabels = e.target.checked;
          Graph.refresh();
        };

        document.getElementById("node-color").oninput = (e) => {
          nodeColor = e.target.value;
          Graph.refresh();
        };

        document.getElementById("link-strength").oninput = (e) => {
          Graph.d3Force("link").distance(parseInt(e.target.value) * 5);
          Graph.numDimensions(2);
        };
        
        // 生民卷显示切换
        document.getElementById("show-shengmin").onchange = (e) => {
          showShengmin = e.target.checked;
          document.getElementById("shengmin-panel").style.display = showShengmin ? "block" : "none";
          if (showShengmin) updateShengminPanel();
          Graph.refresh();
        };

        window.addEventListener("resize", () => {
          Graph.width(elem.offsetWidth).height(elem.offsetHeight);
        });
      });
      
    // 加载生民卷收藏数据
    function loadShengminData() {
      const data = localStorage.getItem('hr_shengmin_collections');
      window.shengminCollections = data ? JSON.parse(data) : {};
    }
    
    // 更新生民卷面板
    function updateShengminPanel() {
      const collections = window.shengminCollections || {};
      const chars = Object.keys(collections);
      
      // 统计
      let totalNodes = 0;
      let totalRelics = 0;
      const allNodes = [];
      
      chars.forEach(char => {
        totalNodes += collections[char].nodes?.length || 0;
        totalRelics += collections[char].relics?.length || 0;
        allNodes.push(...(collections[char].nodes || []));
      });
      
      document.getElementById('explored-chars').textContent = `${chars.length}/10`;
      document.getElementById('lit-nodes').textContent = totalNodes;
      document.getElementById('collected-relics').textContent = totalRelics;
      
      // 查找人物间共同节点
      const collisions = findCharacterCollisions(collections);
      const collisionDiv = document.getElementById('character-collisions');
      
      if (collisions.length === 0) {
        collisionDiv.innerHTML = '<div style="color: #999; font-size: 11px;">暂无共同访问的节点</div>';
      } else {
        collisionDiv.innerHTML = collisions.map(c => `
          <div style="margin-bottom: 8px; padding: 8px; background: #f9f9f9; border-radius: 6px;">
            <div style="font-size: 11px; color: #666; margin-bottom: 4px;">
              ${c.chars.join(' ↔ ')}
            </div>
            <div style="font-size: 10px; color: var(--accent);">
              共同: ${c.common.join(', ')}
            </div>
          </div>
        `).join('');
      }
    }
    
    // 查找人物间共同节点
    function findCharacterCollisions(collections) {
      const chars = Object.keys(collections);
      const collisions = [];
      
      for (let i = 0; i < chars.length; i++) {
        for (let j = i + 1; j < chars.length; j++) {
          const char1 = chars[i];
          const char2 = chars[j];
          
          const nodes1 = new Set(collections[char1].nodes || []);
          const common = (collections[char2].nodes || []).filter(n => nodes1.has(n));
          
          if (common.length > 0) {
            collisions.push({ chars: [char1, char2], common });
          }
        }
      }
      
      return collisions;
    }
  });
</script>
