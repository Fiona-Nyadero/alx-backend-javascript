function calculateNumber(type, a, b) {
    a = Math.round(a);
    b = Math.round(b);

    switch (type) {
      case 'SUM':
        return a + b;
      case 'SUBTRACT':
        return a - b;
      case 'DIVIDE':
        if (b === 0) {
          throw new Error('Division by 0!');
        }
        return a / b;
    }
}
  
  module.exports = calculateNumber;