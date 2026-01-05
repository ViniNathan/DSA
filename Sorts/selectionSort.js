const selectionSort = (array) => {
    for (let i = 0; i < array.length ; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[minIndex]) {
                minIndex = j 
            }
        }

        if (i !== minIndex) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
};

unsortedArray = [5, 6, 1, 9, 3, 7, 2];
console.log(selectionSort(unsortedArray))