// Given a phrase like "hello world", the algorithm needs to update it to "Hello World"

const capitalization = (string) => {
    return string.toLowerCase().split(" ").map(
        (word) => word[0].toUpperCase() + word.slice(1)
    ).join(" ") 
}

console.log(capitalization("phrase of test"))