// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // -----------------------------------------------------------
  // 1. 网站基本信息 (修改这里)
  // -----------------------------------------------------------
  title: '汇聚大众智慧的体育知识库', // <--- 修改：你的网站名字
  tagline: '热血 | 激情 | 冠军', // <--- 修改：你的口号
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // -----------------------------------------------------------
  // 2. 部署关键配置 (★★★ 最重要，必须修改 ★★★)
  // -----------------------------------------------------------

  // 修改：你的 GitHub Pages 域名
  url: 'https://ChiuYi0912.github.io',

  // 保持你刚才改对的设置
  baseUrl: '/bsu-sports-wiki/',

  // 修改：你的 GitHub 用户名 (不要留 facebook)
  organizationName: 'ChiuYi0912',

  // 修改：你的仓库名 (不要留 docusaurus)
  projectName: 'bsu-sports-wiki',

  // -----------------------------------------------------------

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          //editUrl: 'https://github.com/YOUR_GITHUB_USERNAME/my-sports-site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          //editUrl: 'https://github.com/YOUR_GITHUB_USERNAME/my-sports-site/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '体育共建社区',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [

          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '全部文章',
          },
          /* 
          {
            to: '/docs/philosophy/core-values', 
            label: '体育理念',
            position: 'left',
          },
          {
            to: '/docs/training/warm-up',
            label: '训练经验',
            position: 'left',
          }, 
          */

          //{ to: '/blog', label: '社区动态', position: 'left' },
          {
            href: 'https://github.com/ChiuYi0912/bsu-sports-wiki',
            label: '去GitHub投稿',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '栏目',
            items: [
              {
                label: '全部文章',
                to: '/docs/main',
              },
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: '邮箱:3360625360@qq.com',
                href: 'mailto:3360625360@qq.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Sports Site. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;