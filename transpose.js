/*

Input: Array
-consisting of arrays
-3 x 3 matrix representation

Output: Array
-consists of arrays
-transpose of the input array
(rows are now columns, columns now rows)
-must be a new matrix

Examples/Test Cases:
-implement without using any external libraries
-do not modify the original matrix
1  5  8      -> 1  4  3
4  7  2      -> 5  7  9
3  9  6      -> 8  2  6

Data Structure:
-Array consisting of nested arrays

Algorithm:
-Initialize an empty transpose array
-OUTER LOOP: Iterate from 0 up to the length of the array (column #)
  -initialize a row array
  -INNER LOOP: iterate through the input array again (represents each row #)
    -collecting the current iteration/index (column #)
  -add those to a new row array
  -add array to transpose array

*/

function transpose(array) {
  let transposeArray = [];

  for (let columnIndex = 0; columnIndex < array[0].length; columnIndex++) {
    let row = [];

    array.forEach(function(rowElement, rowIndex) {
      row.push(array[rowIndex][columnIndex]);
    });

    transposeArray.push(row);
  }
  return transposeArray;
}

function rotate90(array) {
  let transposeArray = [];

  for (let columnIndex = 0; columnIndex < array[0].length; columnIndex++) {
    let row = [];

    array.forEach(function(rowElement, rowIndex) {
      row.push(array[rowIndex][columnIndex]);
    });

    transposeArray.push(row.reverse());
  }
  return transposeArray;
}


const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]