const merge = (leftArray, rightArray) => {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            result.push(leftArray[i]);
            i++
        } else {
            result.push(rightArray[j]);
            j++
        }
    }

    result.push(...leftArray.slice(i));
    result.push(...rightArray.slice(j));

    return result;
}

const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2)
    
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

const unsortedArray = [5, 6, 1, 9, 3, 7, 2];
console.log(mergeSort(unsortedArray))