const bubbleSort = (array) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return array;
}

unsortedArray = [5, 6, 1, 9, 3, 7, 2];

console.log(bubbleSort(unsortedArray));