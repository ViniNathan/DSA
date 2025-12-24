// Hash function:
// Acts like a translator, takin an input of any size (key)
// and converting it into a fixed-size value (hash code)
// that can be used as an index within the hash table's internal array
// This process of mapping arbitrary keys to fixed-length indices is called hashing

class HashTable {
    constructor(size) {
        this.keyMap = new Array(size);
    }

    _hashFunction(key) {
        let sum = 0;

        const PRIME_NUMBER = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++){
            const charCode = key.charCodeAt(0) - 96;
            sum = (sum + PRIME_NUMBER + charCode) % this.keyMap.length;
        }

        return sum;
    }

    set(key, value) {
        const index = this._hashFunction(key);

        if (!this.keyMap[index]) this.keyMap = [];

        this.keyMap[index].push([key, value]);

        return this;
    }

    get(key) {
        const index = this._hashFunction(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.key[index].length; i++){
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
}
