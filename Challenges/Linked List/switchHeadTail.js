// Given a Linked list, switch the head and the tail
// 0 -- > 1 -- > 2 -- > 3
// H                    T
// 3 -- > 1 -- > 2 -- > 0

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(data) {
        const newNode = new Node(data);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(data) {
        const newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    switch() {
        let originalHead = this.head;
        let orginalTail = this.tail;

        let actualNode = this.head;
        for (let i = 0; i < this.length - 2; i++) {
            actualNode = actualNode.next;
        }
        actualNode.next = originalHead;
        orginalTail.next = this.head.next;
        this.head = orginalTail;
        this.tail = originalHead;
        this.tail.next = null;

        return this.head
    }
}


const myLinkedList = new LinkedList(0);
myLinkedList.push(1)
myLinkedList.push(2)
console.log(myLinkedList)
myLinkedList.switch()
console.log(myLinkedList)



