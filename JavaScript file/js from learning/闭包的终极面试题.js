/* fun(n,o)只是返回一个对象，并不执行对象里的方法 */
/* fun函数内有闭包，fun(n,o)是外部函数。内部函数引用了n */
/* 方法里return的那个n是把n传回给外部fun函数的o */

function fun(n, o) {
    console.log(o)/* 该行其实打印的是闭包的数据，即n */
    return {
        fun: function(m) {
            return fun(m, n)    //返回fun(m, n)的执行结果，注意这个fun不是该对象的那个方法
        }
    }
}
var a = fun(0)  //undefined
a.fun(1)    //0并返回一个对象（因为是使用了a的闭包，a的闭包的n是等于0的）。 
            /* 其实有产生新的闭包（因为外部函数执行了），但是因为没有变量指向新return的对象，所以变为垃圾对象。 */
a.fun(2)    //0并返回一个对象
a.fun(3)    //0并返回一个对象

var b = fun(0).fun(1).fun(2).fun(3)//undefined,0,1,2并返回多个对象   (这里每一次都是在调用新的对象的方法，所以n一直更新)
var c = fun(0).fun(1)//undefined,0 并返回多个对象
c.fun(2)    //1并返回一个对象   （因为还是使用了c的闭包）
c.fun(3)    //1并返回一个对象   （因为还是使用了c的闭包）
