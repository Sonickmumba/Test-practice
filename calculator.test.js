const Calculator = require('./calculator');

const cal = new Calculator();

describe('Add', () => {
  test('add', () => {
    expect(cal.add(-12,4)).toBe(-8);
  })

  test('add', () => {
    expect(cal.add(2,4)).toBe(6);
  })

  test('add', () => {
    expect(cal.add(2,-8)).toBe(-6);
  })
})

describe('Subtract', () => {
  test('subtrack', () => {
    expect(cal.subtract(2,4)).toBe(-2);
  })

  test('subtrack', () => {
    expect(cal.subtract(0,4)).toBe(-4);
  })

  test('subtrack', () => {
    expect(cal.subtract(20,4)).toBe(16);
  })
})

describe('Multiply', () => {
  test('multiply', () => {
    expect(cal.multiply(2,4)).toBe(8);
  })

  test('multiply', () => {
    expect(cal.multiply(0,4)).toBe(0);
  })

  test('multiply', () => {
    expect(cal.multiply(-2,-4)).toBe(8);
  })
})

describe('Divide', () => {
  test('divide', () => {
    expect(cal.divide(0,0)).toBe('Invalid');
  })
})

describe('Divide', () => {
  test('divide', () => {
    expect(cal.divide(5,0)).toBe('Invalid!! Division by zero');
  })
})
  
describe('Divide', () => {
  test('divide', () => {
    expect(cal.divide(8,2)).toBe(4);
  })
})