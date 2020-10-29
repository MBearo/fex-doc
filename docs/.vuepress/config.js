module.exports = {
    title: 'FEX-DOC', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: 'FEX系统介绍', // meta 中的描述文字，用于SEO
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
                ariaLabel: '项目',
                items: [
                    { text: 'GLS', link: '/pages/components/basic/normalText.md' },
                    { text: '其他1', link: '/pages/folder1/test1.md' },
                    { text: '其他2', link: '/pages/folder2/test4.md' },
                ]
            },
            { text: 'Github', link: 'https://github.com/dwanda' },
        ],
        sidebar: {
            '/pages/components/':[
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
                                    ['basic/normalText.md', '普通文本'],
                                    ['basic/title.md', '标题'],
                                    ['basic/linkText.md', '标签文本'],
                                    ['basic/richText.md', '富文本组件'],
                                    ['basic/countDown.md', '倒计时'],
                                    ['basic/divide.md', '分割线'],
                                    ['basic/image.md', '图片'],
                                    ['basic/swiper.md', '轮播图'],
                                    ['basic/swiperWithText.md', '带文字轮播图'],
                                    ['basic/anchor.md', '导航锚点型'],
                                    ['basic/hotZone.md', '热区'],
                                    ['basic/audio.md', '音频'],
                                    ['basic/shortVideo.md', '短视频'],
                                    ['basic/nav.md', '标签卡'],
                                ]
                        },
                        {
                            title: 'HIGO 组件',
                            collapsable: true,
                            sidebarDepth: 0,    // 可选的, 默认值是 1
                            children: [
                                ['higo/messageBoard.md', '留言板'],
                                ['higo/productList.md', '商品列表'],
                                ['higo/imageWithSingleProduct.md', '图片 + 单品'],
                                ['higo/imageWithText.md', '图片 + 文字'],
                                ['higo/relatedHotSpots.md', '相关热点'],
                                ['higo/normalCoupon.md', '普通优惠券'],
                                ['higo/threeColumnCoupon.md', '三列单品带优惠券'],
                                ['higo/couponGroup.md', '优惠券组'],
                            ]
                        },
                        {
                            title: 'V.O/1.0',
                            collapsable: true,
                            sidebarDepth: 0,    // 可选的, 默认值是 1
                            children: [
                                ['vo/singleProduct.md', 'VO单品'],
                                ['vo/imageDivide.md', '裁图分割线']
                            ]
                        },
                        {
                            title: '竞包',
                            collapsable: true,
                            sidebarDepth: 0,    // 可选的, 默认值是 1
                            children: [
                                ['stockX/stockXProductList.md', 'stockX商品列表']
                            ]
                        },
                        {
                            title: '小着',
                            collapsable: true,
                            sidebarDepth: 0,    // 可选的, 默认值是 1
                            children: [
                                ['xiaoZhuo/product.md', '小着横滑商品组件'],
                                ['xiaoZhuo/userInfo.md', '小着个人信息']
                            ]
                        }
                    ]
                },

            ],
            '/pages/folder1/':[
                {
                    title: '测试菜单1',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['test1.md', '子菜单1'],
                        ['test3.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['test2.md', '子菜单1']
                    ]
                }
            ],

        }
    }
}
