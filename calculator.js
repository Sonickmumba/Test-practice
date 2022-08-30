class Calculator {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add = (x, y) => x + y;

  subtract = (x,y) => x - y;

  multiply = (x, y) => x * y;

  divide = (x, y) => {
    if (x === 0 && y === 0) {
      return 'Invalid';
    } else if (x !== 0 && y === 0){
      return 'Invalid!! Division by zero';
    }
    return x / y;
  }

}

// const cal = new Calculator();

module.exports = Calculator;