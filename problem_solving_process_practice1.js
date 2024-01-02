/*

Input: Array, number
-array consists of strings
-number is integer; represents the Xth distinct string
? always receive two arguments
? arguments always in right order?
? array only consisting of strings
? array ever empty -> what should be returned for empty or invalid inputs
? strings -> case sensitive?
? clarify that earliest means left to right, identifying the distinct strings

Output: distinct string
-fewer than X distinct strings, return empty string
-result string is one encountered earliest in array


Examples/Test Cases:
-distinct string - string present only once in array

distinctString(['abc', 'def', 'abc'], 1) -> 'def'
distinctString(['abc', 'def', 'abc'], 3) -> ''
distinctString([], 3) -> ''
distinctString() -> ''
distinctString(1, ['abc', 'def', 'abc']) -> 'def'
distinctString(['ABC', 'def', 'abc'], 1) -> 'ABC' (case sensitive)
distinctString(['ABC', 'def', 'abc'], 1) -> 'def' (case insensitive)



*/

distinctString(["d","b","c","b","c","a"], 2); // "a"