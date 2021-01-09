//引入http模块
let http = require('http');
//创建server对象
let server = http.createServer()
//引入path模块
let path = require('path')
//引入文件模块
let fs = require('fs')

// 客户端获取文档是单独一次请求，获取图片也是单独一次请求，获取css文件也是单独一次请求


//监听客户端发送过来的请求
//req请求对象包含了请求的相关的信息
//res对象用于响应内容，可以通过这个对象帮助我们快速实现HTTP响应
server.on('request', function (req, res) {
    console.log('请求一次')
    //解析路径
    let urlObj = path.parse(req.url)
    //识别请求的路径
    console.log(urlObj)
    //进入首页，返回首页的内容
    if (req.url == "/") {
        res.setHeader("content-type", "text/html;charset=utf-8")
        res.end(`<link rel="stylesheet" href="./static/style.css"><h1>首页</h1><img src='./static/cxk.jpg'>`)
    } else if (urlObj.dir == '/static') {/* 判断是否请求静态文件 */
        //根据请求的后缀名，返回文件的类型
        res.setHeader("content-type", getContentType(urlObj.ext))
        //从服务器磁盘中读取文件，并输出到响应对象中
        let rs = fs.createReadStream('./static/' + urlObj.base)
        rs.on('data', () => console.log('读取中'))
        rs.pipe(res)/* 把读取的东西放入res里？ */
    } else {

        res.setHeader("content-type", "text/html;charset=utf-8")
        res.end("<h1>404页面找不到</h1>")
    }
})




function getContentType(extName) {
    switch (extName) {
        case ".jpg":
            return "image/jpeg";
        case ".html":
            return "text/html;charset=utf-8";
        case ".js":
            return "text/javascript;charset=utf-8";
        case ".json":
            return "text/json;charset=utf-8";
        case ".gif":
            return "image/gif";
        case ".css":
            return "text/css";
    }
}
//启动服务器，监听服务端口
server.listen(80, function () {
    console.log("服务已启动：http:127.0.0.1")
})