// If a phrase is "My name name name is John"
// The result must be
// {my: 1, name: 3, is: 1, john:1}

const wordCounter = (str) => {
    const lowerText = str.toLowerCase();

    const wordMap = {}

    const words = lowerText.split(/\s+/)
    
    for (const word of words) {
        if (word in wordMap) {
            wordMap[word]++;
        } else {
            wordMap[word] = 1;
        }
    }

    return wordMap;
}

console.log(wordCounter("My name name name is John"));