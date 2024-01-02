/*

Implement decoding function

Input: String message, number of rails
-taken from the left-right, top-bottom letters from the rails
-no spaces, assuming valid input

Output: String message
-decoded message using the rail fence cipher
-no spaces required, don't need to break up the words
  -just need to be in the right order

Rails cipher:
-need to create the structure of the zig zags
-fill in the letters from left-right (in the allocated spaces)
  then top down
-then read the message from the zig zag lines (top-down-top)

Examples:

'1' => [X X]
'2' => [X X X]
'3' => [X X X]
'4' => [X X X]

'1' => [R I]
'2' => [A C P]
'3' => [I S H R]
'4' => [L E]

R A I L S C I P H E R
From line 1 to line 4 to line 1, remove the first element
  from the array from that line

Algorithm:
-Create an object for the lines with the line being the key
  and the placeholder X's used for the number of elements
  (results in the '1' => [X X] etc)

-Replace the X's of the values with the appropriate characters
  from the input string
  -Initialize the "start_index" to 0
  -Iterate through the lines
  -Replace the value with the correct array of characters
  -Pull out the input string section that is from the start_index
    (for that length of characters)
  -Increment the start_index up (up the length of characters)

-From line 1 to line 4 to line 1,
  -Remove the first element of the value array and
  add it to our output string
  -Repeat this until we hit the length of characters

*/