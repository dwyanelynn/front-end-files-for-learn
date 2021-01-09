class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;    //数组本身没有isEmpty方法
    }
    size() {
        return this.items.length;       //对于集合，最好用 size 代替length 
    }
    clear() {
        return this.items = [];
    }    
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();//此语句包含删除和返回值
    }
    peek() {
        return this.items[this.items.length-1];
    }
}

let a = new Stack();
console.log(a.isEmpty());
a.push(2);
a.push(3);
a.push(5);
a.pop();
console.log(a.peek());