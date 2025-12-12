class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    get(index) {
        return this.data[index];
    }

    pop() {
        delete this.data[this.length-1];
        this.length--;
    }

    shift() {
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    deleteByIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[index + 1];
        }
        delete this.data[this.length - 1]
        this.length--;

    }
}

const customArray = new CustomArray();
customArray.push("abacate");
customArray.push("mexerica");
customArray.push("maça");
customArray.push("banana");
customArray.push("teste");
customArray.push("teste2");
console.log(customArray)
customArray.deleteByIndex(0)
console.log(customArray)