module.exports = function check(str) {
  const bracketsConfig = ['(', '{', '[', '|'];
  const PAIRED_BRACKETS = {
    [')']:'(',
    ['}']:'{',
    [']']:'[',
    ['|']:'|',
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (bracketsConfig.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];
      if (PAIRED_BRACKETS[currentSymbol] === topElement) {
        stack/pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
