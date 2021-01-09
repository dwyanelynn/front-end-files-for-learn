/* let defaultEquals = require('/models/util.js');
let Node = require('/models/linked-list-models.js'); // {1}  */

class Node {    //Node不是表示一个链表，而是链表的一个元素的模板，即链表的一个节点
    constructor(element) {
    this.element = element; 
    this.next = undefined;  //下一个元素的指针(当一个节点被创建时，它的指针域是undefined)
    }
}
function defaultEquals(a, b) {
    return a === b;
}

class LinkedList {  //LinkedList表示的才是一个链表
    constructor(equalsFn = defaultEquals) {
        this.count = 0; 
        this.head = undefined;  //用head把第一个元素的引用（指针）保存下来，我觉得head可以理解为头指针
        this.equalsFn = equalsFn; 
    }
    push(element) {
        const node = new Node(element); //注意node存放的是指针，指向new Node(element)
        let current; 
        if (this.head == null) { 
            this.head = node;   //node为第一个节点（首节点），现在把该节点的地址赋给head
        } 
        else {
            current = this.head; //让首节点等于current。则current.next就等于第二个节点的地址
            while (current.next != null) { // 获得最后一项
                current = current.next; //使current等于未添加新元素时的尾节点
        }
        // 将其 next 赋为新元素，建立链接
        current.next = node; 
        }
        this.count++;
    }
    removeAt(index) {   //从特定位置移除一个元素
        // 检查index是否有效
        if (index >= 0 && index < this.count) { //0代表首节点，1代表第二个节点
            let current = this.head; 
            // 移除首节点
            if (index === 0) 
                this.head = current.next;//因为current现在是首节点，移除首节点就把首节点的地址赋给头指针
            else {
                let previous; //获取被移除节点的前一个节点
                for (let i = 0; i < index; i++) { 
                    previous = current;
                    current = current.next;//此时等号左边的current是准备被移除的节点
                }
                previous.next = current.next;
            }
            this.count--;
            return current.element;//返回被移除节点的值
        }//顺便说一句，这里不用手动释放被移除节点的内存，因为有垃圾回收机制
        return undefined; //index无效时返回undefined
    }
    getElementAt(index) {
        if (index >= 0 && index <= this.count) { 
            let current = this.head; 
            for (let i = 0; i < index && current != null; i++)
                current = current.next;
            return current; //返回该节点的地址（注意不是返回指针域）
        }
        return undefined; 
    }
    remove(element) {   //根据元素的值移除元素

    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) { 
            const node = new Node(element);
            if (index === 0) { // 在首节点添加
                const current = this.head;//保存原首节点的地址
                node.next = current; //把原首节点的地址赋给新首节点
                this.head = node;   //把新首节点的地址赋给头指针
            } 
            else {
                const previous = this.getElementAt(index - 1); //保存前一个节点的地址
                const current = previous.next; //把前一个节点的指针域赋给current，前一个节点的指针域即为新节点后一节点的地址
                node.next = current;//把新节点后一节点的地址赋给新节点的指针域
                previous.next = node; 
            }
            this.count++; // 更新链表的长度
            return true;
        }
        return false; 
    }
    indexOf(element) {//根据节点的数据域返回该节点的位置（注意不是返回该节点的地址）
        let current = this.head; 
        for (let i = 0; i < this.count && current != null; i++) { 
            if (this.equalsFn(element, current.element)) { 
                return i; 
            }
            current = current.next; 
        }
        return -1; 
    }
    remove(element) {
        const index = this.indexOf(element);//注意加this
        return this.removeAt(index);
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    getHead() {
        return this.head;
    }
    toString() {
        if (this.head == null) 
            return '';
        let objString = `${this.head.element}`; 
        let current = this.head.next; 
        for (let i = 1; i < this.size() && current != null; i++) { 
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString; 
    }
}

