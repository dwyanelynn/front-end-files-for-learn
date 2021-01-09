let axios = require('axios')

// let httpUrl = 'https://www.dy2018.com/'
let httpUrl = 'https://www.mi.com/'
// let httpUrl = 'https://movie.douban.com/'
// let httpUrl = 'https://www.huawei.com/cn/?ic_medium=direct&ic_source=surlent'
axios.get(httpUrl, {
    responseEncoding:'utf-8',
    headers: {
        responseType: 'document',
        responseEncoding: 'utf8'
        
    //     'Upgrade-Insecure-Requests': 1,
    //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
    //     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //    'Accept-Encoding': 'gzip, deflate, br',
    //     'Accept-Language': 'zh-CN,zh;q=0.9',
    //     'Cache-Control': 'max-age=0',
    //     'Connection': 'keep-alive'
    },
}).then((res) => console.log(typeof res.data))

