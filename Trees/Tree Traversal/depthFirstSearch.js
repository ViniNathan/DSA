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

    includes(data) {
        let actualNode = this.root;

        if (this.root.data === data) {
            return true;
        }

        while (true) {
            if (data < actualNode.data) {
                if (actualNode.left !== null) {
                    actualNode = actualNode.left;
                    if (actualNode.data === data) {
                        return true;
                    }
                } else {
                    return false;
                }
            } else {
                if (actualNode.right !== null) {
                    actualNode = actualNode.right;
                    if (actualNode.data === data) {
                        return true;
                    }
                } else {
                    return false;
                }
            }
        }
    }

    dfsPreOrder(node = this.root, data = []) {
        if (node === null) return data;

        data.push(node.data)

        if (node.left) this.dfsPreOrder(node.left, data);
        if (node.right) this.dfsPreOrder(node.right, data);

        return data;
    }

    dfsPostOrder(node = this.root, data = []) {
        if (node === null) return data;

        if (node.left) this.dfsPreOrder(node.left, data);
        if (node.right) this.dfsPreOrder(node.right, data);
        data.push(node.data)

        return data;
    }
}

const tree = new BST();
tree.insert(1)
tree.insert(2)
tree.insert(0)
tree.insert(3)
tree.insert(-1)
console.log(tree)
console.log(tree.dfsPostOrder())