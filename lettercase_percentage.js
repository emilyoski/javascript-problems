/*

Input: string
-variety of string characters
-could be uppercase, lowercase, neither

Output: Object, with 3 properties
-containing uppercase, lowercase, neither percentages
-Percentages are strings
-Formatted with 2 decimals

Examples/Test Cases:
-spaces fall under neither

-abCdef 123 -> lowercase (abdef), uppercase(C), neither (space, 123)
10 total -> lowercase(5/10), uppercase(1/10), neither (4/10)

Data Structure:
-Input string -> array for the matches

Algorithm:
-Create an object with the lowercase, uppercase, neither
-Calculate the length of the input string
-Find all the lowercase matches and count the length of that
  (or 0 if it's null/no matches)
-Find all the uppercase matches and count the length of that
-Subtract the uppercase and lowercase from the total length
-Format lowercase / total length
-Format uppercase / total length
-Format neither / total length

Number.parseFloat(x).toFixed(2) -> floating point number then
  number with 2 fixed-point notation (decimals)

*/

function formatDecimal(number) {
  return Number.parseFloat((number * 100)).toFixed(2);
}

function letterPercentages(string) {
  let uppercaseMatches = string.match(/[A-Z]/g) || [];
  let lowercaseMatches = string.match(/[a-z]/g) || [];
  let neitherCount = string.length - uppercaseMatches.length
    - lowercaseMatches.length;

  return {
    lowercase: formatDecimal(lowercaseMatches.length / string.length),
    uppercase: formatDecimal(uppercaseMatches.length / string.length),
    neither: formatDecimal(neitherCount / string.length)
  };
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }