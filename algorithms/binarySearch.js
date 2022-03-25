function binarySearch(arr, num) {
    let first = 0;
    let last = arr.length;
    let middle = Math.floor((first + last) / 2);
    while (arr[middle] !== num && last != middle && first != middle) {
        if (arr[middle] > num) last = middle;
        else first = middle;
        middle = Math.floor((first + last) / 2);
    }
    if (arr[middle] === num) return middle;
    else return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

console.log(binarySearch(array, 17));
