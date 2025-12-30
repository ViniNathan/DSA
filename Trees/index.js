class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let actualNode = this.root;

        while (true) {
            if (newNode.data === actualNode.data) {
                return undefined
            }

            if (newNode.data < actualNode.data) {
                if (actualNode.left === null) {
                    actualNode.left = newNode;
                    return this;
                } else {
                    actualNode = actualNode.left;
                }
                
            } else {
                if (actualNode.right === null) {
                    actualNode.right = newNode;
                    return this;
                } else {
                    actualNode = actualNode.right;
                }
            }
        }
    }
}

const tree = new BST();
tree.put(1)
tree.put(2)
tree.put(0)
tree.put(3)
tree.put(-1)
console.log(tree)