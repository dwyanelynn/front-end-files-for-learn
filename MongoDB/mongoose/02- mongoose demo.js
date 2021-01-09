const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose_test', {useNewUrlParser: true, useUnifiedTopology: true})

// 将mongoose.Schema 赋值给一个变量
const Schema = mongoose.Schema  /* 非必须 */
// 约束的信息
const stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: 'female'/* 默认值是女 */
    },
    address: String
})

//  Model代表的是数据库中的集合，通过Model才能对数据库进行操作
const StuModel = mongoose.model('student', stuSchema);

// 向数据库中插入一个文档
// StuModel.create(doc, function(err){})
StuModel.create({
    name: '孙悟空',
    age: 18,
    gender: 'male',
    address: '花果山'
}, function(err){
    if(!err) { 
        console.log('文档插入成功')
    }
})






mongoose.connection.once('open', function(){console.log('连接成功')})
mongoose.connection.once('close', function(){console.log('连接断开')})

