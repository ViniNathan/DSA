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

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        this.length++
        return newNode;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp;
        let prev = null;

        for (let i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

    }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
console.log(myLinkedList);
myLinkedList.reverse()
console.log(myLinkedList);