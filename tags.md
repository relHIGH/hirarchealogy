---
title: 标签检索中心
layout: default
---

<div id="tag-center">
  <h1 id="tag-display-title">正在加载标签...</h1>
  <hr>
  <div id="filtered-results" class="file-list">
    <!-- 结果将由 JS 动态注入 -->
  </div>
</div>

<script>
  window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const targetTag = urlParams.get('tag');
    const titleEl = document.getElementById('tag-display-title');
    const resultsEl = document.getElementById('filtered-results');

    if (!targetTag) {
      titleEl.innerText = "请选择一个标签进行检索";
      return;
    }

    titleEl.innerText = `🏷️ 包含标签 "#${targetTag}" 的笔记`;

    // 从全局变量 pages 中筛选 (已经在布局文件中通过 Liquid 注入)
    const matches = pages.filter(p => p.tags && p.tags.includes(targetTag));

    if (matches.length === 0) {
      resultsEl.innerHTML = "<p>没有找到相关笔记。</p>";
    } else {
      matches.sort((a, b) => a.name.localeCompare(b.name)).forEach(p => {
        const div = document.createElement('div');
        div.style.margin = "10px 0";
        div.innerHTML = `<a href="${p.url}" class="tree-file" style="display:inline-block; font-size: 1.1rem;">📄 ${p.name}</a>`;
        resultsEl.appendChild(div);
      });
    }
  });
</script>
