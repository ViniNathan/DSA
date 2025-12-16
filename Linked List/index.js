// Basically a linked list is a combination of nodes
// Each node contains a data and a reference to the next node
// The first element is called Head and the last is called Tail
// Exemple (node 1) --> (node 2) --> (node 3) --> null

class Node {
    constructor(data) {
        this.head = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(data) {
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1;
    }

    push(data) {
        const newNode = new Node(data);
        // If there are no nodes
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        
        this.length++;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;        
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp
    }

    unshift(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        const oldHead = this.head;
        this.head = newNode;
        this.head.next = oldHead;
        this.length++
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        const oldHeadNext = this.head;
        this.head = this.head.next;

        oldHeadNext.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    getByIndex(index) {
        let indexCounter = 0;
        let actualNode = this.head;

        if (!this.head) {
            return undefined;
        }

        while (indexCounter < index) {
            indexCounter++;
            if (actualNode.next) {
                actualNode = actualNode.next;
            } else {
                return undefined;
            }
        }

        return actualNode;
    }

    set(index, newData) {
        let indexCounter = 0;
        let actualNode = this.head;

        if (!this.head) {
            return undefined;
        }

        while (indexCounter < index) {
            indexCounter++;
            if (actualNode.next) {
                actualNode = actualNode.next;
            } else {
                return undefined;
            }

        }

        actualNode.head = newData;
        return actualNode;
    }

    insert(index, data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode; 
            this.tail = newNode;
            this.length++;
        }

        let indexCounter = 0;
        let actualNode = this.head;
        let nextNode = actualNode.next;


        while (indexCounter < index) {
            indexCounter++;
            if (actualNode.next) {
                nextNode = nextNode.next;
                actualNode = actualNode.next;
            }
            else {
                return undefined;
            }
        }

        newNode.next = nextNode;
        actualNode.next = newNode;
        this.length++;
        return newNode;
    }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
console.log(myLinkedList)
console.log(myLinkedList.insert(3, 6))
console.log(myLinkedList)