/*
This is a fibonacci sum calculator. It takes a number and returns the sum of all odd Fibonacci numbers that are less than or equal to that number
User Stories

- A `sumFibs` function accepts a number as an argument.
- The `sumFibs` function returns the sum of all odd Fibonacci numbers that are less than or equal to the given number.
- The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous ones.
- Only the odd Fibonacci numbers are added to the sum.
*/

const sumFibs = (aNumber) => {
  // Capture all fibonacci numbers
  let fibNos = [0, 1];
  for (let i = 2; i < aNumber + 1; i++)
    fibNos.push(fibNos[i - 1] + fibNos[i - 2]);

  // Remove the first number because it is a zero
  fibNos.shift();

  // Exclude nos that are higher than aNumber
  let fibNew = [];
  for (let item of fibNos) if (item <= aNumber) fibNew.push(item);

  // Capture all odd fibonacci numbers from fibNew
  let odds = [];
  for (let item of fibNew) if (item % 2 === 1) odds.push(item);

  // Get the sum of all odd fibonacci numbers;
  let sumTotal = 0;
  for (let item of odds) sumTotal += item;
  return sumTotal;
};

console.log(sumFibs(75024));
