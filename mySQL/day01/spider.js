let mysql = require('mysql')
let axios = require('axios')
let cheerio = require('cheerio')/* 和jQuery一样的解析html字符串的库 */

let options = {
    host: 'localhost',
    port: '3306',/* 这个应该是数据库服务器的端口？ （注意3306这个端口是默认的，你不设置也会默认用3306端口，即此时是可选的）*/
    user: 'root',
    password: '1q2w3e4r5t',
    database: 'book'
}
let count = 1
let con = mysql.createConnection(options)
con.connect()

// 获取第N个页面所有书籍的链接
async function getPageUrl(num) {
    let httpUrl = 'https://sobooks.cc/page/'+num
    let res = await axios.get(httpUrl)
    // console.log(res.data)
    // 得到页面数据
    let $ = cheerio.load(res.data)
    $('#cardslist .card-item .thumb-img>a').each((i, ele) => {
        // 寻找每本书的链接
        let href = $(ele).attr('href')
        // console.log(href)
        // 根据地址访问书籍详情页面
        getBookInfo(href)

    })
}
async function getBookInfo(href) {
    let res = await axios.get(href)
    let $ = cheerio.load(res.data)
    // 书籍图片
    let bookimg = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookpic > img').attr('src')
    // 书籍名称
    let bookname = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(1)').text()
    bookname = bookname.substring(3, bookname.length)
    // 书籍作者
    let author = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(2)').text()
    author = author.substring(3, author.length)
    // 标签
    let tag = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(4)').text()
    tag = tag.substring(3, tag.length)
    // 发布时间
    let pubtime = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(5)').text()
    pubtime = pubtime.substring(3, pubtime.length)
    // 得分
    let score = $('body > section > div.content-wrap > div > article > div.book-info > div.book-left > div > div.bookinfo > ul > li:nth-child(6) > b').attr('class')
    score = score[score.length-1]
    // 分类
    let catagory = $('#mute-category > a').text().trim()
    // 作者简介
    let abrief = $('body > section > div.content-wrap > div > article > p:nth-child(16)').text()
    // 内容简介
    let bbrief = $('body > section > div.content-wrap > div > article > p:nth-child(3)').text()
    // 书本链接
    let bookUrl = href
    let arr = [bookname, author, tag, pubtime, score, bookimg, catagory, abrief,bbrief, bookUrl]
    // console.log(arr)
    // 插入数据库
    let strSql = 'insert into book(bookname,author,tag,pubtime,score,bookimg,catagory,abrief,bbrief,bookUrl) values(?,?,?,?,?,?,?,?,?,?)'
    con.query(strSql, arr, (err, results) => {
        console.log(err, results)
    })
}
for(let page = 1; page<100; ++page){
    getPageUrl(page)
}
// let tempBook = 'https://sobooks.cc/books/17507.html'
// getBookInfo(tempBook)

