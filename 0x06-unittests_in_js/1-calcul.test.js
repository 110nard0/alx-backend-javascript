const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 4 for input (SUM, 1, 3)', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 for input (SUM, 1, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5 for input (SUM, 1.2, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 6 for input (SUM, 1.5, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -2 for input (SUBTRACT, 1, 3)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should return -3 for input (SUBTRACT, 1, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('should return -3 for input (SUBTRACT, 1.2, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it('should return -2 for input (SUBTRACT, 1.5, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.5 for input (DIVIDE, 1, 2)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
    });

    it('should return 0.25 for input (DIVIDE, 1, 3.7)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    });

    it('should return 0.5 for input (DIVIDE, 2.2, 3.7)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.2, 3.7), 0.5);
    });

    it('should return "Error" for input (DIVIDE, 1.5, 0)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.5, 0), 'Error');
    });
  });

  describe('Default Case', function() {
    it('should return undefined for input (MULTIPLY, 1.5, 0)', function() {
      assert.strictEqual(calculateNumber('MULTIPLY', 1.5, 0), undefined);
    });
  });
});
