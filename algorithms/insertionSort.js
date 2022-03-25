function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            const temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            i = i - 2;
        }
    }
    return arr;
}

console.log(insertionSort([3,2,5,4,1]));
