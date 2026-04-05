---
layout: default
title: 门
---

<div class="gate-page">
  <div class="gate-seal">
    <div class="gate-char">古</div>
  </div>
</div>

<style>
.gate-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bg-main);
}

.gate-seal {
  width: 180px;
  height: 180px;
  background: #fff;
  border: 2px solid var(--accent);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.gate-seal::after {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border: 1px solid rgba(128,0,32,0.2);
}

.gate-char {
  font-family: "Songti SC", serif;
  font-size: 4.5rem;
  color: var(--accent);
  font-weight: 600;
  letter-spacing: 4px;
}

/* 隐藏大门页的轨迹线和侧边栏 */
body:has(.gate-page) #trajectory-line,
body:has(.gate-page) #sidebar-container,
body:has(.gate-page) #right-sidebar-trigger {
  display: none !important;
}

body:has(.gate-page) #content-wrapper {
  padding: 0 !important;
}

body:has(.gate-page) .container {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}
</style>
