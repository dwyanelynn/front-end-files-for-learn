const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose_test', {useNewUrlParser: true, useUnifiedTopology: true})

const Schema = mongoose.Schema  
const stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: 'female'
    },
    address: String
})

const StuModel = mongoose.model('student', stuSchema)
/* StuModel是model构造函数的实例 */

// StuModel.create([
//     {
//         name: '猪八戒',
//         age: 28,
//         gender: 'male',
//         address: '高老庄'
//     },
//     {
//         name: '唐僧',
//         age: 16,
//         gender: 'male',
//         address: '女儿国'
//     },
// ], function(err){
//     if(!err) { 
//         console.log('文档插入成功')
//     }
// })

let lin = StuModel.find({
    name: '唐僧'
}, (err, docs) => console.log(docs))
    console.log(lin)





mongoose.connection.once('open', function(){console.log('连接成功')})
mongoose.connection.once('close', function(){console.log('连接断开')})
