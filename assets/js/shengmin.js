// 生民卷功能模块

const Shengmin = {
  // 存储所有人物的收藏数据
  storageKey: 'hr_shengmin_collections',
  
  init: function() {
    this.setupNodeClick();
    this.renderCollection();
  },
  
  // 设置节点点击收藏
  setupNodeClick: function() {
    document.querySelectorAll('.story-chapter a').forEach(link => {
      link.addEventListener('click', (e) => {
        const nodeName = link.textContent.replace(/\[\[|\]\]/g, '');
        const isRelic = link.classList.contains('relic-tag');
        this.collectItem(nodeName, isRelic);
        
        // 视觉反馈
        link.style.background = 'rgba(128,0,32,0.1)';
        setTimeout(() => {
          link.style.background = '';
        }, 300);
      });
    });
  },
  
  // 收藏项目
  collectItem: function(name, isRelic) {
    const collections = this.getCollections();
    const currentChar = this.storyData?.character || 'unknown';
    
    if (!collections[currentChar]) {
      collections[currentChar] = { nodes: [], relics: [] };
    }
    
    const list = isRelic ? collections[currentChar].relics : collections[currentChar].nodes;
    if (!list.includes(name)) {
      list.push(name);
      localStorage.setItem(this.storageKey, JSON.stringify(collections));
      this.renderCollection();
    }
  },
  
  // 获取收藏数据
  getCollections: function() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : {};
  },
  
  // 渲染收藏区域
  renderCollection: function() {
    const collections = this.getCollections();
    const currentChar = this.storyData?.character;
    if (!currentChar) return;
    
    const charData = collections[currentChar] || { nodes: [], relics: [] };
    
    // 渲染节点
    const nodesContainer = document.getElementById('nodes-lit');
    if (nodesContainer && this.storyData?.nodes) {
      nodesContainer.innerHTML = this.storyData.nodes.map(node => {
        const isLit = charData.nodes.includes(node);
        return `<span class="collected-item ${isLit ? 'lit' : ''}">${node}</span>`;
      }).join('');
    }
    
    // 渲染文物
    const relicsContainer = document.getElementById('relics-lit');
    if (relicsContainer && this.storyData?.relics) {
      relicsContainer.innerHTML = this.storyData.relics.map(relic => {
        const isLit = charData.relics.includes(relic);
        return `<span class="collected-item relic ${isLit ? 'lit' : ''}">${relic}</span>`;
      }).join('');
    }
  },
  
  // 导出图片
  exportImage: function() {
    // 使用 html-to-image 生成证书
    const certificate = document.createElement('div');
    certificate.style.cssText = `
      width: 800px; padding: 60px; background: linear-gradient(135deg, #f0ede4, #fff);
      font-family: "Songti SC", serif; text-align: center;
    `;
    
    const collections = this.getCollections();
    const currentChar = this.storyData?.character;
    const charData = collections[currentChar] || { nodes: [], relics: [] };
    
    certificate.innerHTML = `
      <h1 style="color: #800020; font-size: 2.5rem; margin-bottom: 20px;">生民卷 · 探索证书</h1>
      <p style="font-size: 1.2rem; color: #666; margin-bottom: 40px;">
        通过「${currentChar}」的探索之旅
      </p>
      <div style="display: flex; justify-content: center; gap: 60px; margin: 40px 0;">
        <div>
          <p style="font-size: 2rem; color: #800020; font-weight: bold;">${charData.nodes.length}</p>
          <p style="color: #888;">主题节点</p>
        </div>
        <div>
          <p style="font-size: 2rem; color: #8B4513; font-weight: bold;">${charData.relics.length}</p>
          <p style="color: #888;">历史文物</p>
        </div>
      </div>
      <p style="color: #999; font-size: 0.9rem; margin-top: 40px;">
        ${new Date().toLocaleDateString('zh-CN')}
      </p>
    `;
    
    document.body.appendChild(certificate);
    
    // 使用 html-to-image 库（需要先引入）
    if (window.htmlToImage) {
      htmlToImage.toPng(certificate).then(dataUrl => {
        const link = document.createElement('a');
        link.download = `生民卷-${currentChar}-探索证书.png`;
        link.href = dataUrl;
        link.click();
        certificate.remove();
      });
    } else {
      alert('图片生成功能需要加载 html-to-image 库');
      certificate.remove();
    }
  },
  
  // 导出分享链接
  exportLink: function() {
    const collections = this.getCollections();
    const dataStr = btoa(JSON.stringify(collections));
    const url = `${window.location.origin}${window.location.pathname}?data=${dataStr}`;
    
    navigator.clipboard.writeText(url).then(() => {
      alert('分享链接已复制到剪贴板');
    }).catch(() => {
      prompt('请复制以下链接：', url);
    });
  }
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.story-page')) {
    Shengmin.init();
  }
});
