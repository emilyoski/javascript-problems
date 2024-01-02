/*

Input: 2 sorted arrays
-includes variety of numbers, different length arrays
-can be an empty array
-either input array can be longer

Output: Array
-new array
-sorted, contains all elements from both input arrays

Examples/Test Cases:
-must build the array one element at a time in the proper order
-cannot mutate the input arrays
-need to be aware of the comparison because may be empty array
  (when comparing elements)
[1, 5, 9]
[2, 6, 8]
[ 9]
[1 2 5 6 8 9]


[1, 1, 3], [2, 2]
[1 1 2 2 3]

[1, 1, 3], [2, 2]
[ 3]
[1 1 2 2 3]

[] [1 4 5]
[1 4 5]

Data Structure:
-Input arrays
-Combined array (concat arrays)
-Array for output

Algorithm:
-Concatenate arrays into one array
-Initialize the merged array
-Save the length of the combined array
-Iterate from 0 up to the combined array length
  -Find the min number of the numbers
  -Find the index of that number
  -Splice that index out and add the return number to our merged array
-return the merged array

*/

// function merge(arr1, arr2) {
//   let combinedArray = arr1.concat(arr2);
//   let length = combinedArray.length;
//   let mergeArr = [];

//   for (let i = 0; i < length; i++) {
//     let min = Math.min(...combinedArray);
//     let index = combinedArray.indexOf(min);
//     mergeArr.push(combinedArray.splice(index, 1)[0]);
//   }

//   return mergeArr;
// }

// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
// console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]

function merge(array1, array2) {
  const copy1 = array1.slice();
  const copy2 = array2.slice();
  const result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

// function splitArray(array) {
//   let half = Math.ceil(array.length / 2);

//   if (array.length === 1) {
//     return array;
//   } else {
//     return [splitArray(array.slice(0, half)), splitArray(array.slice(half))];
//   }
// }

// function mergeSort(arr1) {
//   return splitArray(arr1);
// }

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let subArray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

let exampleArr = [7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46];
console.log(mergeSort(exampleArr));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]