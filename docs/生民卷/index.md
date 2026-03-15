---
layout: default
title: 生民卷
---

<div class="shengmin-dark-page">
  <div class="shengmin-header">
    <h1>生民卷</h1>
    <p>以人物为线索，探索古代生活</p>
  </div>
  
  <div class="character-row">
    <a href="./炉青/" class="char-item" data-char="炉青">
      <div class="char-img" style="background-position: 0% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">战国</span>
        <span class="char-role">冶铁作坊之女</span>
      </div>
    </a>
    
    <a href="./衡羽/" class="char-item offset-1" data-char="衡羽">
      <div class="char-img" style="background-position: 25% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">秦</span>
        <span class="char-role">咸阳驿舍女管事</span>
      </div>
    </a>
    
    <a href="./禾宁/" class="char-item offset-2" data-char="禾宁">
      <div class="char-img" style="background-position: 50% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">汉</span>
        <span class="char-role">河西屯田女户</span>
      </div>
    </a>
    
    <a href="./石兰/" class="char-item offset-3" data-char="石兰">
      <div class="char-img" style="background-position: 75% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">北魏</span>
        <span class="char-role">云冈石窟女石匠</span>
      </div>
    </a>
    
    <a href="./月珑/" class="char-item offset-2" data-char="月珑">
      <div class="char-img" style="background-position: 100% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">唐</span>
        <span class="char-role">长安胡商之妻</span>
      </div>
    </a>
    
    <a href="./潮音/" class="char-item offset-1" data-char="潮音">
      <div class="char-img" style="background-position: 0% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">五代十国</span>
        <span class="char-role">吴越运河船家女</span>
      </div>
    </a>
    
    <a href="./清弦/" class="char-item" data-char="清弦">
      <div class="char-img" style="background-position: 25% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">宋</span>
        <span class="char-role">汴梁瓦舍女艺人</span>
      </div>
    </a>
    
    <a href="./骁雪/" class="char-item offset-1" data-char="骁雪">
      <div class="char-img" style="background-position: 50% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">辽</span>
        <span class="char-role">草原牧民信使女</span>
      </div>
    </a>
    
    <a href="./墨岚/" class="char-item offset-2" data-char="墨岚">
      <div class="char-img" style="background-position: 75% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">西夏</span>
        <span class="char-role">黑水城女文书吏</span>
      </div>
    </a>
    
    <a href="./茶岑/" class="char-item offset-3" data-char="茶岑">
      <div class="char-img" style="background-position: 100% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">大理国</span>
        <span class="char-role">茶马古道女商人</span>
      </div>
    </a>
  </div>
</div>

<style>
/* 强制隐藏 container 的所有样式 */
#content-wrapper .container {
  background: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100% !important;
  width: 100% !important;
}

#content-wrapper {
  padding: 0 !important;
}

#trajectory-line {
  display: none !important;
}

/* 生民卷暗色主题首页 - 全屏无白边 */
.shengmin-dark-page {
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0 0 100px 0;
  background: #0d0508;
  color: #d4a5a5;
  display: flex;
  flex-direction: column;
}

.shengmin-header {
  text-align: center;
  padding: 40px 20px;
}

.shengmin-header h1 {
  font-family: "Songti SC", serif;
  font-size: 2.5rem;
  color: #c9a86c;
  letter-spacing: 16px;
  margin-bottom: 10px;
  font-weight: 400;
}

.shengmin-header p {
  color: #8b6b6b;
  font-size: 0.9rem;
  letter-spacing: 4px;
}

/* 横向一排布局，十个图错开 */
.character-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 80px 60px 140px;
  overflow-x: auto;
  overflow-y: visible;
  min-height: 500px;
}

.char-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  flex-shrink: 0;
  width: 100px;
  position: relative;
}

.char-item:hover {
  transform: translateY(-10px);
}

/* 黑色遮罩 - 未选中时显示 */
.char-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 380px;
  background: rgba(0, 0, 0, 0.3);
  z-index: 3;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

/* hover时去掉遮罩 */
.char-item:hover::after {
  opacity: 0;
}

/* 错开位置 - 波浪形 */
.char-item.offset-1 { margin-top: 40px; }
.char-item.offset-2 { margin-top: 80px; }
.char-item.offset-3 { margin-top: 120px; }

.char-img {
  width: 100px;
  height: 380px;
  background-image: url('https://relhigh.github.io/hirarchealogy/assets/characters.png');
  background-size: 500% 200%;
  background-repeat: no-repeat;
  border: none;
  border-radius: 0;
  background-color: transparent;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.char-item:hover .char-img {
  filter: none;
}

.char-info {
  margin-top: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.char-dynasty {
  font-size: 0.75rem;
  color: #8b6b6b;
  letter-spacing: 2px;
}

.char-role {
  font-size: 0.9rem;
  color: #c9a86c;
  font-weight: 500;
  white-space: nowrap;
}

.char-item:hover .char-role {
  color: #e8c88a;
}

/* 响应式 */
@media (max-width: 1000px) {
  .character-row {
    gap: 25px;
  }
  .char-item {
    width: 85px;
  }
  .char-img {
    width: 85px;
    height: 323px;
  }
}

@media (max-width: 800px) {
  .character-row {
    gap: 20px;
    padding: 40px 30px 100px;
  }
  .char-item {
    width: 75px;
  }
  .char-img {
    width: 75px;
    height: 285px;
  }
}

@media (max-width: 600px) {
  .shengmin-header h1 {
    font-size: 1.8rem;
    letter-spacing: 8px;
  }
  .character-row {
    gap: 15px;
    padding: 30px 20px 80px;
  }
  .char-item {
    width: 60px;
  }
  .char-img {
    width: 60px;
    height: 228px;
  }
  .char-info {
    margin-top: 12px;
  }
  .char-role {
    font-size: 0.75rem;
  }
  .char-dynasty {
    font-size: 0.65rem;
  }
}
</style>
