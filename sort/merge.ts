export const mergeArr = (arr1: number[], arr2: number[]) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length)
    result.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++])

  // finish off remaining array when one exhausted
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);

  return result;
};

const mergeSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;
  const half = Math.floor(arr.length / 2);
  const arr1: number[] = mergeSort(arr.slice(0, half));
  const arr2: number[] = mergeSort(arr.slice(half));
  return mergeArr(arr1, arr2);
};

console.log(mergeSort([1, 4, 6, 7, 7, 7, 7, 2, 7, 8, 9]))