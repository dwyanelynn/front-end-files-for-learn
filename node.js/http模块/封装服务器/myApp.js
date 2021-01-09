let http = require('http')
let path = require('path')
let fs = require('fs')

// 创建一个服务器app的构造函数
class myApp {
    constructor() {
        this.server = http.createServer()
        // 保存一些映射关系
        this.reqEvent = {
            // '/': function() {},
            // '/static': function() {},
            // '/gnxw': function() {}
        }
        this.staticDir = '' /* 用来更改静态资源地址（注意：在实例中也可以修改） */
        this.server.on('request', (req, res) => {
            // 解析路径
            let pathObj = path.parse(req.url)
            console.log('浏览器每一次发送请求时的pathObj', pathObj)
            /* 
                这里要注意pathObj.base和.dir指的是什么就行了，然后也要了解映射关系的键名是什么
            */
            if (pathObj.dir /* +pathObj.base */ in this.reqEvent) {
                /* in:检查一个对象中是否含有特定的属性 */
                res.setHeader("content-type", "text/html;charset=utf-8")
                req.pathObj = pathObj /* △传递pathObj给req对象，以供index.js文件使用 */
                res.render = render
                this.reqEvent[pathObj.dir /* +pathObj.base */ ](req, res)
            } else if (pathObj.dir === this.staticDir) {
                res.setHeader("content-type", this.getContentType(pathObj.ext))
                let rs = fs.createReadStream('./static/' + pathObj.base)
                rs.pipe(res) /* 把读取的东西放入res里？ */
            } else {
                res.setHeader("content-type", "text/html;charset=utf-8")
                res.end('<h1>404，页面找不到</h1>')
            }
        })
    }
    on(url, fn) {
        // 添加映射关系
        this.reqEvent[url] = fn
    }
    run(port, callback) {
        this.server.listen(port, callback)
    }
    getContentType(extName) {
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
}

function render(obj, temPath) {
    // 读取模板文件的内容，这里的内容就是那些html标签
    fs.readFile(temPath, {
        encoding: 'utf-8',
        flag: 'r'
    }, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            // 读取出来后，如何定位到需要插入数据的地方(这里则需要在模板文件里做一些标识)，
            data = replaceArr(data, obj)
            data = replaceVar(data, obj)


            this.end(data) /* 这里能用this是因为用了箭头函数，即指向了res */
        }
    })
}

function replaceVar(data, obj) {
    let reg = /\{\{(.*?)\}\}/igs /* 花括号是特殊的符号，所以要转义 */
    let result
    // 匹配普通的变量 并替换
    while (result = reg.exec(data)) {
        /* 注意要清楚reg.exec()的返回值的结构 */
        let strKey = result[1].trim() /* 找到目标匹配值并去除两边的空白 */
        let strValue = obj[strKey] /* 这是将要替换成为的值 */
        // 此时是把data换成新的数据↓
        data = data.replace( /* 这是被替换的值： */ result[0], /* 这是要替换成为的值 */ strValue)
    }
    return data
}

function replaceArr(data, obj) {
    // 匹配循环的变量 并替换
    let reg = /\{\%for \{(.*?)\} \%\}(.*?)\{\%endfor\%\}/igs
    while (result = reg.exec(data)) {
        let strKey = result[1].trim()
        // 通过key值获取数组内容
        let strValueArr = obj[strKey]
        let listStr = ''
        strValueArr.forEach((item, index) => {
            // 这里其实就是“匹配普通的变量 并替换”的内容了，所以我们封装一个方法
            listStr = listStr + replaceVar(result[2], {
                item
            })
        })
        data = data.replace(result[0], listStr)
    }
    return data
}

module.exports = myApp