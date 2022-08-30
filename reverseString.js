function reverseString(string) {
  let str = '';
  if (typeof string !== 'string') {
    return 'Not a string';
  }
  for (let i = string.length - 1; i >= 0; i--) {
    str += string[i];
  }
  return str;
}

module.exports = reverseString;