const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  let max = 0;
  for (let i = 0; i < digits.length; i++) {
    const tempDigits = digits.slice(0);
    tempDigits.splice(i, 1);
    const newNumber = parseInt(tempDigits.join(''), 10);
    max = Math.max(max, newNumber);
  }
  return max;
}

module.exports = {
  deleteDigit
};
