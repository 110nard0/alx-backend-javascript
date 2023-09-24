const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

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

    it('should return -3 for input (SUBTRACT, 1.5, 3.7)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -3);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.33 for input (DIVIDE, 1, 3)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3), 0.33);
    });

    it('should return 0.27 for input (DIVIDE, 1, 3.7)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 3.7), 0.27);
    });

    it('should return 0.32 for input (DIVIDE, 1.2, 3.7)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.32);
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
