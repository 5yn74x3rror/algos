// starting from idx 0 to last-1 it sets it as a reference
// then goes through elements refIdx to last in array looks for the smallest element 
// which is smaller than reference element
// if smaller is found - reference and smallest are swapped

export const selectionSort = (arr: Number[]) => {
  let currentFirstIdx = 0;
  let indexOfSmallestElement;
  while (currentFirstIdx !== arr.length - 1) {
    indexOfSmallestElement = currentFirstIdx;

    for (let i = currentFirstIdx + 1; i < arr.length; i++) {
      if (arr[i] <= arr[indexOfSmallestElement]) indexOfSmallestElement = i;
    }

    if (indexOfSmallestElement !== currentFirstIdx) {
      [arr[currentFirstIdx], arr[indexOfSmallestElement]] = [
        arr[indexOfSmallestElement],
        arr[currentFirstIdx]
      ];
    }

    currentFirstIdx++;
  }
  return arr;
};

// console.log(selectionSort([1, 6, 2, 5, 4, 8, 2, 5, 4]));
// console.log(selectionSort([1, 4, 3, 2, 6, 7, 3, 5]));
// console.log(selectionSort([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(selectionSort([8, 7, 6, 5, 4, -1, -12, 0, 2]));
