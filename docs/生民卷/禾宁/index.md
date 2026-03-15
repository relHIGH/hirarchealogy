---
layout: default
title: 禾宁
---

<div class="story-page">
  <div class="story-header">
    <div class="char-avatar"></div>
    <div class="char-title">
      <h1>禾宁</h1>
      <p>汉 · 河西屯田女户</p>
    </div>
  </div>
  
  <div class="story-timeline">
    <div class="story-chapter">
      <h3>第一章：河西屯田</h3>
      <p>禾宁随父兄来到[[河西走廊]]，这里是汉帝国向西域拓展的咽喉。朝廷在此[[屯田]]驻军，开垦荒地。</p>
      <p>她学会了在干旱之地寻找[[水源]]，用[[坎儿井]]灌溉[[麦田]]。</p>
    </div>
    
    <div class="story-chapter">
      <h3>第二章：丝路初现</h3>
      <p>张骞通西域后，[[丝绸之路]]日渐繁忙。禾宁的村庄位于商道旁，她见过[[骆驼]]队载着[[丝绸]]西行，也见过[[胡商]]带来的[[葡萄]]与[[苜蓿]]。</p>
    </div>
    
    <div class="story-chapter">
      <h3>第三章：边塞岁月</h3>
      <p>岁月流转，禾宁在[[烽燧]]旁建起家园。她守护着一方[[良田]]，见证着东西方文明的交汇。</p>
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
  character: '禾宁',
  nodes: ['河西走廊', '屯田', '水源', '坎儿井', '麦田', '丝绸之路', '骆驼', '丝绸', '胡商', '葡萄', '苜蓿', '烽燧', '良田'],
  relics: ['丝绸', '烽燧']
};
</script>
