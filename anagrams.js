/*

Input: word and array
-word is anagram "standard"
-array is the list that we are checking against
Output: array
-includes all the anagrams of the input word
-anagrams are case sensitive
-need to be same length/letters

Examples:
-nothing additional

Data Structure:
listen -> [e i l n s t] -> eilnst (and compare to the other)

[enlists google inlets banana]

Algorithm:
-function for anagram:
  -takes two words
  -breaks them into characters, sorts, joins
  -compares both words like that ^

-filter the array, keeping the word if it's an anagram

*/

function isAnagram(word1, word2) {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

function anagram(word, list) {
  return list.filter(compareWord => isAnagram(word, compareWord));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]