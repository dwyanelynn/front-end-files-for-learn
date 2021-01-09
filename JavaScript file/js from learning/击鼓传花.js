
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.eliminated.forEach(name => {
    console.log(`${name}在击鼓传花游戏中被淘汰。`);
});
console.log(`胜利者： ${result.winner}`);


class Queue{
    constructor() {
        this.count = 0;
        this.lowestCount = 0;//由于要从队列前端移除元素，需要一个变量来帮助追踪第一个元素
        this.items = {};
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;//即this.count === this.lowestCount
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
    size() {
        return this.count - this.lowestCount;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
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
function hotPotato(elementsList, num) { //elementList存放的是参与游戏的人的名单
    class Queue{
        constructor() {
            this.count = 0;
            this.lowestCount = 0;//由于要从队列前端移除元素，需要一个变量来帮助追踪第一个元素
            this.items = {};
        }
        isEmpty() {
            return this.count - this.lowestCount === 0;//即this.count === this.lowestCount
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
        size() {
            return this.count - this.lowestCount;
        }
        clear() {
            this.items = {};
            this.count = 0;
            this.lowestCount = 0;
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
    const queue = new Queue(); // 创建队列
    const elimitatedList = []; // 创建存放淘汰的人的名字的数组
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]); // 把玩家的名单加入队列
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // 从队列开头移除一项，再将其添加到队列末尾
        }
        elimitatedList.push(queue.dequeue()); // 一旦达到给定的传递次数num，拿着花的那个人就被淘汰了（从队列中移除）
    }                                       //剩一人时退出while循环
    return {//返回一个对象
        eliminated: elimitatedList,
        winner: queue.dequeue() // 最后只剩下一个人的时候，这个人就是胜者
    };
}