/*

Input: user entered phone number
-can contain digits, special characters
-ASSUMING should not contain letters or anything not digits/special characters
-special characters(spaces dash dot parentheses) should be ignored
-assuming string input because there is special characters

Output: "cleaned up phone number"
-can be sent as SMS messages
-assuming a string output (string output on bad number)
-only digits in the output (special characters ignored)

Rules:
-phone number < 10 digits => bad number
-phone number = 10 digits => good number
-phone number = 11 digits (first number is 1) => good number AFTER trimming 1
-phone number = 11 digits (first number is NOT 1) => bad number
-phone number > 11 digits => bad number
-bad numbers => return a string of ten 0's

Examples:

good number, 10 digits, different special characters
cleanUpPhone('123-456-7891') === '1234567891';
cleanUpPhone('123.456.7891') === '1234567891';
cleanUpPhone('(123)-456-7891') === '1234567891';
cleanUpPhone('123/456/7891') === '1234567891';

bad number, 9 digits
cleanUpPhone('123-456-789') === '0000000000';

good number, 11 digits but first number is 1
cleanUpPhone('1-987-654-3211') === '9876543211';

bad number, 11 digits but first number is NOT 1
cleanUpPhone('3-987-654-3211') === '0000000000';

bad number, 12 digits (more than 11)
cleanUpPhone('1-987-6544-3211) === '0000000000';

??  good number, 10 digits but not special characters
??  cleanUpPhone(1a23-456-7891) === '123-456-7891';

Data Structure:
string input and string output
  -can use regex to clean up the input

Algorithm:
-Sanitize the user input, remove all but the digits
-Verify the length is valid (10 or 11)
  -if the length is invalid, return 10 0's
  -if the length is 11, verify the first number
    -if the first number is not 1, return 10 0's
    -if the first number is 1, return the number (starting at the 2nd number)
  -if the length is 10, return the number

*/

function cleanUpPhone(inputNumber) {
  let cleanNumber = inputNumber.replace(/[^0-9]/g, '');

  if (cleanNumber.length === 10) {
    return cleanNumber;
  } else if (cleanNumber.length === 11 && cleanNumber[0] === '1') {
    return cleanNumber.slice(1);
  } else {
    return '0000000000';
  }
}

// good number, 10 digits, different special characters
console.log(cleanUpPhone('123-456-7891') === '1234567891');
console.log(cleanUpPhone('123.456.7891') === '1234567891');
console.log(cleanUpPhone('(123)-456-7891') === '1234567891');
console.log(cleanUpPhone('123/456/7891') === '1234567891');

// bad number, 9 digits
console.log(cleanUpPhone('123-456-789') === '0000000000');

// good number, 11 digits but first number is 1
console.log(cleanUpPhone('1-987-654-3211') === '9876543211');

// bad number, 11 digits but first number is NOT 1
console.log(cleanUpPhone('3-987-654-3211') === '0000000000');

// bad number, 12 digits (more than 11)
console.log(cleanUpPhone('1-987-6544-3211') === '0000000000');
