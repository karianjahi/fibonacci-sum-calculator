/*
This is a fibonacci sum calculator. It takes a number and returns the sum of all odd Fibonacci numbers that are less than or equal to that number
User Stories

- A `sumFibs` function accepts a number as an argument.
- The `sumFibs` function returns the sum of all odd Fibonacci numbers that are less than or equal to the given number.
- The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
- Only the odd Fibonacci numbers are added to the sum.
*/

const sumFibs = (aNumber) => {
  let fibonacciNumbers = [];
  for (let i = 0; i < aNumber; i++) {
    if (i < 2) {
      fibonacciNumbers.push(i);
    }
  }
  return fibonacciNumbers;
};

// Test
aNumber = 10
console.log(sumFibs(aNumber));
