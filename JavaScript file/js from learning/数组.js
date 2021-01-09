const zero = 0;
const b = [1, 2, 3];
const a = [-3, -2, -1];
let c = a.concat(zero, b);
console.log(c);     //  输出-3, -2, -1, 0, 1, 2, 3
const isEven = x => x % 2 === 0;    //箭头函数，判断参数是否为偶数。
console.log(c.every(isEven));    // 输出false（判断是否都满足条件）
console.log(c.some(isEven));    // 输出true（判断是否存在满足条件的元素）
console.log(c.forEach(isEven));    // 没有返回值，所以undefined(对每个元素都迭代但不返回东西)
console.log(c.map(isEven));     //返回一个保存了isEven结果的新数组
console.log(c.filter(isEven));  //返回一个满足isEven条件的新数组
