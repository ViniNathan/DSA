// Write a function that takes an array and a chunk size as input.
// The function should return a new array where the original array is split into chunks of specified size
// Example: chunkArray([1,2,3,4,5],2) --> [[1,2], [3,4], [5]]

const chunck = (array, size) => {
    let chuncked = [];
    let index = 0;

    while (index < array.length) {
        const chunck = array.slice(index, index + size);
        chuncked.push(chunck);;
        index += size;
    }

    return chuncked;
};

console.log(chunck([1,2,3,4,5,6,7,8],3));