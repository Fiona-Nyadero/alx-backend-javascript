const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
        it('should return 4 when inputs are 1 and 3', () => {
                assert.strictEqual(calculateNumber(1, 3), 4);
        });
});

describe('calculateNumber', () => {
        it('should return 6 when inputs are 1 and 4.7', () => {
                assert.strictEqual(calculateNumber(1, 4.7), 6);
        });
        it('should return 7 when inputs are 1.6 and 4.7', () => {
                assert.strictEqual(calculateNumber(1.6, 4.7), 7);
        });
});

describe('calculateNumber', () => {
        it('should return 2 when inputs are 0.5 and 0.5', () => {
                assert.strictEqual(calculateNumber(0.5, 0.5), 2);
        });

});

describe('calculateNumber', () => {
        it('should return -1 when inputs are -0.7 and -0.5', () => {
                assert.strictEqual(calculateNumber(-0.7, -0.5), -1);
        });

        it('should return -2 when inputs are -1 and -1', () => {
                assert.strictEqual(calculateNumber(-1, -1), -2);
        });
});

describe('calculateNumber', () => {
        it('should return 0 when inputs are 0 and 0', () => {
                assert.strictEqual(calculateNumber(0, 0), 0);
        });
});