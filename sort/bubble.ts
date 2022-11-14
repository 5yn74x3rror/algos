// n loops whtought elements, every time starting from the beggining
// every loop is shorter by one step
// after each loop element at the end of it is already sorted
// every step it is comparing element 'i' and 'i+1' and swaps them if 'i' is larger
// 'numsOfSwaps' added to check if there were any swaps in the loop
// to prevent additional looping if not necessary

export const bubbleSort = (arr: Number[]) => {
  let endIdx = arr.length - 1;
  while (endIdx > 0) {
    let numOfSwaps = 0;

    for (let i = 0; i < endIdx; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        numOfSwaps++;
      }
    }
    if (numOfSwaps === 0) break; // prevent more sorting if already sorted
    endIdx--;
  }
  return arr;
};

// console.log(bubbleSort([1, 4, 3, 2, 6, 7, 3, 5]));
// console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(bubbleSort([8, 7, 6, 5, 4, -1, -12, 0, 2]));
