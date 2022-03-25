function quickSort(arr) {
    if (arr.length < 2) return arr;
    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) rightArr.push(arr[i]);
        else leftArr.push(arr[i])
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([4, 3, 7, 8, 2, 1, 5, 6]));
