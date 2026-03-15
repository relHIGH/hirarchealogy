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
/* 生民卷暗色主题首页 */
.shengmin-dark-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #1a0a0f 0%, #0d0508 100%);
  padding: 60px 40px;
  color: #d4a5a5;
}

.shengmin-header {
  text-align: center;
  margin-bottom: 60px;
}

.shengmin-header h1 {
  font-family: "Songti SC", serif;
  font-size: 2.5rem;
  color: #c9a86c;
  letter-spacing: 12px;
  margin-bottom: 15px;
  font-weight: 400;
}

.shengmin-header p {
  color: #8b6b6b;
  font-size: 0.9rem;
  letter-spacing: 4px;
}

/* 横向长条流式布局 */
.character-flow {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 15px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}

.char-strip {
  display: flex;
  flex-direction: column;
  width: 100px;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.char-strip:hover {
  transform: translateY(-8px);
}

.char-strip.offset-down {
  margin-top: 40px;
}

.char-img {
  width: 100px;
  height: 200px;
  background-image: url('https://relhigh.github.io/hirarchealogy/assets/characters.png');
  background-size: 500% 200%;
  border-radius: 4px;
  border: 1px solid rgba(201, 168, 108, 0.2);
  transition: all 0.4s;
  filter: grayscale(30%) brightness(0.9);
}

.char-strip:hover .char-img {
  filter: grayscale(0%) brightness(1);
  border-color: rgba(201, 168, 108, 0.5);
  box-shadow: 0 10px 40px rgba(128, 0, 32, 0.4);
}

.char-meta {
  margin-top: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-dynasty {
  font-size: 0.7rem;
  color: #8b6b6b;
  letter-spacing: 2px;
}

.meta-name {
  font-size: 1.1rem;
  font-family: "Songti SC", serif;
  color: #c9a86c;
  font-weight: 500;
}

.meta-role {
  font-size: 0.75rem;
  color: #6b5050;
}

.char-strip:hover .meta-name {
  color: #e8c88a;
}

/* 响应式 */
@media (max-width: 900px) {
  .character-flow {
    gap: 15px 10px;
  }
  .char-strip, .char-img {
    width: 80px;
  }
  .char-img {
    height: 160px;
  }
  .char-strip.offset-down {
    margin-top: 30px;
  }
}

@media (max-width: 600px) {
  .shengmin-dark-page {
    padding: 40px 20px;
  }
  .character-flow {
    gap: 12px 8px;
  }
  .char-strip, .char-img {
    width: 70px;
  }
  .char-img {
    height: 140px;
  }
}
</style>
