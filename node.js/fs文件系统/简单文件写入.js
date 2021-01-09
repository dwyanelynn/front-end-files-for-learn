let fs = require('fs')
fs.writeFile('C:/Users/15219/Desktop/Hello.txt', '这是通过writeFile写入的内容', function(err) {
    if (!err) {
        console.log('写入成功')
    }
})

