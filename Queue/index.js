class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(data) {
        const newNode = new Node(data);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(data) {
        const newNode = new Node(data);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++
        return newNode;
    }

    dequeue() {
        let originalFirst = this.first;

        if (!this.first) {
            return undefined;
        }
        
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            originalFirst.next = null;
            originalFirst = null;
        }

        this.length--;
        return this;
    }
}

const myQueue = new Queue(0);
myQueue.enqueue(1)
console.log(myQueue)