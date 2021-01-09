let str = 'Hello Atguigu'

/* // 将一个字符串保存到buffer中
let buf = Buffer.from(str)
console.log(buf)    // <Buffer 48 65 6c 6c 6f 20 41 74 67 75 69 67 75>
console.log(buf.length)     //13    占用内存的大小
console.log(str.length)     //13    字符串的长度
 */


// 创建一个10字节的buffer
let buf2 = Buffer.alloc(10)
console.log(buf2.length)    //10
// 通过索引，来操作buffer中的元素
buf2[0] = 88/* 注意这个是十进制的 */
buf2[1] = 0xAA/* 这是十六进制的 */
console.log(buf2)

