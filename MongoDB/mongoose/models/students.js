/* 用来定义students的模型 */
const mongoose = require('mongoose')

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
// module.exports.model = StuModel
module.exports = StuModel/* 直接把模型变量StuModel赋值给module的exports对象 */