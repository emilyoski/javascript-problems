/*

Input: Number
-valid integer

Output: Number
-represents the next featured number
-issues an error message if there is no next featured number

Examples/Test Cases:
-featured number ->
  -odd number
  -multiple of 7
  -digits occurring only once
-largest possible featured number is 9876543201
20 -> 21 (odd, 7, unique)
21 -> 28 (not odd) -> 35 (odd, 7, unique digits)
1029
[1 0 2 9]
1 -> [0 2 9]
0 -> [2 9]

Data Structure:
-array of the digits when seeing if they are unique?

Algorithm:
-return the error message if the input number is 9876543201 or greater
-iterate from the number given (plus 1 - can't be the number given)
  -check if it's odd, multiple of 7 and unique digits
  -return the number if so

-unique digits determination
-convert into a string and split into an array
-iterate through the elements
  -slice from that (index + 1) and rest of array
  -determine if that element exists in the rest of the array
  -return false if elements exists in that sliced section
-otherwise, return true

*/

function findNext7Divisor(number) {
  while (number % 7 !== 0) {
    number += 1;
  }
  return number;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function isUnique(number) {
  let nums = String(number).split('');

  for (let index = 0; index < nums.length; index++) {
    let rest = nums.slice((index + 1));

    if (rest.includes(nums[index])) {
      return false;
    }
  }
  return true;
}

function featured(previousNum) {
  if (previousNum >= 9876543201) {
    return 'There is no possible number';
  }

  let nextNum = findNext7Divisor(previousNum + 1);

  for (nextNum; nextNum < 9876543201; nextNum += 7) {
    if (isOdd(nextNum) && isUnique(nextNum)) {
      return nextNum;
    }
  }
  return nextNum;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));
// "There is no possible number that fulfills those requirements."