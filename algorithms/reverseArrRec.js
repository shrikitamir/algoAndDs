function reverseArrRec(arr) {
    const reversedArr = [];
    function reverseRec(arr, index) {
        if (index < 0) return reversedArr;
        reversedArr.push(arr[index]);
        return reverseRec(arr, index - 1);
    }
    return reverseRec(arr, arr.length - 1);
}

console.log(reverseArrRec([5, 4, 3, 2, 1]));
