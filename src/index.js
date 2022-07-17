const getCloseBracket = (bracket, bracketsConfig) => {
  for (let item of bracketsConfig) {
    if (item[0] === bracket) return item[1];
  }
}

module.exports = function check(str, bracketsConfig) {
  let bracketsStack = [];

  for (let i = 0; i < str.length; i++) {
    let closeBracket = getCloseBracket(str[i], bracketsConfig);

    if ((bracketsStack.length === 0 || bracketsStack.at(-1) !== str[i]) && (closeBracket === undefined)) {
      return false;
    }

    if (bracketsStack.at(-1) === str[i]) {
      bracketsStack.pop();
    } else if (closeBracket !== undefined) {
      bracketsStack.push(closeBracket);
    }
  }

  return (bracketsStack.length === 0);
}

// console.log(module.exports('|(|)|', [['(', ')'], ['|', '|']]));
