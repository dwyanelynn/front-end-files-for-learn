// var a = 3;
// a = parseInt(a);
// console.log(a == 3);
// var b = 5;
// var c = 6;
// var d = b > c ? b : c;
// console.log("d = "+d);
// var a = 1, b = 2, c = 3;

// var a = prompt("请输入a:");
// var b = prompt("请输入b:");
// var c = prompt("请输入c:");


//创建对象
/*使用new关键字调用的函数，是构造函数；
 *构造函数是专门用来创建对象的函数；
 *使用typeof检查一个对象时，会返回object
 */
var obj = new Object();

//添加属性↓     语法：对象.属性名 = 属性值；
obj.name = "孙悟空";
obj.gender = "mate";
//如果读取对象中没有的属性，不会报错，会显示Undefined
// console.log(obj.hello);

//修改对象的属性值  语法：对象.属性名 = 新值；

//删除对象的属性    语法：delete 对象.属性名;
var obj2 = new Object();
obj2.test = obj;
console.log(obj2);
console.log(obj2.test.name);
console.log("gender" in obj);
var obj3 = {name:"猪八戒", age:28};
console.log(obj3);