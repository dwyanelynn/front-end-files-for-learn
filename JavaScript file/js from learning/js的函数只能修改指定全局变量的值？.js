var a = 1;
function fun(a){        //函数内更改局部变量
    a = 2;
    console.log("函数里的a = ", a)//2
    return 3;
}
fun();
console.log("函数外的a = ",a);//1

var b = 1;
function fun2(){        //函数内更改全局变量（前提：不声明变量）
    b = 2;
    console.log("函数里的b = ", b)//2
    return 3;
}
fun2();
console.log("函数外的b = ",b);  //2

//C语言之所以可以在局部函数中远程修改任意主函数变量的值，是因为主函数发送了该变量的地址，而且局部函数的形参的数据类型是指针变量（地址）类型。
//因为指针变量类型在JavaScript语言没有，所以在js中，就不能远程修改任意主函数变量的值，只能修改指定变量的值。