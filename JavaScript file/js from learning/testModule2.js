(function(window) {
    var msg = 'My atguigu'  /* 私有的数据 */
    function doSomething() {
        console.log('doSomething()' + msg.toUpperCase())
    }
    function doOtherthing() {
        console.log('doOtherthing()' + msg.toLowerCase())
    }
    window.testModule2 = {/* 向window暴露 */
        doSomething: doSomething,   
        doOtherthing: doOtherthing  
    }
})(window)




