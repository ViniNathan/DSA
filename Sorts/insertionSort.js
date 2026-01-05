const insertionSort = (array) => {
    for (let i = 0; i < array.length; i++) { 
        let key = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = key;
    }
    return array;
}

unsortedArray = [5, 6, 1, 9, 3, 7, 2];

console.log(insertionSort(unsortedArray));