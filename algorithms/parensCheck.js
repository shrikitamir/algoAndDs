const checkParentheses = (str) => {
  const openParens = "[(<";
  const closeParens = "])>";
  const openers = [];
  for (let i = 0; i < str.length; i++) {
    const openParen = openParens.indexOf(str[i]);
    const closeParen = closeParens.indexOf(str[i]);
    if (openParen !== -1) {
      openers.push(openParens[openParen]);
      continue;
    } else if (closeParen !== -1) {
      const lastOpener = openers.pop();
      if (openParens.indexOf(lastOpener) !== closeParen) return false;
    }
  }
  return !openers.length;
}

console.log(checkParentheses('<adasd></adasd>'));
console.log(checkParentheses('<(ok?)>'));
console.log(checkParentheses('[[abc<<def((ghi))jkl>>mno]]p'));
console.log(checkParentheses('[[abc<<def((ghi))jkl>>mno]]>'));