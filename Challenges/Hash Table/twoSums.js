// Given an array of numbers, like numbers = [2, 7, 11, 15] and a expected result, like target = 9
// The code must return the indexes of the numbers that summed results in the target value: [0,1]
const twoSums = (numbers, target) => {
    const numMap = {};

    for (let i = 0; i < numbers.length; i++){
        const compliment = target - numbers[i];
        
        if (compliment in numMap && numMap[compliment] !== i) {
            return [numMap[compliment], i];
        }

        numMap[numbers[i]] = i;
    }
}

console.log(twoSums([2, 7, 11, 15], 9));