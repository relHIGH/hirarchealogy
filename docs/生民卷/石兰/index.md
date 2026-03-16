---
layout: default
title: 石兰
---

<div class="story-page">
  <div class="story-header">
    <div class="char-avatar" style="background-position: 75% 0%;"></div>
    <div class="char-title">
      <h1>石兰</h1>
      <p>北魏 · 云冈石窟石匠</p>
    </div>
  </div>
  
  <div class="story-timeline">
    <div class="story-chapter">
      <h3>第一章：武州山下</h3>
      <p>石兰生于[[平城]]郊外的石匠世家。 [[云冈石窟]]开凿时，她的父亲被征召去雕刻佛像，她随之前往。</p>
      <p>在[[武州山]]下，她第一次见到了规模宏大的[[石窟]]工地。</p>
    </div>
    
    <div class="story-chapter">
      <h3>第二章：凿石成佛</h3>
      <p>石兰从搬运[[石材]]做起，渐习得[[雕刻]]技艺。她参与凿刻了[[飞天]]的衣带、[[菩萨]]的莲座。</p>
      <p>每一锤下去，都是对[[佛法]]的虔诚，也是对艺术的追求。</p>
    </div>
    
    <div class="story-chapter">
      <h3>第三章：佛光永照</h3>
      <p>石窟完工之日，石兰站在自己参与雕刻的[[大佛]]前，感到无比庄严。那些[[壁画]]与[[造像]]，将留存千年。</p>
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
  character: '石兰',
  nodes: ['平城', '云冈石窟', '武州山', '石窟', '石材', '雕刻', '飞天', '菩萨', '佛法', '大佛', '壁画', '造像'],
  relics: ['石窟', '造像', '壁画']
};
</script>
