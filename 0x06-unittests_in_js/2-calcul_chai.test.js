const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 7 when inputs are 1.5 and 4.5', () => {
    expect(calculateNumber('SUM', 1.5, 4.5)).to.equal(7);
  });

  it('should return -4 when inputs are 1.4 and 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 1 when inputs are 1.4 and 1', () => {
    expect(calculateNumber('DIVIDE', 1.4, 1)).to.equal(1);
  });
  
  it('should return "Error" when dividing by a number that rounds to 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
  });
});