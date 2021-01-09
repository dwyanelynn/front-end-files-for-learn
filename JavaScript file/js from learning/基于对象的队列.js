class Queue{
    constructor() {
        this.count = 0;
        this.lowestCount = 0;//由于要从队列前端移除元素，需要一个变量来帮助追踪第一个元素
        this.items = {};
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;//即this.count === this.lowestCount
    }    
    size() {
        return this.count - this.lowestCount;
    }    
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    enqueue(element) {
        this.items[this.count] = element;   // []里面是属性名，现在是把属性名的当作下标
        this.count++;        //队列的下标严格意义上和数组的下标不同，因为队列删除元素后，属于第一个元素的下标就要加1.
    }
    dequeue() {
        if (this.isEmpty())
            return undefined;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        ++this.lowestCount; //个人认为这里没有--this.count是因为保持队列的结构？
        return result;
    }
    peek() {    //查看头元素
        if (this.isEmpty())
            return undefined;
        else
            return this.items[this.lowestCount];//把 lowestCount 作为键名来获取元素值
    }
    toString() {
        if (this.isEmpty()) 
            return '';
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}