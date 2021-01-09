let fs = require('fs')
let fr = fs.createReadStream(__dirname + '/hello4.txt')
// 监听可读流是否打开
fr.once('open', () => console.log('可读流打开了'))
fr.once('close', () => console.log('可读流关闭了'))
// 创建一个可写流
let fw = fs.createWriteStream(__dirname + '/hello4copy2.txt')
// 监听可写流是否打开
fw.once('open', () => console.log('可写流打开了'))
fw.once('close', () => console.log('可写流关闭了'))

fr.pipe(fw)

