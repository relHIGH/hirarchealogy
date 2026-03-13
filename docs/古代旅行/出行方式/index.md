---
layout: default
title: 出行方式
---

<style>
  .exploration-grid { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-top: 50px; }
  .sub-orb { width: 160px; height: 160px; border-radius: 50%; background: white; border: 1px solid #eee; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer; transition: 0.6s; box-shadow: 0 10px 30px rgba(0,0,0,0.03); text-decoration: none !important; }
  .sub-orb:hover { transform: translateY(-10px); background: var(--accent); box-shadow: 0 20px 40px rgba(128,0,32,0.2); }
  .sub-orb:hover .orb-t { color: white; }
  .orb-t { color: var(--accent); font-size: 0.9rem; font-weight: 600; letter-spacing: 1px; }
  .back-btn { display: inline-block; margin-bottom: 20px; color: #999; text-decoration: none; font-size: 0.8rem; letter-spacing: 1px; }
</style>

<a href="{{ site.baseurl }}/docs/古代旅行/" class="back-btn">← 返回古代旅行</a>

# 出行方式：点选单元

<div class="exploration-grid">
  <a href="{{ site.baseurl }}/docs/古代旅行/出行方式/徒行.html" class="sub-orb"><div class="orb-t">徒行</div></a>
  <a href="{{ site.baseurl }}/docs/古代旅行/出行方式/车.html" class="sub-orb"><div class="orb-t">车</div></a>
  <a href="{{ site.baseurl }}/docs/古代旅行/出行方式/马.html" class="sub-orb"><div class="orb-t">马</div></a>
  <a href="{{ site.baseurl }}/docs/古代旅行/出行方式/舟船.html" class="sub-orb"><div class="orb-t">舟船</div></a>
</div>
