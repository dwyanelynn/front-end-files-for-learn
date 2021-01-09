function Person(name, age){
    this.name = name;
    this.age = age;
}
let per = new Person("孙悟空", 18);
let per2 = new Person("猪八戒", 28);
let per3 = new Person("红孩儿", 8);
let per4 = new Person("蜘蛛精", 16);
let per5 = new Person("二郎神", 38);

let perArr = [per, per2, per3, per4, per5];//把符合满18岁的以新的数组返回

/* function getResult(arr) {
    if (arr.age >= 18)
        return arr.name;
}
console.log(perArr.filter(getResult)); */

function getAdult(arr){
    let newArr = [];
    for (let i=0; i<arr.length; ++i){
        if (arr[i].age >= 18)
            newArr.push(arr[i]);
    }
    return newArr;
}

console.log(getAdult(perArr));