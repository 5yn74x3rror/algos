// // get left and right index of the max subbaray sum
// const slidingWindow = arr => {
//   let maxSum = arr[0];
//   let currSum = 0;
//   let maxL = 0;
//   let maxR = 0;
//   let L = 0;

//   for (let R = 0; R < arr.length; R++) {
//     if (currSum < 0) {
//       currSum = 0;
//       L = R;
//     }

//     currSum += arr[R];

//     if (currSum > maxSum) {
//       maxSum = currSum;
//       maxL = L;
//       maxR = R;
//     }
//   }

//   return [maxL, maxR];
// };

// console.log(slidingWindow([4, -1, 2, -7, 3, 4]))