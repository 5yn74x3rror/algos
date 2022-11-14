// element that is being checked - starting at element index 1 up to last element
// for each checked element it goes through previous elements back
// every time checked element is smaller then prev element it is swapped with it
// after every loop 'i' subArray from 0 to 'i-1' is sorted

export const insertionSort = (arr: Number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let k = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[k] < arr[j]) {
        [arr[k], arr[j]] = [arr[j], arr[k]];
        k--;
      }
    }
  }
};

// console.log(insertionSort([5, 4, 3, 2, 1]));
// console.log(insertionSort([1, 6, 2, 5, 4, 8, 2, 5, 4]));
// console.log(insertionSort([1, 4, 3, 2, 6, 7, 3, 5]));
// console.log(insertionSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(insertionSort([8, 7, 6, 5, 4, -1, -12, 0, 2]));
