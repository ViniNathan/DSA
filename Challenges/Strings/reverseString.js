// Given a string, the will is to reverse it
// Steps:
// 1. Convert the string into array (split method)
// 2. Reverse the array (reverse method)
// 3. Convert array back to string (join method)

const reverseString = (string) => {
    return string.split("").reverse().join("");
}

console.log(reverseString("STRING"));