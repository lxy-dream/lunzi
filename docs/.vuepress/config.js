module.exports = {
    title: '柚子 UI',
    description: '一个小清新的UI框架',
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '博客',
                link: 'https://www.jianshu.com/u/d8eb62398b35'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/'
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
                children: [
                    '/component/button',
                    '/component/tabs',
                    '/component/input',
                    '/component/grid',
                    '/component/layout',
                    '/component/toast',
                    '/component/popover',
                ]
            },

        ]
    }
}