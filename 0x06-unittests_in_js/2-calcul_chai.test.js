const expect = require('chai').expect;
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 4 for input (SUM, 1, 3)', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 for input (SUM, 1, 3.7)', function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 5 for input (SUM, 1.2, 3.7)', function() {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 6 for input (SUM, 1.5, 3.7)', function() {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -2 for input (SUBTRACT, 1, 3)', function() {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should return -3 for input (SUBTRACT, 1, 3.7)', function() {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('should return -3 for input (SUBTRACT, 1.2, 3.7)', function() {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('should return -2 for input (SUBTRACT, 1.5, 3.7)', function() {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.5 for input (DIVIDE, 1, 2)', function() {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });

    it('should return 0.25 for input (DIVIDE, 1, 3.7)', function() {
      expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    });

    it('should return 0.5 for input (DIVIDE, 2.2, 3.7)', function() {
      expect(calculateNumber('DIVIDE', 2.2, 3.7)).to.equal(0.5);
    });

    it('should return "Error" for input (DIVIDE, 1.5, 0)', function() {
      expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
    });
  });

  describe('Default Case', function() {
    it('should return undefined for input (MULTIPLY, 1.5, 0)', function() {
      expect(calculateNumber('MULTIPLY', 1.5, 0)).to.be.undefined;
    });
  });
});
