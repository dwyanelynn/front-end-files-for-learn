class Queue{
    constructor() {
        this.items = {}
        this.count = 0
        this.lowestcount = 0
    }
    isEmpty() {
        return this.count - this.lowestcount === 0;
    }
    size() {
        return this.count - this.lowestcount;
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestcount = 0
    }
    enQueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    deQueue() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestcount]
        delete this.items[this.lowestcount]
        this.lowestcount++
        return result
    }
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestcount]
    }
    toString() {
        if (this.isEmpty()) {
            return ""
        }
        let objstring = this.items[this.lowestcount] + ""
        for (let i=this.lowestcount+1; i<this.count; ++i) {
            objstring = objstring + ', ' + this.items[i]
        }
        return objstring;

    }
}

let a = new Queue();
a.enQueue(1)
a.enQueue(2)
a.enQueue(3)
a.enQueue(4)
a.deQueue()
console.log(a.toString())

