let http = require('http')
// 创建一个服务器对象
let server = http.createServer()
// 对当前服务器对象的请求进行监听
server.on('request', (req, res) => {
    // 当服务器被请求时，会触发请求事件，并传入请求对象和响应对象;
    /* 请求对象包括请求头、请求行之类的信息 */
    console.log('请求一次')
    // 设置返回内容的种类及编码
    res.setHeader('content-type','text/html; charset=UTF-8')
    // 根据路径信息，显示不同的页面内容
    if(req.url === '/') {
        res.end('<h1>首页</h1><img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png">')
    }else if (req.url === '/gnxw') {
        res.end('国内新闻')
    } else {
        res.end('404')
    }
})

// 监听服务器所在的端口号
server.listen(3001, () => {
    // 启动监听端口号成功时，会触发
    console.log('服务器启动成功！')
})/* 但一般给用户的是80端口（80通常也是默认端口号） */