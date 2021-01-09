let fs = require('fs')
let isExists = fs.existsSync(__dirname+'/hello.txt')
// console.log(isExists)   //true
// fs.stat(__dirname+'/hello.txt', function(err, stats){ 
//     if (!err) {
//         console.log(stats)
//         console.log(stats.size) /* size表示文件的大小（字节） */
//         console.log(stats.isFile()) /* 是否是文件 */
//     }
// })

// fs.readdir('.', function(err, files) {
//     if (!err) {
//         console.log(files)
//     }
// })
console.log(fs.existsSync(__dirname+'/test.txt'))

fs.rename('E:/file/node.js/fs文件系统/test.txt', 'E:/file/node.js/test.txt', function(err) {
    if (!err) {
        console.log('修改成功')
    }else {
        console.log('修改失败')
        console.log(err)
    }
})