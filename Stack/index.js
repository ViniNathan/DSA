class Node {
    constructor(data) {
        this.head = data;
        this.next = null;
    }
}

class Stack {
    constructor(data) {
        const newNode = new Node(data);
        this.first = newNode;
        this.lenght = 1;
    }

    push(data) {
        const newNode = new Node(data);

        if (this.lenght === 0) {
            this.first = newNode;
        }

        newNode.next = this.first;
        this.first = newNode;
        this.lenght++;

        return this;
    }

    pop() {
        if (!this.first) {
            return undefined;
        }

        let oldFirst = this.first;

        this.first = this.first.next;

        oldFirst.next = null;
        oldFirst = null;
        this.lenght--;
        return this;
    }
}

const myStack = new Stack(1);
myStack.push(2)
myStack.push(3)
myStack.pop()
console.log(myStack)