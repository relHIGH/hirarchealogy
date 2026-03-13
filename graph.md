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

    <div style="font-size: 11px; color: #999; margin-top: 10px;">滚轮缩放 · 拖拽移动 · 点击跳转</div>
  </div>
</div>

<script src="https://unpkg.com/force-graph"></script>
<script>
  window.addEventListener("DOMContentLoaded", () => {
    // 1. 进入图谱页自动收起侧边栏
    if (window.toggleSidebar) window.toggleSidebar(false);

    fetch("{{ site.baseurl }}/assets/graph_data.json")
      .then(res => res.json())
      .then(data => {
        document.getElementById("graph-loading").style.display = "none";
        const elem = document.getElementById("graph-container");
        
        let showLabels = true;
        let nodeColor = "#e67e22";

        const Graph = ForceGraph()(elem)
          .graphData(data)
          .nodeId("id")
          .nodeLabel(node => showLabels ? null : node.id) // 如果关闭标签，则通过 hover 显示
          .nodeCanvasObject((node, ctx, globalScale) => {
            // 绘制节点圆点
            ctx.fillStyle = nodeColor;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
            ctx.fill();

            // 如果开启了显示标签
            if (showLabels) {
              const label = node.id;
              const fontSize = 12/globalScale;
              ctx.font = `${fontSize}px Sans-Serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "#666";
              ctx.fillText(label, node.x, node.y + 10);
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
          Graph.numDimensions(2); // 触发重绘
        };

        window.addEventListener("resize", () => {
          Graph.width(elem.offsetWidth).height(elem.offsetHeight);
        });
      });
  });
</script>
