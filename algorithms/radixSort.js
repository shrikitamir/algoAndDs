function getLongestNumber(arr) {
    return Math.max(...arr).toString().length;
}

function getDigit(number, place, longestNumber) {
    const stringArr = number.toString().split('');
    while (longestNumber > stringArr.length) {
      stringArr.unshift("0");
    }
    return +stringArr[place];
}

function radixSort(arr) {
    const longestNumber = getLongestNumber(arr);
    const buckets = [[], [], [], [], [], [], [], [], [], []];
    let tempArr = arr;
    for (let i = longestNumber - 1; i >= 0; i--) {
        for (let j = 0; j < tempArr.length; j++) {
            const digit = getDigit(tempArr[j], i, longestNumber);
            buckets[digit].push(tempArr[j]);
        }
        tempArr = [];
        buckets.forEach(bucket => {
            while (bucket.length) {
                tempArr.push(bucket.shift())
            }
        })
    }
    return tempArr;
}

console.log(radixSort([13, 1414, 253, 232, 536, 68, 979, 5, 3, 1, 46, 8666]));
