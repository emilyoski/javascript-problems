/*

Input: string
-consists of variety of words, including "number words"
-number word is zero, one, two etc

Output: string
-consists of same words, except the words converted to digits

Examples/Test Cases:
-consider there may be punct. at the end of our number word

wordToDigit('one. two three') '1. 2 3'
wordToDigit('does this work') 'does this work'
wordToDigit('onetwothree') '123'

'Please call me at five five five one two three four. Thanks.'
[zero one two three four five six seven eight nine]
five five five one two three four.
index of -> five -> 5 -> use that instead

Data Structure:
-Array of all the number word matches
-Array of number words

Algorithm:
-Find all the matches of the number words in the string
-No matches (null) -> return sentence
-Iterate through our number word matches,
  -Determine the appropriate replacement digit from
    array of number words
  -Replace the matched number word with the replacement digit

-initialize an empty string
-Split the sentence into an array and iterate through
  -if its a match for the number words
    -replace the number word with the digit
  -otherwise
    -add the word to the new string

*/

const DIGITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                'seven', 'eight', 'nine'];
let regex = /(one|two|three|four|five|six|seven|eight|nine)/ig;

function wordToDigit(sentence) {
  return sentence.split(' ').map(function(word) {
    if (regex.test(word)) {
      let numberWord = word.match(regex)[0];
      let digit = DIGITS.indexOf(numberWord);
      return word.replace(regex, digit);
    } else {
      return word;
    }
  }).join(' ');
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('one. two three'));
// 1. 2 3

console.log(wordToDigit('does this work'));
// does this work
