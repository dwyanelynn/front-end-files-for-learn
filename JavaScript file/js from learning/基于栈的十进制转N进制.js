class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;   // []里面是属性名
        this.count++;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if ( this.isEmpty() )
            return undefined;
        this.count--;
        const result = this.items[this.count];//因为result的值不能被改变所以用const
        delete this.items[this.count];
        return result;
    }
    peek() {
        if ( this.isEmpty() )
            return undefined;
        else
            return this.items[this.count - 1];
    }
    clear() {
        this.items = {};
        this.count = 0;     //或者while(!this.isEmpty()){this.pop()}
    }
    toString() {
        if ( this.isEmpty() )
            return '';
        let objString = `${this.items[0]}`;
        for (let i=1; i<this.count; ++i){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // {6}
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()]; // 注意是pop，pop是删除并返回删除的值，所以上一行采用了是否为空的循环条件
    }
    return baseString;
}

console.log(baseConverter(156, 16));