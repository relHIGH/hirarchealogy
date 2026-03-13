---
layout: default
title: 古代旅行
---

<style>
  .exploration-grid { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-top: 50px; }
  .sub-orb { width: 160px; height: 160px; border-radius: 50%; background: white; border: 1px solid #eee; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer; transition: 0.6s; box-shadow: 0 10px 30px rgba(0,0,0,0.03); text-decoration: none !important; }
  .sub-orb:hover { transform: translateY(-10px); background: var(--accent); box-shadow: 0 20px 40px rgba(128,0,32,0.2); }
  .sub-orb:hover .orb-t { color: white; }
  .orb-t { color: var(--accent); font-size: 0.9rem; font-weight: 600; letter-spacing: 1px; }
  .back-btn { display: inline-block; margin-bottom: 20px; color: #999; text-decoration: none; font-size: 0.8rem; letter-spacing: 1px; }
</style>

<a href="{{ site.baseurl }}/" class="back-btn">← 返回首页</a>

# 古代旅行：维度探索

请选择一个维度，开始深入挖掘古代旅行的层级结构。

<div class="exploration-grid">
  <a href="{{ site.baseurl }}/docs/古代旅行/出行方式/" class="sub-orb"><div class="orb-t">出行方式</div></a>
  <a href="{{ site.baseurl }}/docs/古代旅行/交通网络/" class="sub-orb"><div class="orb-t">交通网络</div></a>
  <a href="{{ site.baseurl }}/docs/古代旅行/旅行设施/" class="sub-orb"><div class="orb-t">旅行设施</div></a>
  <a href="{{ site.baseurl }}/docs/古代旅行/旅行活动/" class="sub-orb"><div class="orb-t">旅行活动</div></a>
  <a href="{{ site.baseurl }}/docs/古代旅行/旅行体验/" class="sub-orb"><div class="orb-t">旅行体验</div></a>
</div>
