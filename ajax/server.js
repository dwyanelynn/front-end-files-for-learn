// 引入express
const { response } = require('express')
const express = require('express')
// 创建应用对象
const app = express()

// 创建路由规则
/* request是对请求报文的封装 */
/* response是对响应报文的封装 */
app.all('/server', (request, response) => {
    /* 
        如果说请求行的第二段内容，即url路径，
        是'/server'的话，那就执行后面回调函数里面的代码，
        并且由response作出响应 
    */
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    /* 响应头的名字叫做上面这一字符串，意思为设置允许跨域 */

    // 设置响应体
    response.send('hello ajax json')

})
app.all('/json-server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 响应一个数据
    const data = {
        name: 'atguigu'
    }
    /* 
        想把这个对象返回给浏览器，但不能直接放在send()里面， 
        因为send()里只能放字符串和buffer
    */
    // 对对象进行字符串转换
    let str = JSON.stringify(data)
    // 设置响应体
    response.send(str)
})
app.get('/IEcache-server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')

    // 设置响应体
    response.send('hello ie cache')
})
app.get('/timeout-server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        // 设置响应体
        response.send('afer 3s, hello error of timeout')
    }, 3000)
})
app.get('/cancel-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        response.send('after 3s, hello ajax for cancel')
    }, 3000)
})
app.get('/repeat-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        response.send('after 3s, hello ajax for cancel')
    }, 3000)
})
app.all('/jQuery-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('hello jQuery')
})
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        name: 'atguigu'
    }
    response.send(JSON.stringify(data))
})
app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        name: 'atguigu'
    }
    response.send(JSON.stringify(data))
})
app.all('/jsonp-server', (request, response) => {
    const data = {
        name: 'huahua'
    }
    // 将数据转换为字符串
    let str = JSON.stringify(data)
    response.end(`handle(${str})`)
})

// jsonp实践——检测用户名是否存在
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    let str = JSON.stringify(data)
    response.send(`handle(${str})`)
})
app.all('/cors-server', (request, response) => {
    // 设置响应头
    // response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    response.send('hello cors')
})


// 监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000 端口监听中')
})

