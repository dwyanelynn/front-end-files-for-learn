const myApp = require('./myApp')
// 创建一个实例
let app = new myApp()
app.staticDir = '/static2' //故意搞成与实际文件夹不一致是防止别人以此找出规律来搞破坏（这里实际文件夹是static）
app.on('/', (req, res) => {
    res.end(`<link rel="stylesheet" href=".${app.staticDir}/style.css"><h1>首页</h1><img src='.${app.staticDir}/cxk.jpg'>`)
})
app.on('/gnxw', (req, res) => {
    if (req.pathObj.base === 'index' || req.pathObj.base === 'gnxw') {
        res.end('国内新闻首页')
    } else {
        res.end('国内新闻其他页面')
    }
})
app.on('/movies', (req, res) => {

    let movies = [{
            name: '小丑',
            desc: '这是小丑电影的描述，讲了关于小丑的斗争史记',
            author: 'clown',
            list: ['小明', '夏红']
        },
        {
            name: '少年的你',
            desc: '这是少年的你电影的描述，讲了关于少年的斗争史记',
            author: 'teenager',
            list: ['四字弟弟', '周冬雨']
        },
    ]
    let index = req.pathObj.base
    // 把动态的数据和模板文件拼接起来
    res.render(movies[index], './template/index.html')
})




/* 
    注意此时也可以从浏览器地址栏来输入localohost:3000/static2/abc.html 来获取abc.html这个资源从而显示在页面上
*/
app.run(3000, () => {
    console.log('已启动')
})