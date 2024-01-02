/*

Input: string
-represents a word
-letters will be case insensitive
-assume that we will only get alpha characters
  -no input validation
  -no empty string

Output: boolean
-represents if we used only the block letters

Rules:
-block letters -> can only use one letter of the two letters in a block
-can only use each block once
-spelling blocks:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
-blocks/word are both case insensitive -> compare in the same case

Examples:
BATCH -> B (no O and no repeated B or O) A (no N or repeat A or N) T C H
BUTCH -> U (there is an H...which is why its false)
jest -> j e s t

Data Structures:
-structure for our spelling blocks; unordered, any specific structure
-two letters need to be paired together
-array of strings [BO XK DQ CP...]
-array of half the blocks, array of the other half [B G V...] [O T I]
  -index would give you the location of the block set
  -allows us to find the individual letter
-string input -> evaluating each character, no need to sanitize input so
  array of input characters -> all uppercased so case not a concern

Algorithm:
-Initialize a first-half spelling block [B G V X R L D F Z C J N H]
-Initialize a second-half spelling block [O T I K E Y Q S M P W A U]

-Take the input string, uppercase, iterate through the characters
  -From the current character, find the appropriate index
    -function (search both to see which is included, retrieve the letter index)
  -slice the string from the next character to the end
  -use the index to retrieve both letters from the spelling blocks
  -if that sliced string includes either character, return false

-return true

*/
const BLOCK_ONE = ['B', 'G', 'V', 'X', 'R', 'L', 'D', 'F', 'Z', 'C', 'J', 'N', 'H'];
const BLOCK_TWO = ['O', 'T', 'I', 'K', 'E', 'Y', 'Q', 'S', 'M', 'P', 'W', 'A', 'U'];

function findBlockIndex(char) {
  if (BLOCK_ONE.includes(char)) {
    return BLOCK_ONE.indexOf(char);
  } else {
    return BLOCK_TWO.indexOf(char);
  }
}

function strIncludeBlockOne(string, blockIndex) {
  return string.split('').includes(BLOCK_ONE[blockIndex]);
}

function strIncludeBlockTwo(string, blockIndex) {
  return string.split('').includes(BLOCK_TWO[blockIndex]);
}

function isBlockWord(inputWord) {
  let str = inputWord.toUpperCase();

  for (let strIdx = 0; strIdx < str.length; strIdx += 1) {
    let blockIdx = findBlockIndex(str[strIdx]);
    let remainingStr = str.slice(strIdx + 1);

    if (strIncludeBlockOne(remainingStr, blockIdx)) {
      return false;
    } else if (strIncludeBlockTwo(remainingStr, blockIdx)) {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('grFwH'));      // true
console.log(isBlockWord('V'));          // true
console.log(isBlockWord('Vi'));         // false