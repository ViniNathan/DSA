// If a string is equal to itself reversed, it's a palindrome

// Steps:
// 1. Convert a string to array
// 2. Reverse the array
// 3. Convert the array back to string
// 4. Compair the strings

const palindromeChecker = (string) => {
    const reversedString = string.split("").reverse().join("");

    if (string.toLowerCase() === reversedString.toLowerCase()) {
        return ("This is a palindrome");
    } else {
        return ("This isn't a palindrome");
    }
}

console.log(palindromeChecker("Ovo"));