// 流式文件写入
let fs = require('fs')
//创建一个可写流
let ws = fs.createWriteStream(__dirname + '/hello4.txt')
// 通过ws向文件中输出内容
ws.write('通过可写流创建的内容1')
ws.write('通过可写流创建的内容2')
ws.write('通过可写流创建的内容3')
ws.write('通过可写流创建的内容4')/* 可以一直写 */
// 监听是否流是否打开与关闭
ws.once('open', function() {
    console.log('流打开了')
})
ws.once('close', function() {
    console.log('流关闭了')
})
ws.close()

