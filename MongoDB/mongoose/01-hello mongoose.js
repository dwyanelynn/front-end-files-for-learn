// 引入
const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/mongoose_test', {useNewUrlParser: true, useUnifiedTopology: true})
    /* mongoose_test该数据库还没有，但不妨碍我们连接 */
mongoose.connection.once('open', function(){console.log('连接成功')})
mongoose.connection.once('close', function(){console.log('连接断开')})

