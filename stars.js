"use strict";

/*

Input: integer
-odd integer greater than 7 (or equal to)
-represents the length of the grid and number of rows

Output:
-8 pointed star
-consists of spaces and stars
-middle row is N number of stars
-other rows have 3 stars, various amount of spaces between stars
-stars in all 4 corners

Examples/Test Cases:
*  *  * (2 spaces between, 0 outside, 4 spaces total, 3 stars) 7 total slots
 * * *  (1 space between, 1 outside, 4 spaces total, 3 stars) 7 total slots
  ***   (0 spaces between, 2 outside, 4 spaces total, 3 stars) 7 total slots
******* (7 stars) 7 total slots
  ***   (0 spaces between, 4 spaces total, 3 stars) 7 total slots
 * * *  (1 space between, 4 spaces total, 3 stars) 7 total slots
*  *  * (2 spaces between, 4 spaces total, 3 stars) 7 total slots

Data Structure:
-String for each row
-String for the middle row (1 - 7), middle is 4 of only stars

Algorithm:
-Determine the number of spaces between (N - 3 / 2), spaces outside (0)
-Set decreasing to true
-Determine the middle row (N / 2, rounded up)
-Iterate from 1 to N (including N)
  -if decreasing
    -Output each line (outside, star, between, star, between, star, outside)
    -outside increase by 1
    -between decrease by 1
  -if middle row
    -output a line with stars repeated N times
    -set decreasing to false
  -otherwise (decreasing is false now)
    -Output each line (outside, star, between, star, between, star, outside)
    -outside decrease by 1
    -between increase by 1

*/

function outputLine(spaceBetween, spaceOutside) {
  let line = ' '.repeat(spaceOutside) + '*' + ' '.repeat(spaceBetween) +
    '*' + ' '.repeat(spaceBetween) + '*' + ' '.repeat(spaceOutside);
  console.log(line);
}

function initialSpaceCount(n) {
  return ((n - 3) / 2);
}

function star(rows) {
  let between = initialSpaceCount(rows);
  let outside = 0;
  let decreasing = true;

  for (let row = 1; row <= rows; row++) {
    if (row === Math.ceil(rows / 2)) {
      console.log('*'.repeat(rows));
      decreasing = false;
      between = 0;
      outside = ((rows - 3 ) / 2);
    } else if (decreasing) {
      outputLine(between, outside);
      outside += 1;
      between -= 1;
    } else {
      outputLine(between, outside);
      outside -= 1;
      between += 1;
    }
  }
}

star(7);
// logs
/*

*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

*/
console.log('break');

star(9);
// logs
/*

*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

*/