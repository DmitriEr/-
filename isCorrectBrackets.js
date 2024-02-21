const brackets = {
  '{': '}',
  '}': '{',
  '[': ']',
  ']': '[',
  '(': ')',
  ')': '(',
}

const isCorrectBrackets = (value) => {
  if (value.length % 2 !== 0) {
    return false;
  }

  const result = [];

  for (let i = 0; i < value.length; i++) {
    const item = value[i];
    if (i === 0) {
      result.push(item)
    } else {
      const lastResultItem = brackets[result[result.length - 1]];
      item !== lastResultItem ? result.push(item) : result.pop();
    }
  }

  return !result.length;
};

console.log(isCorrectBrackets("[{}]")); // true
console.log(isCorrectBrackets("([]{})")); // true
console.log(isCorrectBrackets("[({)}]")); // false
console.log(isCorrectBrackets("([])")); // true
console.log(isCorrectBrackets("(([])")); // false