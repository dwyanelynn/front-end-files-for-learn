function testModule() {
    var msg = 'My atguigu'  /* 私有的数据 */
    function doSomething() {
        console.log('doSomething()' + msg.toUpperCase())
    }
    function doOtherthing() {
        console.log('doOtherthing()' + msg.toLowerCase())
    }
    return {
        doSomething: doSomething,   /* 属性名：属性值 */    /* 其实也可以用ES6的语法，直接写doSomething */
        doOtherthing: doOtherthing  
    }
}
console.log(module.__filename)


