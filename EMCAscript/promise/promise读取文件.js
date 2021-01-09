// 引入fs模块
const fs = require('fs')

// 调用fs模块方法读取文件
fs.readFile('./resource/赤壁赋.md', (err, data) => {
    if(err) {
        throw err
    }
    console.log(data.toString())
})

// 使用Promise封装
const p = new Promise(function(resolve, reject) {
    fs.readFile('./resource/赤壁赋.mda', (err, data) => {
        if(err) {
            reject(err)/* 调用后，状态为失败 */
        }
        // 如果成功
        resolve(data) 
    })
})
p.then(function(value) {
    console.log(value.toString())
}, function(reason) {
    console.log(reason)
    console.log('读取失败')
})