module.exports = {
  base: '/wheels/',
  title: '轮子UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/Derek-Dong/wheels' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/introduce/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/collapse',
          '/components/popover',
        ]
      },
    ]
  }
} 