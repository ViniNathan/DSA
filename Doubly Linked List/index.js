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
}
