/* 使用var关键字 */
function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function () {
            return i;
        };
    }
    for (let j = 0; j < 10; ++j) {
        console.log(result[j]());
    }
}
createFunctions();

/* 使用let关键字 */
// function createFunctions() {
//     let result = new Array();
//     for (let i = 0; i < 10; i++) {
//         result[i] = function () {
//             return i;
//         };
//     }
//     for (let j = 0; j < 10; ++j) {
//         console.log(result[j]());
//     }
// }
// createFunctions();

/* 使用var关键字但没有把闭包赋予给数组定义一个匿名函数 */
function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function (num) {
            return function () {
                return num;
            };
        }(i); /* 这行的变量i不在闭包的块级作用域内 */
    }
    for (let j = 0; j < 10; ++j) {
        console.log(result[j]());
    }
    return result;
}
createFunctions();






// let st = [];
// for (let i=0; i<5; ++i) {
//     st[i] = i;
// }
// console.log(st);