function Person (){

}
let per = new Person();
console.log(per.__proto__ == Person.prototype); //true说明自定义的类的原型和自定义的类的实例的原型一样
                                                //per.__proto__ 是一个对象，所以输出{}
let obj = {}
console.log(obj.prototype);//undefined
console.log(per.prototype);//undefined
console.log(obj.__proto__ == Object.prototype); //true
console.log(obj.__proto__ == Function.prototype);//false    说明Object的实例直接指向Object.prototype
console.log(per.__proto__ == Person.prototype);//true    
console.log(Person.__proto__ == Function.prototype);//true    

// 自定义构造函数的原型 是 Object的实例
console.log(Person.prototype instanceof Object);//true    
console.log(Function.prototype instanceof Object);//true    
console.log(Person.prototype.__proto__ == Object.prototype);    //true

// 
console.log(Object instanceof Function);//true  因为Function构造函数创造一切构造函数
console.log(Function instanceof Object);//true  因为Function.__proto__.__proto__是Object.prototype，
console.log(Function instanceof Function);//true因为Function构造函数创造一切构造函数
console.log(Object instanceof Object);//true    因为Function.__proto__.__proto__是Object.prototype

//以下三式可以证明所有的构造函数（包括原生和自定义）的__proto__指针都指向Function.prototype
console.log(Object.__proto__ == Function.prototype);//true   
console.log(Function.__proto__ == Function.prototype);//true   
console.log(Person.__proto__ == Function.prototype);//true  

// Object的原型对象是原型链尽头
console.log(Object.prototype.__proto__);//null
console.log(Function.prototype.__proto__);//[Object: null prototype] {}     即Object.prototype

//以下三式可以证明所有构造函数的所属属性都是Function
console.log(Function.constructor === Function);//true   [Function: Function]
console.log(Object.constructor === Function);//true     [Function: Function]
console.log(Person.constructor === Function);//true     [Function: Function]

// 这说明所有构造函数的都是由Function创造包括它自己。
console.log(Function.prototype.constructor);//[Function: Function]
console.log(Object.prototype.constructor);//[Function: Object]
console.log(Person.prototype.constructor);//[Function: Person]

// 所有函数都是Function的实例（包括Function类）
console.log(Function.__proto__ === Function.prototype);//true
console.log(Function instanceof Function);//true 





/* function Employee(name,job,born){
this.name=name;
this.job=job;
this.born=born;
}

var bill=new Employee("Bill Gates","Engineer",1985);
let obj = {

}
function fun (){

}
let a = [];
let b = 'nihao';
let c = true;
console.log(bill.constructor);
console.log(obj.constructor);   //说明Object类已经构造好了
console.log(fun.constructor);   //说明Function类已经构造好了
console.log(a.constructor);   //说明Array类已经构造好了
console.log(b.constructor);   //说明String类已经构造好了
console.log(c.constructor);   //说明String类已经构造好了 */

                                


