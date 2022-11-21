const getDigit = (num: number, index: number): number => {
  const numStr = String(num);
  return +numStr[numStr.length - index - 1] || 0;
};

// alternative
// const getDigit2 = (num, index) => Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;

const digitCount = (num: number): number => {
  let result = num;
  let counter = 1;
  while (result > 10) {
    result /= 10;
    counter++;
  }
  return counter;
};

// alternative
//const digitCount2 = num => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

const mostDigits = (arr: number[]): number => Math.max(...arr.map(el => digitCount(el)));

// can also be done in-place, always overriding 'arr' in each outer loop
const radixSort = (arr: number[]): number[] => {
  const max = mostDigits(arr);
  let currentArr: number[] = [...arr];
  for (let i = 0; i < max; i++) {
    const bucket: number[][] = Array.from({ length: 10 }, () => []);
    
    for (let j = 0; j < currentArr.length; j++) {
      const digit = getDigit(currentArr[j], i);
      bucket[digit].push(currentArr[j]);
    }
    
    currentArr = [...[].concat.apply([], [...bucket])];
  }
  
  return currentArr;
};


// radixSort([1, 12423, 123, 23444, 123, 1, 99, 867, 98, 104566])
// console.log(digitCount(0));
// console.log(getDigit2(123, 7));