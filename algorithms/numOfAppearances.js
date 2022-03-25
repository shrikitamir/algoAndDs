function numOfAppearances(arr) {
    const instancesObj = {};
    for (let i = 0; i < Math.max(...arr) + 1; i++) {
        instancesObj[i] = 0;
    }
    for (let i = 0; i < arr.length; i++) {
        instancesObj[arr[i]]++;
    }
    return Object.values(instancesObj);
}

console.log(numOfAppearances([0, 1, 1, 3, 3, 3, 3, 5, 5, 3, 4]));
