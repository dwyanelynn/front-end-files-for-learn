let fs = require('fs')
fs.readFile(__dirname+'/hello3.txt', function(err, data) {
    if (!err) {
        // console.log(data.toString())
        fs.writeFile(__dirname+'/hello3copy.txt', data, function(err) {
            if (!err) {
                console.log('文件写入到hello3copy成功')
            }
        })
    }
})

