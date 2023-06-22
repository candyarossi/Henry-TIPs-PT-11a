function HasBalancedBrackets(string) {
  //Tu código aquí

  // Opción 1

  let openBrackets = ["(", "[", "{"];
  let closeBrackets = [")", "]", "}"];
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (openBrackets.includes(string[i])) arr.push(string[i]);
    else {
      let index = closeBrackets.indexOf(string[i]);
      let pair = openBrackets[index];
      if (pair !== arr.pop()) return false;
    }
  }
  return !arr.length;

  // Opción 2

  let brackets = { "(": ")", "[": "]", "{": "}" };
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (brackets[string[i]]) arr.push(string[i]);
    else if (brackets[arr.pop()] !== string[i]) return false;
  }
  return !arr.length;
}

module.exports = HasBalancedBrackets;
