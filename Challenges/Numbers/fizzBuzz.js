// Print numbers from 1 to n
// If number is divisible by 3, print "Fizz"
// If number is divisible by 5, print "Buzz"
// If number is divisible by 3 and 5, print "FizzBuzz"

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(
        i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" :
        i % 3 === 0 ? "Fizz" :
        i % 5 === 0 ? "Buzz" :
        i
    )
    }
}
fizzBuzz(15)