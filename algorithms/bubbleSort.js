function swap(array, j) {
  let temp = array[j];
  array[j] = array[j + 1];
  array[j + 1] = temp;
}

function bubbleSort(array) {
    let j = 0;
    let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i)
        swapped = true;
      }
    }
    j++;
  } while (swapped);
  return array;
}

const arr = [5, 6, 4, 3, 8, 10, 2, 1];

console.log(bubbleSort(arr))
