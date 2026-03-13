---
title: 首页
layout: default
---

<style>
  /* 首页探索中心样式 */
  #exploration-hub {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 60vh;
    flex-wrap: wrap;
  }

  .portal-orb {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: white;
    border: 1px solid var(--border-soft);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
    text-decoration: none !important;
    position: relative;
    overflow: hidden;
  }

  .portal-orb:hover {
    transform: translateY(-15px) scale(1.05);
    background: var(--primary);
    border-color: var(--accent);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  }

  .portal-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary);
    letter-spacing: 2px;
    transition: 0.4s;
  }

  .portal-orb:hover .portal-title {
    color: white;
  }

  .portal-desc {
    font-size: 0.7rem;
    color: #999;
    margin-top: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0;
    transition: 0.4s;
  }

  .portal-orb:hover .portal-desc {
    opacity: 1;
    color: rgba(255,255,255,0.6);
  }

  /* 动态波纹装饰 */
  .portal-orb::after {
    content: "";
    position: absolute;
    width: 100%; height: 100%;
    border: 1px solid var(--accent);
    border-radius: 50%;
    opacity: 0;
    transform: scale(0.8);
    transition: 0.6s;
  }
  .portal-orb:hover::after {
    opacity: 0.3;
    transform: scale(1.2);
  }
</style>

<div id="exploration-hub">
  <!-- 入口 1 -->
  <a href="{{ site.baseurl }}/docs/sites.html" class="portal-orb">
    <div class="portal-title">SITES</div>
    <div class="portal-desc">遗址与文明</div>
  </a>

  <!-- 入口 2 -->
  <a href="{{ site.baseurl }}/docs/basics.html" class="portal-orb">
    <div class="portal-title">BASICS</div>
    <div class="portal-desc">层次与理论</div>
  </a>

  <!-- 入口 3 -->
  <a href="{{ site.baseurl }}/graph.html" class="portal-orb">
    <div class="portal-title">NETWORK</div>
    <div class="portal-desc">关系图谱</div>
  </a>
</div>

<div style="text-align: center; margin-top: 50px; color: #ccc; font-size: 0.8rem; letter-spacing: 4px;">
  CHOOSE A DIMENSION TO BEGIN
</div>
