const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('0-calcul.calculateNumber()', () => {
  it('should return 5 when arguments are 3 and 5', () => {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it('should return 6 when arguments are 3.2 and 2.6', () => {
    assert.strictEqual(calculateNumber(3.2, 2.6), 6);
  });

  it('should return 4 when arguments are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when arguments are 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 when arguments are 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(-1.1, -3.3);
    assert.strictEqual(result, -4);
  });

  it('should not pass when a boolean value is given', () => {
    const result = calculateNumber(false, 3);
    assert.notStrictEqual(result, NaN);
  });

  it('should return NaN when one argument is a string', () => {
    assert.strictEqual(calculateNumber('a', 3.7), NaN);
  });

  it('should return NaN when arguments are string', () => {
    assert.strictEqual(calculateNumber('a', 'b'), NaN);
  });

  it('should return NaN when no arguments are given', () => {
    assert.strictEqual(calculateNumber(), NaN);
  });

  it('should return NaN when one argument is given', () => {
    assert.strictEqual(calculateNumber(3), NaN);
  });

  it('should return NaN when one argument is not a number', () => {
    assert.strictEqual(calculateNumber(3, {}), NaN);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(1.1, 3.3);
    assert.strictEqual(result, 4);
  });

  it('should pass if values are equal', () => {
    const result = calculateNumber(-1.5, 3.3);
    assert.strictEqual(result, 2);
  });

  it('should not pass when a boolean value is given', () => {
    const result = calculateNumber(false, 3);
    assert.notStrictEqual(result, NaN);
  });
});
