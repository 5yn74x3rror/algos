const pivot = (arr, start = 0, end = arr.length) => {
  let pivotPoint = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivotPoint > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  console.log(arr);
  return swapIdx;
};

const quickSort = (arr, left = 0, right = arr.length) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);

    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

// console.log(quickSort([4, 8, 2, 1, 5, 7, 2, 3]))