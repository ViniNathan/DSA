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
}