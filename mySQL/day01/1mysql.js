let mysql = require('mysql')//这个库肯定给了我们连接数据库服务器、查询等方法的 
let options = {
    host: 'localhost',
    port: '3306',/* 这个应该是数据库服务器的端口？ （注意3306这个端口是默认的，你不设置也会默认用3306端口，即此时是可选的）*/
    user: 'root',
    password: '1q2w3e4r5t',
    database: 'mall'
}
// 创建与数据库的连接的对象
let connection = mysql.createConnection(options)
// 建立连接
connection.connect((err) => {
    // 如果建立连接失败，则
    if (err) {
        console.log(err)
    } else {
        console.log('数据库连接成功')
    }
})

// 执行数据库语句

// // 执行查询语句
// let strSql = 'select * from user'
// connection.query(strSql, (err, results, fields) => {
//     // 查询成功后，执行以下内容
//     console.log(err, results, /* fields */)
// })//是异步的，所以有回调函数

// // 删除表
// let strSql2 = 'drop table user'
// connection.query(strSql2, (err, results, fields ) => {
//     console.log(err, results)
// })
// // 删除库
// let strSql3 = 'drop database shop'
// connection.query(strSql3, (err, results, fields ) => {
//     console.log(err, results)
// })
// // 创建库
// let strSql4 = 'create database mall'
// connection.query(strSql4, (err, results, fields ) => {
//     console.log(err, results)
// })
// // 创建表
// let strSql5 = `
// CREATE TABLE user2 (
//     id  int NOT NULL ,
//     username  varchar(255) NULL ,
//     password  varchar(255) NULL ,
//     PRIMARY KEY (id)
//     )
//     ;`
// connection.query(strSql5, (err, results, fields ) => {
//     console.log(err, results)
// })
// // 插入数据
// let strSql6 = 'insert into user(id,username,password) values(1, "lin", "123456")'
// connection.query(strSql6, (err, results) => {
//     console.log(err,results)
// })
// // 插入数据2
// let strSql7 = 'insert into user(username,password) values("xiaoming", "123")'/* 这里没有设置id，但是会自动递增,前提是该字段设置了自动递增选项 */
// connection.query(strSql7, (err, results) => {
//     console.log(err,results)
// })
// 插入数据3
let strSql8 = 'insert into user(username,password) values(?,?)'/* 打个问号做占位符 */
connection.query(strSql8, ['xiaohong', '772'],(err, results) => {
    console.log(err,results)
})


