---
layout: default
title: 衡羽
---

<div class="story-page">
  <div class="story-header">
    <div class="char-avatar" style="background-position: 25% 0%;"></div>
    <div class="char-title">
      <h1>衡羽</h1>
      <p>秦 · 咸阳驿舍女管事</p>
    </div>
  </div>
  
  <div class="story-timeline">
    <div class="story-chapter">
      <h3>第一章：咸阳驿站</h3>
      <p>衡羽任职于[[咸阳]]城东的[[驿舍]]，这里是帝国交通网络的枢纽。每日迎来送往，见证着天下的风云变幻。</p>
      <p>她精通[[律令]]，能准确计算[[传食]]配额，从不让过路的[[官吏]]久等。</p>
    </div>
    
    <div class="story-chapter">
      <h3>第二章：文书往来</h3>
      <p>秦统一后，[[驰道]]纵横天下。衡羽负责登记来往[[文书]]，那些竹简上记录着帝国的[[政令]]与[[军报]]。</p>
      <p>她学会辨认各地的[[封泥]]印记，从中读出天下大势。</p>
    </div>
    
    <div class="story-chapter">
      <h3>第三章：帝国余音</h3>
      <p>秦末动乱，驿站系统逐渐崩溃。衡羽收拾行囊，带着多年积累的[[简牍]]，踏上了寻找安宁的旅途。</p>
    </div>
  </div>
  
  <div class="story-collection" id="collection-section">
    <h2>探索收藏</h2>
    <div class="collection-grid">
      <div class="collection-group">
        <h4>主题节点</h4>
        <div class="collected-nodes" id="nodes-lit"></div>
      </div>
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
Shengmin.storyData = {
  character: '衡羽',
  nodes: ['咸阳', '驿舍', '律令', '传食', '官吏', '驰道', '文书', '政令', '军报', '封泥', '简牍'],
  relics: ['简牍', '封泥']
};
</script>
