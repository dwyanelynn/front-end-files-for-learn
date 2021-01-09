const data = {
    name: 'huahua'
}

function handle(data) {
    // 获取result 元素
    const result = document.getElementById('result')
    result.innerHTML = data.name
}

handle(data)