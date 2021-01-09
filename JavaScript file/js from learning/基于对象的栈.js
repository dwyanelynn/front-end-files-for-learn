class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;   // []里面是属性名，现在是把属性名的当作下标
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
        // let objstring = this.items[0] + '';
        // for (let i=1; i<this.count; ++i) {
        //     objstring = objstring + ',' + this.items[i] + '';
        // }
        return objString;
    }
}

let a = new Stack();
a.push(2);
a.push(13);
a.push(25);
console.log(a.toString());

//对象其实是有toString方法的，但是如果直接用的话，会把count也输出