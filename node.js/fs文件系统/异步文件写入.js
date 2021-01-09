let fs = require('fs')
fs.open(__dirname + '/hello2.txt', 'w', function(err, fd) {/* 此时这两个形参名不一定是这个 */
    // 判断是否出错
    if (!err) {
        //如果没有出错，则对文件进行写入操作
        fs.write(fd, '这是异步写入的内容', function(err) {
            if (!err) {
                console.log('写入成功')
            }
            // 关闭文件
            fs.close(fd, function(err) {
                if (!err) {
                    console.log('文件已关闭')
                }
            })
        })
    }else {
        console.log(err) //若出错错误，则输出信息
    }
})

