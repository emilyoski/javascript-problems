/*

Implement encoding function

Input: String message, number of rails
-assume all letters with spaces and valid input
-represents how many rails in the rows
Output: Rail Fence cipher
-single string from the message laid out along the cipher,
  read across from left to right, top to bottom, ignoring the periods

Rail fence cipher
  -each a different "line" consisting of the messages
  -letters from the message
  -periods for "fillers"
  -each line depends on the number of rails

? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
. ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
. . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Examples:
WE ARE DISCOVERED FLEE AT ONCE -> WEAREDISCOVEREDFLEEATONCE, 3 "rails"

X . . . X . . . X . . . X . . . X . . . X . . . X
. X . X . X . X . X . X . X . X . X . X . X . X .
. . X . . . X . . . X . . . X . . . X . . . X . .

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

W E C R L T E
E R D S O E E F E A O C
A I V D E N

WECRLTE ERDSOEEFEAOC AIVDEN -> WECRLTEERDSOEEFEAOCAIVDEN

RAILS CIPHER IS HARD TO ENCRYPT -> RAILSCIPHERISHARDTOENCRYPT, 4 "rails"
26 total characters (4 lines) -> 26 - 4 (first line) = 22
22 left (each line after is 3) -> need 8 more "diagonals"

X . . . . . X . . . . . X . . . . . X . . . . . X .
. X . . . X . X . . . X . X . . . X . X . . . X . X
. . X . X . . . X . X . . . X . X . . . X . X . . .
. . . X . . . . . X . . . . . X . . . . . X . . . .

R . . . . . I . . . . . S . . . . . O . . . . . P .
. A . . . C . P . . . I . H . . . T . E . . . Y . T
. . I . S . . . H . R . . . A . D . . . N . R . . .
. . . L . . . . . E . . . . . R . . . . . C . . . .

RAILS CIPHER -> RAILSCIPHER, 11 characters, 4 "rails"
X . . . . . X . . .
. X . . . X . X . .
. . X . X . . . X .
. . . X . . . . . X

R . . . . . I . . . . ()
. A . . . C . P . . .
. . I . S . . . H . R
. . . L . . . . . E .

DATA STRUCTURE:
-Object to contain the lines/rails ->
  storing an array containing the appropriate letters

Algorithm:
-Clean up the input (no spaces, all characters)
-Initialize an object with a number for each line (up to the number of lines)
  with an empty array as the value
-Set increasing to true (represents the line number)
-set the line number to 1

-Loop from 0 up to the input string length (index)
-if increasing (line number should be increasing)
  -add to line number's array -> that input string's character at the index
  -increment the line number up 1
-else (line number should not increasing)
  -add to the line number's array -> input string index character
  -decrement the line number down 1

-if line number is 4,
  set increasing to false
-else if line number is 1
  set increasing to true

-Collect all the values which will be an array of nested arrays
-Transform the nested arrays into one string with join
-Join all the elements of the outer array with join

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

function createLinesObj(lineNumber) {
  let obj = {};

  for (let line = 1; line <= lineNumber; line += 1 ) {
    obj[line] = [];
  }

  return obj;
}

function writeLettersOnRails(cleanMessage, railNumber) {
  let lines = createLinesObj(railNumber);
  let [ increasing, lineNumber ] = [ true, 1 ];

  for (let index = 0; index < cleanMessage.length; index += 1) {
    if (increasing) {
      lines[lineNumber].push(cleanMessage[index]);
      lineNumber += 1;
    } else {
      lines[lineNumber].push(cleanMessage[index]);
      lineNumber -= 1;
    }

    if (lineNumber === railNumber || lineNumber === 1) {
      increasing = !increasing;
    }
  }

  return lines;
}

function replaceMarkerWithLetter(letters, markerObj) {
  let startIndex = 0;
  let endIndex = 0;

  for (let line = 1; line <= Object.keys(markerObj).length; line += 1) {
    let lineLength = markerObj[line].length;
    endIndex = lineLength + startIndex;
    let letterArray = letters.slice(startIndex, endIndex).split('').reverse();
    markerObj[line] = letterArray;
    startIndex = endIndex;
  }

  return markerObj;
}

function extractLetters(letterObj, railsNumber, messageLength) {
  let originalMessage = '';
  let [ increasing, lineNumber ] = [ true, 1 ];

  for (let counter = 0; counter < messageLength; counter += 1) {
    if (increasing) {
      originalMessage += (letterObj[lineNumber].pop());
      lineNumber += 1;
    } else {
      originalMessage += (letterObj[lineNumber].pop());
      lineNumber -= 1;
    }

    if (lineNumber === railsNumber || lineNumber === 1) {
      increasing = !increasing;
    }
  }

  return originalMessage;
}

function railsEncode(message, rails) {
  let cipherString = message.replace(/\s/g, '').toUpperCase();
  let lines = writeLettersOnRails(cipherString, rails);
  return Object.values(lines).map(line => line.join('')).join('');
}

function railsDecode(message, rails) {
  let lines = writeLettersOnRails('X'.repeat(message.length), rails);
  let letters = replaceMarkerWithLetter(message, lines);
  return extractLetters(letters, rails, message.length);
}

console.log(railsEncode('WE ARE DISCOVERED FLEE AT ONCE', 3));
// WECRLTEERDSOEEFEAOCAIVDEN

console.log(railsEncode('RAILS CIPHER', 4));
// RIACPISHRLE

console.log(railsEncode('EXERCISES', 4));
// ESXIEECSR

console.log(railsDecode('XXXXXXXXXOOOOOOOOO', 2));
// XOXOXOXOXOXOXOXOXO

console.log(railsDecode('TEITELHDVLSNHDTISEIIEA', 3));
// THEDEVILISINTHEDETAILS

console.log(railsDecode('RIACPISHRLE' , 4));
// RAILSCIPHER