let fs = require('fs')
let fr = fs.createReadStream(__dirname + '/hello4.txt')
// 监听可读流是否打开
fr.once('open', () => console.log('可读流打开了'))
fr.once('close', () => fw.close() )/* 数据读取完毕后，关闭可写流 */
// 创建一个可写流
let fw = fs.createWriteStream(__dirname + '/hello4copy.txt')
// 监听可写流是否打开
fw.once('open', () => console.log('可写流打开了'))
fw.once('close', () => console.log('可写流关闭了'))
// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据,
// 读取完数据后会自动关闭可读流
fr.on('data', (data) => fw.write(data))

