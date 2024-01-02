/*

Input: Odd integer
-assuming always an odd integer
? confirm arguments
? confirm data type
? discuss boundary conditions of that data type
? discuss "empty"

Output: Diamond
-consists of multiple lines
-line consists of spaces and *
-Four pointed diamond, N x N grid (N is argument)
? always *'s? four points always center top, center bottom, etc

Examples/Test Cases:
-N will be the number of rows
-star will be centered in the beginning
-will add two stars on either side and subtract two spaces

diamond(1);
*

diamond(3);
 *    ['' * ''] 2 spaces (1 on each side) with star in the middle
***   [*  *  *] 0 spaces with 3 stars in the middle
 *    ['' * ''] 2 spaces with 1 star in the middle

diamond(5);
  *   4 spaces (2 on each side) with 1 star in the middle
 ***  2 spaces (1 on each side) with 3 stars middle
***** 0 spaces (0 on each side) with 5 stars middle (3rd row middle)
 ***  2 spaces (1 on each side) with 3 stars middle
  *   4 spaces (2 on each side) with 1 stars in the middle

spaces -> starting on each side (N - 1 / 2) initial each side (change by 1)
stars -> 1 (change by 2)
increasingStars (true) -> lower the spaces, increase the stars
                (false) -> increase the spaces, decrease the stars
(flipped at halfway)

Data Structure:
-Strings output (concate different sections of the line)

Algorithm:
-Initialize the initial spaces (N - 1 / 2)
-Initialize the initial stars (1)
-Iterate from 1 to the N (rows input) (REPRESENTS ROW)
  -output the line
(spaces repeated by Space Number) + (stars repeated) + (spaces repeated)
  -change increasingStars to false WHEN row equals (N / 2 (rounded up))
  -if increasingStars,
    decrease spaces by 1, increase the stars by 2
  -otherwise,
    increase spaces by 1, decrease the stars by 2


*/

function diamond(rows) {
  let spaces = ((rows - 1) / 2);
  let stars = 1;
  let increasingStars = true;

  for (let row = 1; row <= rows; row++) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
    if (row === (Math.ceil(rows / 2))) {
      increasingStars = false;
    }

    if (increasingStars) {
      spaces -= 1;
      stars += 2;
    } else {
      spaces += 1;
      stars -= 2;
    }
  }
}


diamond(1);
// logs
// *

console.log('break');

diamond(3);
// logs
/*

 *
***
 *

*/

console.log('break');

diamond(9);
// logs
/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/