/*

Input: String
-represents a octal number

Output: Number
-represents decimal version of that value

Examples:
10 -> [1 0]
1 * 8^1 + 0 * 8^0
1 * 8 + 0 * 1
8 + 0 = 8

Data Structure/Algorithm:
-Array to break down the string into digits
['1' '3' '0']
-Transform the elements into numbers
[1 3 0]
-Reverse the array's elements
-Transform the elements into the octal conversion (* 8 ^ power)
  where power increases by 1, starts at 0
[(0 * 8^0) (3 * 8^1) (1 * 8^2)] -> [0 24 64]
-Combine all the elements into one sum (reduce)

*/


function octalToDecimal(numberString) {
  let strArray = numberString.split('').reverse();
  let numArray = strArray.map(num => Number(num));
  let power = 0;

  let octalArray = numArray.map(function(num) {
    let octalNum = num * (Math.pow(8, power));
    power += 1;
    return octalNum;
  });

  let octalNum = octalArray.reduce((sum, num) => sum + num);
  console.log(octalNum);
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9