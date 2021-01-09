require('./tools/connect_mongo')    /* 可以直接运行 */
// let Student = require('./models/students').model     /* 当module.exports.model = StuModel时的对应写法 */
let Student = require('./models/students')

// console.log(Student)
Student.find({}, function(err, doc){
    if(!err) {
        console.log(doc)
    }
})

