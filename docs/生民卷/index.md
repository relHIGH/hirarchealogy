---
layout: default
title: 生民卷
---

<div class="shengmin-dark-page">
  <div class="shengmin-header">
    <h1>生民卷</h1>
    <p>以人物为线索，探索古代生活</p>
  </div>
  
  <div class="character-flow">
    <!-- 第一行 - 正常位置 -->
    <a href="./炉青/" class="char-strip" data-char="炉青">
      <div class="char-img" style="background-position: 0% 0%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">战国</span>
        <span class="meta-name">炉青</span>
        <span class="meta-role">冶铁作坊之女</span>
      </div>
    </a>
    
    <a href="./衡羽/" class="char-strip offset-down" data-char="衡羽">
      <div class="char-img" style="background-position: 25% 0%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">秦</span>
        <span class="meta-name">衡羽</span>
        <span class="meta-role">咸阳驿舍女管事</span>
      </div>
    </a>
    
    <a href="./禾宁/" class="char-strip" data-char="禾宁">
      <div class="char-img" style="background-position: 50% 0%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">汉</span>
        <span class="meta-name">禾宁</span>
        <span class="meta-role">河西屯田女户</span>
      </div>
    </a>
    
    <a href="./石兰/" class="char-strip offset-down" data-char="石兰">
      <div class="char-img" style="background-position: 75% 0%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">北魏</span>
        <span class="meta-name">石兰</span>
        <span class="meta-role">云冈石窟女石匠</span>
      </div>
    </a>
    
    <a href="./月珑/" class="char-strip" data-char="月珑">
      <div class="char-img" style="background-position: 100% 0%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">唐</span>
        <span class="meta-name">月珑</span>
        <span class="meta-role">长安胡商之妻</span>
      </div>
    </a>
    
    <!-- 第二行 - 交错 -->
    <a href="./潮音/" class="char-strip offset-down" data-char="潮音">
      <div class="char-img" style="background-position: 0% 100%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">五代十国</span>
        <span class="meta-name">潮音</span>
        <span class="meta-role">吴越运河船家女</span>
      </div>
    </a>
    
    <a href="./清弦/" class="char-strip" data-char="清弦">
      <div class="char-img" style="background-position: 25% 100%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">宋</span>
        <span class="meta-name">清弦</span>
        <span class="meta-role">汴梁瓦舍女艺人</span>
      </div>
    </a>
    
    <a href="./骁雪/" class="char-strip offset-down" data-char="骁雪">
      <div class="char-img" style="background-position: 50% 100%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">辽</span>
        <span class="meta-name">骁雪</span>
        <span class="meta-role">草原牧民信使女</span>
      </div>
    </a>
    
    <a href="./墨岚/" class="char-strip" data-char="墨岚">
      <div class="char-img" style="background-position: 75% 100%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">西夏</span>
        <span class="meta-name">墨岚</span>
        <span class="meta-role">黑水城女文书吏</span>
      </div>
    </a>
    
    <a href="./茶岑/" class="char-strip offset-down" data-char="茶岑">
      <div class="char-img" style="background-position: 100% 100%;"></div>
      <div class="char-meta">
        <span class="meta-dynasty">大理国</span>
        <span class="meta-name">茶岑</span>
        <span class="meta-role">茶马古道女商人</span>
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

/* 生民卷暗色主题首页 - 真正全屏 */
.shengmin-dark-page {
  min-height: calc(100vh - 60px);
  width: 100vw;
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #1a0a0f 0%, #0d0508 100%);
  color: #d4a5a5;
}

.shengmin-header {
  text-align: center;
  padding: 60px 40px 40px;
}

.shengmin-header h1 {
  font-family: "Songti SC", serif;
  font-size: 3rem;
  color: #c9a86c;
  letter-spacing: 16px;
  margin-bottom: 20px;
  font-weight: 400;
}

.shengmin-header p {
  color: #8b6b6b;
  font-size: 1rem;
  letter-spacing: 6px;
}

/* 横向长条流式布局 - 全屏 */
.character-flow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 30px 40px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 40px 60px 80px;
  box-sizing: border-box;
}

.char-strip {
  display: flex;
  flex-direction: column;
  width: 140px;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.char-strip:hover {
  transform: translateY(-12px);
}

.char-strip.offset-down {
  margin-top: 80px;
}

.char-img {
  width: 140px;
  height: 280px;
  background-image: url('https://relhigh.github.io/hirarchealogy/assets/characters.png');
  background-size: 500% 200%;
  border-radius: 6px;
  border: 1px solid rgba(201, 168, 108, 0.2);
  transition: all 0.4s;
  filter: grayscale(30%) brightness(0.9);
}

.char-strip:hover .char-img {
  filter: grayscale(0%) brightness(1);
  border-color: rgba(201, 168, 108, 0.5);
  box-shadow: 0 20px 60px rgba(128, 0, 32, 0.5);
}

.char-meta {
  margin-top: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.meta-dynasty {
  font-size: 0.8rem;
  color: #8b6b6b;
  letter-spacing: 3px;
}

.meta-name {
  font-size: 1.4rem;
  font-family: "Songti SC", serif;
  color: #c9a86c;
  font-weight: 500;
}

.meta-role {
  font-size: 0.85rem;
  color: #6b5050;
}

.char-strip:hover .meta-name {
  color: #e8c88a;
}

/* 响应式 */
@media (max-width: 1200px) {
  .character-flow {
    gap: 25px 30px;
    padding: 40px;
  }
  .char-strip, .char-img {
    width: 120px;
  }
  .char-img {
    height: 240px;
  }
  .char-strip.offset-down {
    margin-top: 60px;
  }
}

@media (max-width: 900px) {
  .character-flow {
    gap: 20px 25px;
    padding: 30px;
  }
  .char-strip, .char-img {
    width: 100px;
  }
  .char-img {
    height: 200px;
  }
  .char-strip.offset-down {
    margin-top: 50px;
  }
  .shengmin-header h1 {
    font-size: 2rem;
    letter-spacing: 10px;
  }
}

@media (max-width: 600px) {
  .character-flow {
    gap: 15px 20px;
    padding: 20px;
  }
  .char-strip, .char-img {
    width: 80px;
  }
  .char-img {
    height: 160px;
  }
  .char-strip.offset-down {
    margin-top: 40px;
  }
  .shengmin-header {
    padding: 40px 20px 30px;
  }
  .shengmin-header h1 {
    font-size: 1.6rem;
    letter-spacing: 6px;
  }
}
</style>
