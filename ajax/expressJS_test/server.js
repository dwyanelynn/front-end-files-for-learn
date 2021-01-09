// 引入express
const express = require('express')

// 创建应用对象
const app = express()

// 创建路由规则
/* request是对请求报文的封装 */
/* response是对响应报文的封装 */
app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应体
    response.send('hello ajax')
})
app.all('/check-username', (request, response) => {
    let user = {
        huahua: 'huahua',
        linlin: 'linlin'
    }
    let {fnName} = request.query
    let {username} = request.query
    if (user[username]) {
        response.send(`${fnName}('用户${username}存在')`)
    } else {
        response.send(`${fnName}('用户${username}不存在')`)
    }
    // 设置响应体
})

// 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000 端口监听中')
})

