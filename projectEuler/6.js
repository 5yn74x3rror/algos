/**
 * The sum of the squares of the first ten natural numbers is,
* The square of the sum of the first ten natural numbers is,
*
* Hence the difference between the sum of the squares of the 
* first ten natural numbers and the square of the sum is .
* 
* Find the difference between the sum of the squares of the first 
* one hundred natural numbers and the square of the sum.
*/

const factorial = n => (n+1) * (n/2);

const sumSquares = n => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i*i;
  }
  return result;
};

const fact100 = factorial(100);
const squaredSum = fact100 * fact100;

console.log(squaredSum - sumSquares(100))