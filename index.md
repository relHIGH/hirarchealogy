---
layout: default
title: 首页
---

<!-- 博物馆风格首页 -->
<div class="museum-hero">
  <div class="hero-bg"></div>
  <div class="hero-content">
    <p class="museum-subtitle">ANTI CHUO</p>
    <h1 class="museum-title">探索中国古代文化</h1>
    <p class="museum-desc">以现代视角，重新发现旅、戏、饮、感之美</p>
    <div class="hero-cta">
      <a href="#explore" class="cta-primary">开始探索</a>
      <a href="{{ site.baseurl }}/docs/生民卷/" class="cta-secondary">生民卷</a>
    </div>
  </div>
  <div class="scroll-hint">
    <span>向下滚动</span>
    <div class="scroll-line"></div>
  </div>
</div>

<!-- 四个维度 -->
<section id="explore" class="dimensions-section">
  <div class="section-header">
    <span class="section-label">四个维度</span>
    <h2>探索古代生活</h2>
    <p>从旅行、游戏、饮食、感知四个角度，重构古代中国的生活图景</p>
  </div>
  
  <div class="dimensions-grid">
    <a href="{{ site.baseurl }}/docs/古代旅行/" class="dimension-card travel">
      <div class="card-bg"></div>
      <div class="card-content">
        <span class="card-icon">旅</span>
        <h3>古代旅行</h3>
        <p>从徐霞客到商队驼铃，探索古人如何丈量世界</p>
      </div>
    </a>
    
    <a href="{{ site.baseurl }}/docs/戏/" class="dimension-card play">
      <div class="card-bg"></div>
      <div class="card-content">
        <span class="card-icon">戏</span>
        <h3>游戏与娱乐</h3>
        <p>瓦舍勾栏中的百态人生，从博弈到杂剧</p>
      </div>
    </a>
    
    <a href="{{ site.baseurl }}/docs/饮/" class="dimension-card drink">
      <div class="card-bg"></div>
      <div class="card-content">
        <span class="card-icon">饮</span>
        <h3>饮食文化</h3>
        <p>茶酒之间，品味千年的宴饮文化</p>
      </div>
    </a>
    
    <a href="{{ site.baseurl }}/docs/感/" class="dimension-card sense">
      <div class="card-bg"></div>
      <div class="card-content">
        <span class="card-icon">感</span>
        <h3>感知与情感</h3>
        <p>诗词歌赋中的喜怒哀乐与审美意趣</p>
      </div>
    </a>
  </div>
</section>

<!-- 生民卷预览 -->
<section class="shengmin-preview">
  <div class="section-container">
    <div class="section-header light">
      <span class="section-label">人物志</span>
      <h2>生民卷</h2>
      <p>十位历史人物，十个跨越时空的故事</p>
    </div>
    
    <div class="characters-gallery">
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/冶辛.png" alt="冶辛">
        <span>冶辛</span>
      </div>
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/衡羽.png" alt="衡羽">
        <span>衡羽</span>
      </div>
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/禾宁.png" alt="禾宁">
        <span>禾宁</span>
      </div>
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/石兰.png" alt="石兰">
        <span>石兰</span>
      </div>
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/月珑.png" alt="月珑">
        <span>月珑</span>
      </div>
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/潮音.png" alt="潮音">
        <span>潮音</span>
      </div>
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/清弦.png" alt="清弦">
        <span>清弦</span>
      </div>
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/骁雪.png" alt="骁雪">
        <span>骁雪</span>
      </div>
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/墨岚.png" alt="墨岚">
        <span>墨岚</span>
      </div>
      <div class="char-item">
        <img src="{{ site.baseurl }}/assets/images/scenes/茶岑.png" alt="茶岑">
        <span>茶岑</span>
      </div>
    </div>
    
    <div class="section-cta">
      <a href="{{ site.baseurl }}/docs/生民卷/" class="cta-outline">探索全部人物 →</a>
    </div>
  </div>
</section>

<!-- 页脚信息 -->
<footer class="museum-footer">
  <div class="footer-content">
    <div class="footer-brand">
      <span class="brand-name">ANTI CHUO</span>
      <p>探索中国古代文化的四个维度</p>
    </div>
    <div class="footer-links">
      <a href="{{ site.baseurl }}/docs/古代旅行/">旅</a>
      <a href="{{ site.baseurl }}/docs/戏/">戏</a>
      <a href="{{ site.baseurl }}/docs/饮/">饮</a>
      <a href="{{ site.baseurl }}/docs/感/">感</a>
      <a href="{{ site.baseurl }}/docs/生民卷/">生民卷</a>
    </div>
  </div>
  <div class="footer-copyright">
    <p>© 2026 Anti Chuo Project</p>
  </div>
</footer>

<style>
/* 定义CSS变量 */
:root {
  --accent: #800020;
}

/* 博物馆风格首页 - 现代极简 */

/* 隐藏默认容器样式 */
.container { 
  background: transparent !important; 
  box-shadow: none !important; 
  padding: 0 !important; 
  max-width: 100% !important; 
  margin: 0 !important; 
}

/* Hero区域 */
.museum-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, #faf8f5 0%, #f5f0e8 50%, #faf6ee 100%);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse at 20% 80%, rgba(128,0,32,0.03) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(139,90,43,0.02) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  text-align: center;
  z-index: 1;
  padding: 40px;
  max-width: 800px;
}

.museum-subtitle {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 0.75rem;
  letter-spacing: 6px;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.museum-title {
  font-family: "Songti SC", "SimSun", serif;
  font-size: 3.5rem;
  font-weight: 400;
  color: #333;
  letter-spacing: 8px;
  margin-bottom: 20px;
  line-height: 1.3;
}

.museum-desc {
  font-size: 1.1rem;
  color: #666;
  letter-spacing: 2px;
  margin-bottom: 40px;
}

.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary {
  padding: 14px 36px;
  background: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  transition: all 0.3s;
}

.cta-primary:hover {
  background: #600020;
  transform: translateY(-2px);
}

.cta-secondary {
  padding: 14px 36px;
  background: transparent;
  color: var(--accent);
  text-decoration: none;
  border: 1.5px solid var(--accent);
  border-radius: 4px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  transition: all 0.3s;
}

.cta-secondary:hover {
  background: var(--accent);
  color: white;
}

.scroll-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #999;
  font-size: 0.75rem;
  letter-spacing: 2px;
}

.scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--accent), transparent);
  animation: scrollPulse 2s infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50% { opacity: 0.5; transform: scaleY(0.8); }
}

/* 四个维度区域 */
.dimensions-section {
  padding: 100px 60px;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header.light {
  color: white;
}

.section-header.light h2,
.section-header.light p {
  color: white;
}

.section-label {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 0.7rem;
  letter-spacing: 4px;
  color: var(--accent);
  text-transform: uppercase;
  display: block;
  margin-bottom: 16px;
}

.section-header h2 {
  font-family: "Songti SC", serif;
  font-size: 2.2rem;
  font-weight: 400;
  letter-spacing: 6px;
  color: #333;
  margin-bottom: 16px;
}

.section-header p {
  color: #888;
  font-size: 0.95rem;
  max-width: 500px;
  margin: 0 auto;
}

.dimensions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.dimension-card {
  position: relative;
  aspect-ratio: 3/4;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  transition: all 0.4s;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.7));
  z-index: 1;
}

.dimension-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f5f3f0;
  z-index: 0;
}

.travel::before { background: linear-gradient(135deg, #e8ddd4 0%, #d4c4b5 100%); }
.play::before { background: linear-gradient(135deg, #e4dcd0 0%, #cbb8a8 100%); }
.drink::before { background: linear-gradient(135deg, #ddd5c8 0%, #c4b8a8 100%); }
.sense::before { background: linear-gradient(135deg, #e0d8cc 0%, #c8bcb0 100%); }

.card-content {
  position: relative;
  z-index: 2;
}

.card-icon {
  font-family: "Songti SC", serif;
  font-size: 3rem;
  color: white;
  display: block;
  margin-bottom: 12px;
  opacity: 0.9;
}

.card-content h3 {
  font-family: "Songti SC", serif;
  font-size: 1.3rem;
  color: white;
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.card-content p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
}

.dimension-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

/* 生民卷预览 */
.shengmin-preview {
  padding: 100px 60px;
  background: linear-gradient(135deg, #2a2520 0%, #1a1612 100%);
  position: relative;
}

.shengmin-preview::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse at 30% 20%, rgba(128,0,32,0.1) 0%, transparent 40%),
    radial-gradient(ellipse at 70% 80%, rgba(139,90,43,0.08) 0%, transparent 40%);
  pointer-events: none;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.characters-gallery {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.char-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.char-item img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  filter: sepia(30%) brightness(0.9);
  border: 2px solid rgba(255,255,255,0.2);
  transition: all 0.3s;
}

.char-item:hover img {
  transform: scale(1.1);
  filter: sepia(0%) brightness(1);
  border-color: rgba(255,255,255,0.5);
}

.char-item span {
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  letter-spacing: 2px;
}

.section-cta {
  text-align: center;
}

.cta-outline {
  padding: 12px 32px;
  border: 1px solid rgba(255,255,255,0.4);
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  transition: all 0.3s;
  display: inline-block;
}

.cta-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.6);
  color: white;
}

/* 页脚 */
.museum-footer {
  padding: 60px;
  background: #faf8f5;
  border-top: 1px solid #e8e0d8;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.brand-name {
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: 1.1rem;
  letter-spacing: 4px;
  color: var(--accent);
}

.footer-brand p {
  color: #888;
  font-size: 0.85rem;
  margin-top: 8px;
}

.footer-links {
  display: flex;
  gap: 30px;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--accent);
}

.footer-copyright {
  max-width: 1200px;
  margin: 40px auto 0;
  padding-top: 30px;
  border-top: 1px solid #e8e0d8;
  text-align: center;
}

.footer-copyright p {
  color: #aaa;
  font-size: 0.8rem;
}

/* 响应式 */
@media (max-width: 1024px) {
  .dimensions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .museum-title { font-size: 2.2rem; }
  .dimensions-grid { grid-template-columns: 1fr; }
  .museum-hero { min-height: auto; padding: 120px 20px; }
  .dimensions-section { padding: 60px 20px; }
  .shengmin-preview { padding: 60px 20px; }
  .museum-footer { padding: 40px 20px; }
  .characters-gallery { gap: 15px; }
  .char-item img { width: 60px; height: 60px; }
}

/* 隐藏首页的轨迹线 */
body:has(.museum-hero) #trajectory-line {
  display: none !important;
}

body:has(.museum-hero) #content-wrapper {
  padding: 0 !important;
}

body:has(.museum-hero) .container {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}
</style>