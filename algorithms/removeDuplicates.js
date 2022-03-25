function removeDuplicatesReturnDeletionsNum(str) {
  const tempObj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in tempObj) tempObj[str[i]]++;
    else tempObj[str[i]] = 1;
  }
  const appearanceArr = Object.values(tempObj);
  const sortedAppearanceArr = appearanceArr.sort((a, b) => a + b);
  let counter = 0;
  console.log(sortedAppearanceArr);
  for (let i = 0; i < sortedAppearanceArr.length; i++) {
    if (sortedAppearanceArr[i] < sortedAppearanceArr[i + 1]) {
      sortedAppearanceArr[i + 1]--;
      counter++;
      if (sortedAppearanceArr[i] !== sortedAppearanceArr[i + 1]) i--;
    }
  }
  return counter;
}

console.log(removeDuplicatesReturnDeletionsNum("abcdefg"));
console.log(removeDuplicatesReturnDeletionsNum("abcdefffggg"));
