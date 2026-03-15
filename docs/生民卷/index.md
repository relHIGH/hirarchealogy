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
        <span class="char-name">炉青</span>
      </div>
    </a>
    
    <a href="./衡羽/" class="char-item offset-1" data-char="衡羽">
      <div class="char-img" style="background-position: 25% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">秦</span>
        <span class="char-name">衡羽</span>
      </div>
    </a>
    
    <a href="./禾宁/" class="char-item offset-2" data-char="禾宁">
      <div class="char-img" style="background-position: 50% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">汉</span>
        <span class="char-name">禾宁</span>
      </div>
    </a>
    
    <a href="./石兰/" class="char-item offset-3" data-char="石兰">
      <div class="char-img" style="background-position: 75% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">北魏</span>
        <span class="char-name">石兰</span>
      </div>
    </a>
    
    <a href="./月珑/" class="char-item offset-2" data-char="月珑">
      <div class="char-img" style="background-position: 100% 0%;"></div>
      <div class="char-info">
        <span class="char-dynasty">唐</span>
        <span class="char-name">月珑</span>
      </div>
    </a>
    
    <a href="./潮音/" class="char-item offset-1" data-char="潮音">
      <div class="char-img" style="background-position: 0% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">五代十国</span>
        <span class="char-name">潮音</span>
      </div>
    </a>
    
    <a href="./清弦/" class="char-item" data-char="清弦">
      <div class="char-img" style="background-position: 25% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">宋</span>
        <span class="char-name">清弦</span>
      </div>
    </a>
    
    <a href="./骁雪/" class="char-item offset-1" data-char="骁雪">
      <div class="char-img" style="background-position: 50% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">辽</span>
        <span class="char-name">骁雪</span>
      </div>
    </a>
    
    <a href="./墨岚/" class="char-item offset-2" data-char="墨岚">
      <div class="char-img" style="background-position: 75% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">西夏</span>
        <span class="char-name">墨岚</span>
      </div>
    </a>
    
    <a href="./茶岑/" class="char-item offset-3" data-char="茶岑">
      <div class="char-img" style="background-position: 100% 100%;"></div>
      <div class="char-info">
        <span class="char-dynasty">大理国</span>
        <span class="char-name">茶岑</span>
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

/* 生民卷暗色主题首页 */
.shengmin-dark-page {
  min-height: calc(100vh - 60px);
  width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #1a0a0f 0%, #0d0508 100%);
  color: #d4a5a5;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  gap: 10px;
  padding: 40px 20px 80px;
  overflow-x: auto;
}

.char-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  flex-shrink: 0;
}

.char-item:hover {
  transform: translateY(-10px);
}

/* 错开位置 - 波浪形 */
.char-item.offset-1 { margin-top: 40px; }
.char-item.offset-2 { margin-top: 80px; }
.char-item.offset-3 { margin-top: 120px; }

.char-img {
  width: 80px;
  height: 300px;
  background-image: url('https://relhigh.github.io/hirarchealogy/assets/characters.png');
  background-size: 500% 200%;
  border: none;
  border-radius: 0;
  background-color: transparent;
  transition: all 0.3s ease;
}

.char-item:hover .char-img {
  filter: brightness(1.2);
}

.char-info {
  margin-top: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.char-dynasty {
  font-size: 0.7rem;
  color: #8b6b6b;
  letter-spacing: 1px;
}

.char-name {
  font-size: 1rem;
  font-family: "Songti SC", serif;
  color: #c9a86c;
  font-weight: 500;
}

.char-item:hover .char-name {
  color: #e8c88a;
}

/* 响应式 */
@media (max-width: 1000px) {
  .char-img {
    width: 70px;
    height: 262px;
  }
  .character-row {
    gap: 8px;
  }
}

@media (max-width: 800px) {
  .char-img {
    width: 60px;
    height: 225px;
  }
  .char-item.offset-1 { margin-top: 30px; }
  .char-item.offset-2 { margin-top: 60px; }
  .char-item.offset-3 { margin-top: 90px; }
}

@media (max-width: 600px) {
  .shengmin-header h1 {
    font-size: 1.8rem;
    letter-spacing: 8px;
  }
  .char-img {
    width: 50px;
    height: 187px;
  }
  .char-info {
    margin-top: 8px;
  }
  .char-name {
    font-size: 0.85rem;
  }
  .char-dynasty {
    font-size: 0.6rem;
  }
}
</style>
