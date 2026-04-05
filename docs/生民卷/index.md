---
layout: default
title: 生民卷
---

<div class="shengmin-dark-page">
  <div class="shengmin-intro">
    <p>以人物为线索，探索古代生活</p>
    <p class="shengmin-hint">点击人物，开启时空之旅</p>
  </div>
  
  <div class="character-row">
    <a href="./炉青/" class="char-item" data-char="炉青">
      <div class="char-img" style="background-position: 0% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">战国</span>
        <span class="char-role">冶铁作坊匠人</span>
      </div>
    </a>

    <a href="./衡羽/" class="char-item offset-1" data-char="衡羽">
      <div class="char-img" style="background-position: 25% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">秦</span>
        <span class="char-role">咸阳驿舍管事</span>
      </div>
    </a>

    <a href="./禾宁/" class="char-item offset-2" data-char="禾宁">
      <div class="char-img" style="background-position: 50% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">汉</span>
        <span class="char-role">河西屯田农户</span>
      </div>
    </a>

    <a href="./石兰/" class="char-item offset-3" data-char="石兰">
      <div class="char-img" style="background-position: 75% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">北魏</span>
        <span class="char-role">云冈石窟石匠</span>
      </div>
    </a>

    <a href="./月珑/" class="char-item offset-2" data-char="月珑">
      <div class="char-img" style="background-position: 100% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">唐</span>
        <span class="char-role">长安胡商</span>
      </div>
    </a>

    <a href="./潮音/" class="char-item offset-1" data-char="潮音">
      <div class="char-img" style="background-position: 0% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">五代十国</span>
        <span class="char-role">吴越运河船家</span>
      </div>
    </a>

    <a href="./清弦/" class="char-item" data-char="清弦">
      <div class="char-img" style="background-position: 25% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">宋</span>
        <span class="char-role">汴梁瓦舍艺人</span>
      </div>
    </a>

    <a href="./骁雪/" class="char-item offset-1" data-char="骁雪">
      <div class="char-img" style="background-position: 50% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">辽</span>
        <span class="char-role">草原牧民信使</span>
      </div>
    </a>

    <a href="./墨岚/" class="char-item offset-2" data-char="墨岚">
      <div class="char-img" style="background-position: 75% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">西夏</span>
        <span class="char-role">黑水城文书吏</span>
      </div>
    </a>

    <a href="./茶岑/" class="char-item offset-3" data-char="茶岑">
      <div class="char-img" style="background-position: 100% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">大理国</span>
        <span class="char-role">茶马古道商人</span>
      </div>
    </a>
  </div>

  <div class="storage-notice">
    <p>数据仅保留在浏览器本地</p>
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
  background: #e1d7c9 !important;
}

body:has(.shengmin-dark-page) {
  background: #e1d7c9 !important;
}

body:has(.shengmin-dark-page) #trajectory-line {
  display: none !important;
}

/* 生民卷沙砾主题首页 - 全屏无白边 */
.shengmin-dark-page {
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: #e1d7c9;
  color: #3d3d3d;
  display: flex;
  flex-direction: column;
}

/* 引导文字 */
.shengmin-intro {
  text-align: center;
  padding: 25px 20px 15px;
}

.shengmin-intro p {
  font-family: "Songti SC", serif;
  font-size: 1rem;
  color: #5a4a3a;
  letter-spacing: 3px;
  margin: 0 0 8px 0;
}

.shengmin-intro .shengmin-hint {
  font-size: 0.8rem;
  color: #8a7a6a;
  letter-spacing: 2px;
  opacity: 0.7;
}

.shengmin-header {
  text-align: center;
  padding: 40px 20px;
}

.shengmin-header h1 {
  font-family: "Songti SC", serif;
  font-size: 2.5rem;
  color: #5a4a3a;
  letter-spacing: 16px;
  margin-bottom: 10px;
  font-weight: 400;
}

.shengmin-header p {
  color: #7a6a5a;
  font-size: 0.9rem;
  letter-spacing: 4px;
}

/* 横向一排布局，十个图错开 */
.character-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 40px 60px 200px;
  overflow-x: auto;
  overflow-y: visible;
  min-height: 500px;
  flex: 1;
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
  overflow: hidden;
}

.char-item:hover {
  transform: translateY(-10px);
}

/* 沙砾色遮罩 - 未选中时显示 */
.char-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 380px;
  background: rgba(225, 215, 201, 0.4);
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

/* 用伪元素覆盖边缘 */
.char-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 380px;
  border-left: 4px solid #e1d7c9;
  border-right: 4px solid #e1d7c9;
  pointer-events: none;
  z-index: 4;
}

.char-img {
  width: 100px;
  height: 380px;
  background-image: url('{{ site.baseurl }}/assets/characters.png');
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
  margin-top: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100px;
}

.char-dynasty {
  font-size: 0.7rem;
  color: #7a6a5a;
  letter-spacing: 1px;
}

.char-role {
  font-size: 0.8rem;
  color: #5a4a3a;
  font-weight: 500;
  line-height: 1.3;
  max-width: 100px;
  word-wrap: break-word;
}

.char-item:hover .char-role {
  color: #3d3d3d;
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
  .char-info {
    width: 85px;
  }
  .char-role {
    font-size: 0.75rem;
    max-width: 85px;
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
  .char-info {
    width: 75px;
  }
  .char-role {
    font-size: 0.7rem;
    max-width: 75px;
  }
}

@media (max-width: 600px) {
  .shengmin-intro p {
    font-size: 0.9rem;
    letter-spacing: 2px;
  }
  .shengmin-intro .shengmin-hint {
    font-size: 0.75rem;
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
    width: 60px;
    margin-top: 8px;
  }
  .char-dynasty {
    font-size: 0.65rem;
  }
  .char-role {
    font-size: 0.65rem;
    max-width: 60px;
  }
}

/* 数据存储提示 */
.storage-notice {
  text-align: center;
  padding: 10px 20px;
  margin-top: -40px;
}

.storage-notice p {
  font-size: 0.7rem;
  color: #b0a090;
  letter-spacing: 1px;
  opacity: 0.6;
}
</style>
