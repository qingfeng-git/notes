module.exports = [
    {
        title: 'Java',   // 必要的
        //   path: '/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            {title: 'JAVA基础', path: '/java/base/baseJava'}
        ]
    },
    {
        title: 'Spring',
        collapsable: true, // 可选的, 默认值是 true,
        children: [ /* ... */],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
    },
    {
        title: 'SpringCloud',
        children: [ /* ... */],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
    },
    {
        title: '数据库',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            {title: 'Redis', path: '/redis/Redis简介'},
        ]
    },
    {
        title: '中间件',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: []
    },
    {
        title: 'JVM',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            {title: 'JVM类加载机制', path: '/jvm/JVM类加载机制'},
        ]
    },
    {
        title: '设计模式',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            {title: '工厂模式', path: '/designPatterns/工厂模式'},
            {title: '原型模式', path: '/designPatterns/原型模式'},
        ]
    },
    {
        title: '其他',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
            {title: 'pom文件详细说明', path: '/other/pom文件详细说明'},
            {title: '常用正则', path: '/other/常用正则表达式'},
            {title: 'Maven配置文件', path: '/other/Maven-setting.xml 中文配置详解'}
        ]
    },
]