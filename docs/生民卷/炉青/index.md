---
layout: default
title: 炉青
---

<div class="story-page">
  <div class="story-header">
    <div class="char-avatar" style="background-position: 0% 0%;"></div>
    <div class="char-title">
      <h1>炉青</h1>
      <p>战国 · 冶铁作坊匠人</p>
    </div>
  </div>
  
  <div class="story-timeline">
    <div class="story-chapter">
      <h3>第一章：炉火初生</h3>
      <p>炉青生于战国末年的邯郸，父亲是一方有名的冶铁匠人。邯郸作为赵国的冶铁中心，城中遍布高炉，日夜不息。</p>
      <p>年幼的炉青常在[[作坊]]中玩耍，看着父亲将[[铁矿石]]投入[[高炉]]，火焰吞噬矿石，流出赤红的铁水。</p>
    </div>
    
    <div class="story-chapter">
      <h3>第二章：淬火成钢</h3>
      <p>及笄之年，炉青已能独立操作[[鼓风]]设备。她发现了控制火候的诀窍，能根据火焰颜色判断炉温。</p>
      <p>她锻造的[[兵器]]锋利异常，赵国军士争相求购。</p>
    </div>
    
    <div class="story-chapter">
      <h3>第三章：流散四方</h3>
      <p>秦灭六国后，邯郸冶铁业衰落。炉青随父亲西迁，沿途见到了各地的[[冶铁遗址]]和不同的[[生产工具]]。</p>
    </div>
  </div>
  
  <div class="story-collection" id="collection-section">
    <h2>探索收藏</h2>
    <div class="collection-grid">
      <!-- 节点收藏 -->
      <div class="collection-group">
        <h4>主题节点</h4>
        <div class="collected-nodes" id="nodes-lit"></div>
      </div>
      <!-- 文物收藏 -->
      <div class="collection-group">
        <h4>历史文物</h4>
        <div class="collected-relics" id="relics-lit"></div>
      </div>
    </div>
    
    <div class="export-actions">
      <button onclick="Shengmin.exportImage()">生成探索证书</button>
      <button onclick="Shengmin.exportLink()">复制分享链接</button>
    </div>
  </div>
</div>

<script>
// 炉青故事中的节点和文物标记
Shengmin.storyData = {
  character: '炉青',
  nodes: ['作坊', '铁矿石', '高炉', '鼓风', '兵器', '冶铁遗址', '生产工具'],
  relics: ['冶铁遗址', '兵器', '生产工具']
};
</script>
