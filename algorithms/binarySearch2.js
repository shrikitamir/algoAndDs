function binarySearch(arr, el) {
  let min = 0;
  let max = arr.length - 1;
  let index = 0;
  let element;
  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = arr[index];
    if (element < el) {
      min = index + 1;
    } else if (element > el) {
      max = index - 1;
    } else {
      return index;
    }
  }
  return null;
}

const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ];

console.log(binarySearch(array, 17));