const reverseString = require('./reverseString');

test('reverse of SONICK to be KCINOS', () => {
  expect(reverseString('SONICK')).toBe('KCINOS');
})

test('reverse of 1234 to be invalid', () => {
  expect(reverseString(1234)).toBe('Not a string');
})