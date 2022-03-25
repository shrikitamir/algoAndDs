function merge(leftArr, rightArr) {
  const output = [];
  while (leftArr.length && rightArr.length) {
    const leftEl = leftArr[0];
    const rightEl = rightArr[0];
    if (leftEl > rightEl) output.push(rightArr.shift());
    else output.push(leftArr.shift());
  }
  return [...output, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

console.log(mergeSort([6, 1, 60, 2, 5, 96, 2, 54, 26, 9]));
