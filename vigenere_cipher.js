/*

Input: string (plaintext), key (shift)
-may contain letters (both upper case and lower case)
-may contain punct, (maybe digits)

Output: string
-letters are encrypted via vigenere cipher

Examples/Test Cases:
-encryption is only for alphabetic characters
-keep the non alpha characters (not encrypted)
-encryption based on letters of a keyword
-each letter of the keyword is a shift value (index in alpha)
  -'b' -> shift 1
  -'d' -> shift 3
  -case insensitive -> case does not matter for keyword
-character by character (applicable characters), apply shift
-right shift, may go past the length of the alphabet

[A B C D E F G H I J K L M N O P Q R S T U V W X Y Z]
MEAT (12 4 0 19)
P (shift 12) -> B
i (shift 4) -> m
n (shift 0) -> n
e (shift 19) -> x
a (shift 12) -> a (index 0 + 12) index 12 -> m

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

plaintext: i love PIZZA!
keyword:   l ollo lloll
shift:     (l -> 11, 14)
result:    t

Data Structure:
-string for the encrypted text
-Array for the alphabet
-Array for the keyword (possible transform into shifts)

Algorithm:
-Create an array of lowercase letters (alphabet)
-Keyword -> shifts
  -lowercase letters and split into an array
  -transform into shifts by finding the index of each letter
-Initialize an encrypted string
-Iterate through the characters of the plaintext
  -Keep track of which shift we are using
  -increment to the next shift when used
  -reset to 0 (beginning of shifts when we hit the last one)
  -if lowercase character,
    -retrieve the shifted letter
    -add shifted letter to the encrypted string
    -increment our shift by one
    -if the current shift index > length of the keyword, reset
  -if uppercase character,
    -retrieve the shifted letter(pass lowercase version)
    -add uppercase version to encrypted string
    -increment our shift by one
    -if current shift index > length of keyword, reset to 0
  -otherwise,
    -add the character to the encrypted string

-shifting letter
  -retrieve the index of the letter from the alphabet
  -add the shift to the index
  -if the shift is 26 or greater, subtract 26
  -retrieve the letter at that index

*/

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
  'x', 'y', 'z'];

const INCREMENT = 1;
const ZERO_INDEX = 0;

function transformKeyToShifts(key) {
  return key.toLowerCase().split('').map(char => ALPHABET.indexOf(char));
}

function shiftLetter(letter, shift) {
  let index = ALPHABET.indexOf(letter.toLowerCase());
  index += shift;

  while (index > 25) {
    index -= 26;
  }

  let shiftedLetter = ALPHABET[index];

  if (/[A-Z]/.test(letter)) {
    shiftedLetter = shiftedLetter.toUpperCase();
  }

  return shiftedLetter;
}

function vigenereCipher(plaintext, key) {
  let shifts = transformKeyToShifts(key);
  let encrypted = '';
  let shiftIndex = ZERO_INDEX;

  for (let textIndex = 0; textIndex < plaintext.length; textIndex++) {
    let char = plaintext[textIndex];

    if (/[a-z]/i.test(plaintext[textIndex])) {
      encrypted += shiftLetter(char, shifts[shiftIndex]);
      shiftIndex += INCREMENT;
    } else {
      encrypted += char;
    }

    if (shiftIndex >= shifts.length) {
      shiftIndex = ZERO_INDEX;
    }
  }

  return encrypted;
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'MEAT'));
// Bmnxmtpeqw dhz'x gh ar pbldal!

console.log(vigenereCipher('hello', 'a'));
// 'hello'

console.log(vigenereCipher('HELLO!', 'A'));
// 'HELLO!'

console.log(vigenereCipher('i love PIZZA!', 'lol'));
// 't zzgs ATNKL!'