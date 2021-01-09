function getStyle(obj, name) {
    /* 正常浏览器的方式 */
    if (window.getComputedStyle) {     
        /* 括号内不能直接写getComputedStyle，因为这样写表示它是一个变量，当它在作用域链中没找到就会报错，就不会执行else的内容了 */
        /* 所以要加window.，因为这表示getComputedStyle是一个属性，当找不到是会返回Undefined */
        return getComputedStyle(obj, null)[name];
    } else {
        /* IE8的方式(这种方法有时可能获得auto值，到时只要提前先指定一个值就好了，如left的auto，但实际是为0的) */
        return obj.currentStyle[name];
    }
    /* return getComputedStyle(obj, null).name; */ /* 注意这里name不能这样写，
    因为在后面加.name在getComputedStyle的语法是，获取名为name的样式
     */
}