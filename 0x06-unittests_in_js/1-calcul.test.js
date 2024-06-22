const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 7 when inputs are 1.5 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.5, 4.5), 7);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -3 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 1 when inputs are 1.4 and 1', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 1), 1);
    });

    it('should return 0.5 when inputs are 1 and 1.9', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 1.9), 0.5);
    });

    it('should return 2 when inputs are 5 and 2.4', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 2.4), 2);
    });

    it('should return "Error" when dividing by a number that rounds to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });
  });
});