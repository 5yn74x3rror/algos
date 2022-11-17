// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const factorial = n => (n+1) * (n/2);

// no loops, O(1) space and time
const sum = (max, multiplies) => {
  result = 0;
  for (let i = 0; i < multiplies.length; i++) {
    const numberTimes = Math.floor((max - 1) / multiplies[i]);
    result += multiplies[i] * factorial(numberTimes);
  }
  return result;
};

console.log(sum(1000000000, [3, 5]) - sum(100000000000, [15]))