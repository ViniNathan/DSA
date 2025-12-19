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
}