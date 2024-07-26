const { expect } = require('chai');

describe('Testing numbers', () => {
  it('1 is equal to 1', () => {
    expect(1 === 1).to.be.true;
  });

  it('7 is equal to 7', () => {
    expect(2 === 2).to.be.true;
  });

  it.skip('1 is equal to 3', () => {
    expect(1 === 3).to.be.true;
  });

  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  it('8 is equal to 8', () => {
    expect(8 === 8).to.be.true;
  });

  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  it('9 is equal to 9', () => {
    expect(9 === 9).to.be.true;
  });

  it('7 is equal to 7', () => {
    expect(7 === 7).to.be.true;
  });
});
