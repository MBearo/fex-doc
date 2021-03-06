// https://vuepress.vuejs.org/zh/config/
module.exports = {
  title: 'FEX-DOC', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'FEX 文档', // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],  //浏览器的标签栏的网页图标
  ],
  markdown: {
    lineNumbers: false   //是否在每个代码块的左侧显示行号
  },
  serviceWorker: true,
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'lastUpdate', // string | boolean
    displayAllHeaders: false,
    nav: [
      { text: '首页', link: '/' },
      {
        text: '项目',
        items: [
          { text: 'GLS', link: '/pages/gls/begin/start.md' },
          { text: 'OXP 0.2', link: '/pages/oxp/guide/introduction.md' },
          { text: 'Basic Component', link: '/pages/basicComponent/guide/introduction.md' },
          { text: '其他1', link: '/pages/folder1/test1.md' }
        ]
      },
      {
        text: '插件',
        items: [
          { text: '跳转', link: '/plugins/jump.md' },
          { text: '预览', link: '/plugins/explain.md' },
          { text: '流程图', link: '/plugins/flowchat.md' },
          { text: '可执行代码', link: '/plugins/code.md' },
        ]
      },
      { text: 'Gitlab', link: 'https://git.lehe.com/fex/fex-doc' },
    ],
    sidebar: {
      '/pages/gls/': [
        {
          title: 'GLS',
          collapsable: false,
          path: '/pages/gls/begin/start.html',
          sidebarDepth: 1,
          children: [
            ['begin/create.md', '搭建'],
            ['begin/preview.md', '预览'],
            ['begin/publish.md', '发布'],
            ['begin/manage.md', '管理'],
            ['begin/more.md', '更多信息'],
            {
              title: '其他',
              collapsable: false,
              path: 'begin/other.md'
            }
          ]
        },
        {
          title: '组件',
          collapsable: false,
          sidebarDepth: 0,
          children:
            [
              {
                title: '通用组件',
                collapsable: true,
                sidebarDepth: 0,
                children:
                  [
                    ['components/basic/normalText.md', '普通文本'],
                    ['components/basic/title.md', '标题'],
                    ['components/basic/linkText.md', '标签文本'],
                    ['components/basic/richText.md', '富文本组件'],
                    ['components/basic/countDown.md', '倒计时'],
                    ['components/basic/divide.md', '分割线'],
                    ['components/basic/image.md', '图片'],
                    ['components/basic/swiper.md', '轮播图'],
                    ['components/basic/swiperWithText.md', '带文字轮播图'],
                    ['components/basic/anchor.md', '导航锚点型'],
                    ['components/basic/hotZone.md', '热区'],
                    ['components/basic/audio.md', '音频'],
                    ['components/basic/shortVideo.md', '短视频'],
                    ['components/basic/nav.md', '标签卡'],
                  ]
              },
              {
                title: 'HIGO 组件',
                collapsable: true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                  ['components/higo/messageBoard.md', '留言板'],
                  ['components/higo/productList.md', '商品列表'],
                  ['components/higo/imageWithSingleProduct.md', '图片 + 单品'],
                  ['components/higo/imageWithText.md', '图片 + 文字'],
                  ['components/higo/relatedHotSpots.md', '相关热点'],
                  ['components/higo/normalCoupon.md', '普通优惠券'],
                  ['components/higo/threeColumnCoupon.md', '三列单品带优惠券'],
                  ['components/higo/couponGroup.md', '优惠券组'],
                ]
              },
              {
                title: 'V.O/1.0',
                collapsable: true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                  ['components/vo/singleProduct.md', 'VO单品'],
                  ['components/vo/imageDivide.md', '裁图分割线']
                ]
              },
              {
                title: '小着',
                collapsable: true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                  ['components/xiaoZhuo/product.md', '小着横滑商品组件'],
                  ['components/xiaoZhuo/userInfo.md', '小着个人信息']
                ]
              }
            ]
        },
        {

          title: '名词解释',
          path: '/pages/gls/explain/',

        }

      ],
      '/pages/oxp/': [
        {
          title: '指南',
          collapsable: false,
          path: '/pages/oxp/guide/introduction.md',
          sidebarDepth: 1,
          children:[]
        },
        {
          title: '术语',
          path: '/pages/oxp/trem/',
          sidebarDepth: 1,
        },
      ],
      '/pages/folder1/': [
        {
          title: '测试菜单1',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            ['test1.md', '子菜单1']
          ]
        }
      ],
      '/pages/basicComponent/':[
        {
          title: '简介',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            ['guide/introduction.md', '简介']
          ]
        },{
          title: 'BasicView',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            ['component/0.3.md', 'v0.3'],
            ['component/0.2.md', 'v0.2'],
            ['component/0.1.md', 'v0.1']
          ]
        }
      ],
      '/plugins/': [
        ['jump.md', '跳转'],
        ['explain.md', '预览'],
        ['flowchat.md', '流程图'],
        ['code.md', '可执行代码']
      ]
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    'flowchart',
    [
      'vuepress-plugin-medium-zoom',
      {
        delay: 1000,
        options: {
          margin: 24,
          background: 'rgba(0, 0, 0, 0.3)',
          scrollOffset: 0,
        },
      },
    ]
  ]
}
