import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hirarchealogy',
  tagline: '知识库：古文化、层次结构与探索',
  favicon: 'img/favicon.ico',

  // 这里的 URL 是你的 GitHub Pages 地址
  url: 'https://relHIGH.github.io',
  baseUrl: '/hirarchealogy/',

  // GitHub 部署配置
  organizationName: 'relHIGH', // 你的 GitHub 用户名
  projectName: 'hirarchealogy', // 你的仓库名
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // 将文档设为首页
        },
        blog: false, // 暂时禁用博客功能，专注于知识库
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Hirarchealogy',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '知识库',
        },
        {
          href: 'https://github.com/relHIGH/hirarchealogy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Hirarchealogy. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
