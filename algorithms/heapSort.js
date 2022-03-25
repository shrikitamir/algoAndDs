function heapSort(array) {
  array = createMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    swapPlace(0, i, array);
    heapify(array, 0, i);
  }
  return array;
};

function swapPlace(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

function createMaxHeap(array) {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

function heapify(array, index, heapSize) {
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  let largestValueIndex = index;
  if (heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left;
  }
  if (heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right;
  }
  if (largestValueIndex !== index) {
    swapPlace(index, largestValueIndex, array);
    heapify(array, largestValueIndex, heapSize);
  }
};

const arr = [ 1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92 ];

console.log(heapSort(arr));