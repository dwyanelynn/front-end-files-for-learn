let fs = require('fs')
// 写之前先打开文件
let fd = fs.openSync(__dirname+'/hello.txt', 'w')
// 向文件写入内容
let fw = fs.writeSync(fd, '今天天气真不错', 2)
// 关闭文件
fs.closeSync(fd)