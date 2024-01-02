/*

Input: number in string format
-may include other characters
  -can ignore all non-numeric characters in the input string

Output: check if valid (true or false)
-determined using the Luhn formula (checksum formula)

Rules for the Luhn formula:
-verifying against the check digit (calculated)
-calculated check digit via:
  -counting from rightmost digit and moving left,
    double the value of every second digit
  -any digit 10 OR more than 10, subtract 9 from the doubled result
  -add all the digits together
  -the total (CHECKSUM) ends in 0 (divisible by 10) then number is valid
-total is the numbers as a whole (remove the spaces and evaluate)
-need to remove any non-numeric characters before evaluating

Examples:
1111 -> [1 1 1 1] -> [ 2 1 2 1] -> 2 + 1 + 2 + 1 = 6 (no)
8763 -> [8 7 6 3] -> 6 (doubled to 12, greater than 10 so minus 9 = 3)
                  -> 8 (doubled to 16, greater than 10 so minus 9 = 7)
        therefore [7 7 3 3] -> 7 + 7 + 3 + 3 = 20 (yes)

2323 2005 7766 3554 (yes)
[2 3 2 3 2 0 0 5 7 7 6 6 3 5 5 4]
[4 3 4 3 4 0 0 5 5 7 3 6 6 5 1 4] -> 60 -> valid

console.log(luhnValidCheck('1111') === false);
console.log(luhnValidCheck('2323 2005 7766 3554') === true);
console.log(luhnValidCheck('8763') === true);
console.log(luhnValidCheck('8a7b6c3') === true);
console.log(luhnValidCheck('') === false);

Data Structures:
string input -> need to sanitize any non-numeric characters
need to evaluate digit by digit (from the rightmost digit)
need to perform arithmetic calculations
string input -> array of digits -> boolean output

Algorithm:
-Handle invalid input (empty string) -> return false
-Transform string input to array of digits
  -remove any non-numeric characters via regex
  -split into an array of string digits
  -reverse the order
  -transform the array into numbers
-Calculate the Luhn Checksum
  -iterate through the digits
  -if the index is odd:
    -double the digit
    -if the doubled digit >= 10, subtract 9
    -return that digit to replace the current digit
  -sum all the digits into the total (checksum)
-Determine if the checksum remainder of 10 is 0 (divisible)

*/

function doubleLuhnDigit(number) {
  let digit = number * 2;

  if (digit > 9) {
    digit -= 9;
  }

  return digit;
}

function findSum(array) {
  return array.reduce((sum, num) => sum + num);
}

function createArrayOfDigits(string) {
  return string.replace(/[^0-9]/g, '').split('').reverse().map(str => parseInt(str, 10));
}

function transformIntoLuhn(array) {
  let doubledLuhn = array.map(function(num, index) {
    if (index % 2 !== 0) {
      return doubleLuhnDigit(num);
    } else {
      return num;
    }
  });

  return findSum(doubledLuhn);
}

function luhnValidCheck(numString) {
  let digitArray = createArrayOfDigits(numString);
  let checkSum = transformIntoLuhn(digitArray);

  return checkSum % 10 === 0;
}

function findValidLuhn(invalidNumString) {
  if (luhnValidCheck(invalidNumString)) {
    return invalidNumString;
  }

  for (let extraDigit = 0; extraDigit < 10; extraDigit += 1) {
    let proposedNum = invalidNumString + String(extraDigit);
    if (luhnValidCheck(proposedNum)) {
      return proposedNum;
    }
  }
}

console.log(luhnValidCheck('1111')); // false
console.log(luhnValidCheck('2323 2005 7766 3554')); // true
console.log(luhnValidCheck('8763')); // true
console.log(luhnValidCheck('8a7b6c3')); // true

console.log(findValidLuhn('2323 2005 7766 355'));
console.log(findValidLuhn('876')); // true