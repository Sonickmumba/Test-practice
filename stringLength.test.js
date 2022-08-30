const stringLength = require('./stringLength');

test('length of sonickmumba to be invalid', () => {
  expect(stringLength('sonickmumba')).toBe('Invalid');
})
