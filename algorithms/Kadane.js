// https://leetcode.com/problems/maximum-subarray/
// find a non-empty subarray
const largestSumInArr = arr => {
  let maxSum = arr[0];
  let currSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currSum = Math.max(currSum, 0) + arr[i];
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

// get left and right index of the max subbaray sum
const slidingWindowKadaneImplementation = arr => {
  let maxSum = arr[0];
  let currSum = 0;
  let maxL = 0;
  let maxR = 0;
  let L = 0;

  for (let R = 0; R < arr.length; R++) {
    if (currSum < 0) {
      currSum = 0;
      L = R;
    }

    currSum += arr[R];

    if (currSum > maxSum) {
      maxSum = currSum;
      maxL = L;
      maxR = R;
    }
  }

  return [maxL, maxR];
};

console.log(largestSumInArr([4, -1, 2, -7, 3, 4]))