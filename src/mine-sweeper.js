const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = matrix.map(row => row.map(() => 0));
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (matrix[row][col]) {
        for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, numRows - 1); i++) {
          for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, numCols - 1); j++) {
            if (!(i === row && j === col)) {
              result[i][j]++;
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
