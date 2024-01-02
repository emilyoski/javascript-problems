/*

Input: Array
-consisting of at least two elements
-can be numbers or strings (assuming not both)

Output: Array (same, mutated)
-sorting should be done in place here

Examples/Test Cases:
-iterate through the array until pass through and no sorting is done
-compares two elements at a time
  -if the second element is smaller than the first, swapped
[5 3] -> 5 > 3 therefore swapped -> [3 5] (no swaps and returned)

Data Structure:
-Array -> will be mutated throughout the iterations

Algorithm:
-OUTER LOOP Iterate through the array consistently (while swapped is true)
  -make copy of the array
  -INNER LOOP: iterate through the array
    -if the element is greater than the next element, perform a swap
    -splice the array, remove the element at that index
    -insert it at the index, deleting no elements

  -end of inner loop -> if the current array is the same as the copy,
    set swapped to false
-return the array

*/

function sameArrays(arr1, arr2) {
  return arr1.map(ele => String(ele)).join('') === arr2.map(ele => String(ele)).join('');
}

function bubbleSort(array) {
  let swapped = true;

  while (swapped) {
    let copyArray = array.slice();

    for (let index = 0; index < array.length; index++) {
      if (array[index] > array[index + 1]) {
        let num = array.splice(index, 1)[0];
        array.splice((index + 1), 0, num);
      }
    }

    if (sameArrays(copyArray, array)) {
      swapped = false;
    }
  }

  return array;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]