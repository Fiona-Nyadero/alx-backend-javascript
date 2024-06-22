const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 7 when inputs are 1.5 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 4.5), 7);
  });

  it('should return -4 when inputs are 1.4 and 4.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 1 when inputs are 1.4 and 1', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 1), 1);
  });
  
  it('should return "Error" when dividing by a number that rounds to 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
  });
});