class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DLinkedList {
    constructor(data) {
        const newNode = new Node(data);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        const oldTail = this.tail;
        this.tail = newNode;
        newNode.prev = oldTail;
        oldTail.next = newNode;

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let tailNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
        this.tail = tailNode.prev;
        this.tail.next = null;
        tailNode.prev = null;
        }
        
        this.length--;
        return tailNode;
    }

    unshift(data) {
        const newNode = new Node(data);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return newNode;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        let oldHead = this.head;

        this.head = this.head.next;
        
        this.head.prev = null;
        oldHead.next = null;

        this.length--;
        return this.head;
    }
}

const myDLinkedList = new DLinkedList(0);
myDLinkedList.push(1);
myDLinkedList.push(2);
console.log(myDLinkedList);
console.log(myDLinkedList.shift())
console.log(myDLinkedList);
