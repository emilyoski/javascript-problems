/*

Input: integer
-represents a year
-assume year is valid and greater than 1752

Output: integer
-represents the number of Friday the 13th's

Examples/Test Cases:
2017 -> 2

Data Structure:
-Array of all the 13th of each month of that year

Algorithm:
-Generate an array consisting of date objects
-Date object will be 13th, each month and that year passed as an argument
-Initialize a friday 13th count to 0
-Iterate through the date objects
  -if that date is a friday -> increment the count by 1
-Return the count

*/

function findAll13ths(year) {
  let all13ths = [];

  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13, 0, 0, 0);
    all13ths.push(date);
  }

  return all13ths;
}

function fridayThe13ths(year) {
  let all13ths = findAll13ths(year);
  return all13ths.filter(day => day.getDay() === 5).length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2