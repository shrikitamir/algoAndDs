function bottlesOfMilk(money) {
    let milkBottles = money / 3;
    function recycleMilkBottles(numOfBottles) {
        if (numOfBottles < 2) return;
        milkBottles++;
        numOfBottles++;
        recycleMilkBottles(numOfBottles - 2);
    }
    recycleMilkBottles(milkBottles);
    return milkBottles;
}

console.log(bottlesOfMilk(15));
