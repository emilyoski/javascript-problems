/*

Input: list of numbers representing a short hand range; string
-only the significant part of the next number is written
  -the part that is changing
-numbers are always increasing
-range limits are inclusive
-can include separators (- : ..) or none at all
-first number is the starting number
-once the number is less than that number, up to the next set of ten
-multiple delimiters
-delimiter is sequence of that range, counting up from the right first number
-comma then skips counting and go to that number
-delimiter is including all the numbers in that range
-start of a range...basically counting up until you reach
  a number that the ends with starts with that number
-assuming the separators are only those listed
-assuming that we will not receive an empty string and valid input

Output: full range of numbers; array of numbers
-should be a complete list of numbers in the range

Examples:
"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
1 3 7 12 14 21

"1-3, 1-2" --> 1, 2, 3, 11, 12

"1:3, 1:2" --> 1, 2, 3, 11, 12

"1..3, 1..2" --> 1, 2, 3, 11, 12

"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12

"104-2" --> 104, 105, ... 112

"104-02" --> 104, 105, ... 202
[104-2]
[[104 2]]

"545, 64:11" --> 545, 564, 565, .. 611
[545 64:11]
[545 [64 11]]

Data Structure:
string for the input -> break up the inputs into an array on separators? commas?
or iterate through the numbers, doing things when it hits separator or commas
array for the range of numbers output

Algorithm:
-Initialize a final output range array
-Initialize a comparator to 0
-Split the input string based on commas/space (each set of numbers/number)
-Split each set of numbers based on the delimiter
(Should have an array with each delimited set as a nested array)

-Iterate through the input array
  -set the comparator equal to the last number in the range array (or 0)

  -number is greater than the comparator
    -push the number to the array
  -number is less than the comparator
    -"step up to the next number"
      -keep adding 1 to the number until the
      string ends with whatever the next number is
    -push that stepped up number to the array
  -if the value is an array (iterate through the range)
    -"step up to the first number"
      -keep adding 1 to the number until the
      string ends with whatever the next number is
    -add the number to the range
    -add 1 to the number
    -add the number to the range
    -stop when the number ends with the value of the last element of the array

-return the output array
*/


function breakInputToArray(numString) {
  let numberSplit = numString.split(', ');

  return numberSplit.map(function(range) {
    let regex = /(-|:|\.{2})/;
    if (regex.test(range)) {
      return range.match(/\d+/g);
    } else {
      return range;
    }
  });
}


function getRange(arr, lastNum) {
  let fullRange = [];

  for (let index = 0; index < arr.length - 1; index += 1) {
    let comparator = fullRange[fullRange.length - 1] || Number(lastNum);

    while (!String(comparator).endsWith(String(arr[index]))) {
      comparator += 1;
    }

    while (!String(comparator).endsWith(arr[index + 1])) {
      fullRange.push(comparator);
      comparator += 1;
    }

    fullRange.push(comparator);
  }
  return fullRange;
}

// function getRange(arr, lastNum) {
//   let fullRange = [];

//   let comparator = fullRange[fullRange.length - 1] || Number(lastNum);

//   while (!String(comparator).endsWith(String(arr[0]))) {
//     comparator += 1;
//   }

//   while (!String(comparator).endsWith(arr[arr.length - 1])) {
//     fullRange.push(comparator);
//     comparator += 1;
//   }

//   fullRange.push(comparator);
//   return fullRange;
// }


function getFullRange(string) {
  let fullRange = [];
  let inputRange = breakInputToArray(string);

  inputRange.forEach(function(element) {
    let comparator = fullRange[fullRange.length - 1] || 0;

    if (Array.isArray(element)) {
      let arrayRange = getRange(element, comparator);
      fullRange = fullRange.concat(arrayRange);
    } else if (Number(element) < Number(comparator)) {
      while (!String(comparator).endsWith(String(element))) {
        comparator += 1;
      }
      fullRange.push(comparator);
    } else {
      fullRange.push(Number(element));
    }
  });

  return fullRange;
}

// happy case
console.log(getFullRange("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]

// different separators
console.log(getFullRange("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(getFullRange("1:3, 1:2")); // [1, 2, 3, 11, 12]
console.log(getFullRange("1..3, 1..2")); // [1, 2, 3, 11, 12]
console.log(getFullRange("1-3, 2-1")); // [1, 2, 3, 12, 13, ... 21]

// multiple separators
console.log(getFullRange("1:5:2")); // [1, 2, 3, 4, 5, 6, ... 12]

// larger numbers, larger step ups
console.log(getFullRange("104-2")); // [104, 105, ... 112]
console.log(getFullRange("104-02")); // [104, 105, ... 202]
console.log(getFullRange("545, 64:11")); // [545, 564, 565, .. 611]
