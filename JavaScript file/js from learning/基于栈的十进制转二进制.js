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

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) { 
        rem = Math.floor(number % 2); 
        remStack.push(rem);  //把余数放入创建好的栈中
        number = Math.floor(number / 2); 
    }
    while (!remStack.isEmpty()) { 
        binaryString += remStack.pop().toString();//注意是pop，pop是删除并返回删除的值，所以上一行采用了是否为空的循环条件
    }
    return binaryString;
}

console.log(decimalToBinary(10));