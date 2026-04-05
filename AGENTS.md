# AGENTS.md - 古戳戳 (Anti Chuo)

## 项目概述

古戳戳（Anti Chuo）是一个基于 Jekyll 的静态网站，专注于中国古代文化与考古知识的知识库系统。

- **项目名称**: 古戳戳 / Anti Chuo
- **副标题**: 戳一下，探古趣
- **技术栈**: Jekyll + Liquid + Vanilla JavaScript + 自定义 CSS
- **部署地址**: https://relhigh.github.io/antichuo
- **语言**: 中文（zh-CN）

### 核心理念

网站采用"考古式探索"的交互理念，用户通过点击"球体门户"（Orb）层层深入探索古代文化的不同维度。四个核心主题：

- **旅** (古代旅行): 行、路、驿、游、记 - 古代交通与旅行方式
- **戏** (戏剧艺术): 曲、台、伶、剧 - 传统戏曲与表演
- **饮** (饮品文化): 茶、酒、器、礼 - 饮茶饮酒礼仪
- **感** (感知世界): 情、境、忆、悟 - 情感与意境

## 技术架构

### 构建系统

本项目使用 **Jekyll** 作为静态站点生成器：

```yaml
# _config.yml
baseurl: /antichuo
url: https://relHIGH.github.io
```

**本地开发命令**:

```bash
# 启动 Jekyll 开发服务器
bundle exec jekyll serve

# 构建站点（生成 _site 目录）
bundle exec jekyll build

#  drafts 和 future 文章
bundle exec jekyll serve --drafts --future
```

### 目录结构

```
/
├── _config.yml           # Jekyll 配置
├── _layouts/
│   └── default.html      # 唯一布局模板（含所有 CSS/JS）
├── docs/                 # 核心内容目录（100+ Markdown 文件）
│   ├── 古代旅行/          # 旅主题
│   ├── 戏/               # 戏主题
│   ├── 饮/               # 饮主题
│   ├── 感/               # 感主题
│   └── 生民卷/           # 10个互动人物故事
├── assets/
│   ├── css/
│   │   └── shengmin.css  # 生民卷专用样式
│   ├── js/
│   │   └── shengmin.js   # 生民卷收藏功能
│   ├── images/           # 图片资源
│   └── graph_data.json   # 关系图谱数据
├── skills/               # OpenClaw 技能模块
│   └── openspec-a2a/     # 跨 Agent 任务接力
├── visual_check/         # 调试截图（可忽略）
├── index.md              # 首页（四球门户）
├── graph.md              # 关系图谱页面
└── tags.md               # 标签检索页面
```

### 关键技术特点

1. **单文件架构**: 所有 CSS 和 JavaScript 都内嵌在 `_layouts/default.html` 中
2. **无构建工具**: 不使用 Webpack、Vite 等现代构建工具
3. **纯原生 JS**: 不使用 React/Vue 等框架
4. **CDN 依赖**: 关系图谱使用 `unpkg.com/force-graph`
5. **LocalStorage**: 用户进度、收藏数据存储在浏览器本地

## 内容组织规范

### Markdown 文件格式

所有内容文件必须包含 Front Matter：

```yaml
---
layout: default
title: 页面标题
---
```

### 层级结构

内容采用三级层级：

```
主题 (如: docs/古代旅行/)
  └── 子分类 (如: docs/古代旅行/行/)
        └── 文章 (如: docs/古代旅行/行/徒行.md)
```

### Wiki 链接语法

内部链接使用双括号语法，会在渲染时自动转换为链接：

```markdown
[[目标页面|显示文本]]
[[徒行]]           # 简单链接
[[徒行|步行]]       # 带自定义文本
```

JS 处理代码在 `_layouts/default.html` 的 `setupWikiLinks` 函数中。

## 生民卷系统

### 概述

生民卷是一个互动叙事模块，包含 10 位跨时代历史人物的互动故事：

| 人物 | 朝代 | 身份 | 文件位置 |
|------|------|------|----------|
| 炉青 | 战国 | 冶铁作坊匠人 | docs/生民卷/炉青/ |
| 衡羽 | 秦 | 咸阳驿舍管事 | docs/生民卷/衡羽/ |
| 禾宁 | 汉 | 河西屯田农户 | docs/生民卷/禾宁/ |
| 石兰 | 北魏 | 云冈石窟石匠 | docs/生民卷/石兰/ |
| 月珑 | 唐 | 长安胡商 | docs/生民卷/月珑/ |
| 潮音 | 五代十国 | 吴越运河船家 | docs/生民卷/潮音/ |
| 清弦 | 宋 | 汴梁瓦舍艺人 | docs/生民卷/清弦/ |
| 骁雪 | 辽 | 草原牧民信使 | docs/生民卷/骁雪/ |
| 墨岚 | 西夏 | 黑水城文书吏 | docs/生民卷/墨岚/ |
| 茶岑 | 大理国 | 茶马古道商人 | docs/生民卷/茶岑/ |

### 人物 Sprite 图

10 个人物头像合并为一张 sprite 图：

```css
/* assets/css/shengmin.css */
.char-portrait {
  background-image: url('{{ site.baseurl }}/assets/characters.png');
  background-size: 500% 200%; /* 5列 x 2行 = 10个人物 */
  width: 100px;
  height: 143px;
}
```

背景位置计算：
- 第1行: 0% 0%, 25% 0%, 50% 0%, 75% 0%, 100% 0%
- 第2行: 0% 100%, 25% 100%, 50% 100%, 75% 100%, 100% 100%

### 收藏系统

每个故事包含可点击的：
- **主题节点**: 与四大主题相关的关键词
- **历史文物**: 具体的考古文物

用户点击后通过 `assets/js/shengmin.js` 存储到 LocalStorage：

```javascript
const Shengmin = {
  storageKey: 'hr_shengmin_collections',
  // ...
}
```

## 核心交互功能

### 1. 轨迹线 (Trajectory Line)

记录用户导航历史，显示在内容页顶部：

- 最多显示 8 个节点
- 实心点 = 层级导航，空心点 = 网状跳转
- 数据存储在 `sessionStorage.getItem('hr_nav_chain')`

### 2. 开屏仪式

首页首次访问时的交互：

1. **闪屏页**: "EXPLORE THE DEPTHS" 渐变背景
2. **印章仪式**: 四个汉字（旅/戏/饮/感）快速轮换，最后停在随机主题
3. 完成仪式后跳转到对应主题

状态存储：
- `sessionStorage.hr_splashed` - 是否已显示闪屏
- `sessionStorage.hr_ritual_done` - 是否已完成仪式

### 3. 关系图谱

使用 `force-graph` 库渲染页面关系网络：

- 数据源: `assets/graph_data.json`
- 控制台可调节：节点颜色、连线强度、标签显示
- 点击节点可跳转到对应页面

### 4. 发现区域 (Discovery)

非首页底部显示相关页面推荐：

```javascript
// 基于 graph_data.json 的链接关系
fetch("{{ site.baseurl }}/assets/graph_data.json")
  .then(data => {
    // 找到与当前页面相关的其他页面
    const related = data.links.filter(l => l.source === currentPage || l.target === currentPage);
  });
```

## 样式系统

### CSS 变量

```css
:root { 
  --sidebar-width: 310px;
  --sidebar-peek: 55px;
  --accent: #800020;        /* 主色调：暗红色 */
  --bg-main: #f0ede4;       /* 主背景：米黄色 */
  --card-bg: #ffffff;       /* 卡片背景 */
}
```

### 球体门户 (Portal Orb)

核心 UI 元素，圆形按钮带悬停动画：

```css
.portal-orb { 
  width: 180px; 
  height: 180px; 
  border-radius: 50%;
  border: 1.5px solid rgba(128,0,32,0.2);
  /* ... */
}
.portal-orb:hover { 
  background: var(--accent);
  box-shadow: 0 30px 60px rgba(128,0,32,0.35);
}
```

### 侧边栏

- **左侧**: 导航条（旅/戏/饮/感），默认隐藏，hover 时展开
- **右侧**: 返回按钮，点击 `window.history.back()`

侧边栏使用 SVG mask 实现不规则边缘效果。

## 开发规范

### 添加新内容

1. **创建 Markdown 文件** 在相应目录下
2. **必须包含 Front Matter**: `layout: default` 和 `title`
3. **使用 Wiki 链接**: `[[页面名]]` 链接到相关内容
4. **图片存放**: 放入 `assets/images/` 目录

### 添加新主题

如需添加第五个主题：

1. 在 `docs/` 下创建新目录
2. 在 `_layouts/default.html` 的侧边栏中添加链接
3. 在 `index.md` 首页添加新的 portal-orb
4. 更新开屏仪式的主题数组

### 修改样式

所有样式都在 `_layouts/default.html` 的 `<style>` 标签内：

- 通用样式: 内联在 default.html 中
- 生民卷专用: `assets/css/shengmin.css`

### 调试技巧

- 检查 `sessionStorage` 和 `localStorage` 查看用户状态
- 轨迹线问题检查 `hr_nav_chain` 键值
- 收藏数据在 `hr_shengmin_collections`

## 部署

### GitHub Pages 部署

项目配置为 GitHub Pages 自动部署：

```yaml
# _config.yml
baseurl: /antichuo
url: https://relHIGH.github.io
```

推送到 `main` 分支后自动构建。

### 缓存清除

修改 `_config.yml` 中的 `cache_bust` 时间戳强制刷新：

```yaml
cache_bust: 1773423000 # 更新时间戳强制全站缓存更新
```

## 依赖项

### 生产依赖

- **force-graph** (CDN): 关系图谱渲染
  ```html
  <script src="https://unpkg.com/force-graph"></script>
  ```

### 开发依赖

项目不依赖 Node.js/npm 进行构建，仅需：

- Ruby + Bundler
- Jekyll 及其依赖（通过 Gemfile 管理，但当前项目未包含 Gemfile）

## 注意事项

1. **单页布局**: 所有页面共用 `_layouts/default.html`，修改会影响全站
2. **sessionStorage 限制**: 用户数据在标签页关闭后丢失（轨迹线）
3. **LocalStorage 限制**: 收藏数据永久保存，但浏览器清理会丢失
4. **图片路径**: 生民卷使用绝对 URL 引用图片，本地开发时注意路径
5. **移动端**: 已做响应式适配，但交互元素较小屏幕需要测试

## 文件统计

- Markdown 内容文件: 约 100 个
- 生民卷人物: 10 个完整互动故事
- 主分类: 4 个（旅/戏/饮/感）
- 子分类: 每个主分类 4-5 个
- 图片资源: 人物场景图 + 冶辛故事专用图
