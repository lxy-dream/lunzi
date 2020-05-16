module.exports = {
    title: '柚子 UI',
    description: '一个小清新的UI框架',
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '文档',
                link: '/guide/'
            },
            {
                text: '交流',
                link: 'https://baidu.com'
            },
        ],
        sidebar: [{
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },

            {
                title: '组件',
                children: ['/components/button']
            },

        ]
    }
}