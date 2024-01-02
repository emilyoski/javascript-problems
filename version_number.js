/*

Input:
-2 version numbers
-version number consists of:
  -decimals and digits
Output:
-number representing the comparison
-comparison
  -if version1 > version2, return 1
  -if version1 < version2, return -1
  -if version1 === version2, return 0

-if either version number contains characters
  other than digits and the . character -> return null

Examples:
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
-can compare different lengths; need to compare first number
  then the next number
-longer lengths don't necessarily mean greater number (1.18.2 < 13.37)
-can have zero - many digits after a period
-does not end in a period AND does not start in a period
-zeros following may end up being ignored (1.2 = 1.2.0.0)
-can start with zero
-need to be number comparison (not string)

Data Structure:
[0 1] compared [1]
[1 2] compared [1 2 0 0]
[1 2 0 0] compared to [1 18 2]
- input is strings so can split at the decimals
- need to be numbers for conparison

*/