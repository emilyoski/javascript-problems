/*

Input: string argument, number
-string can include lowercase, uppercase letters
-string can include spaces or punct.
-number can be 0 or greater; represents the key

Output: string
-encrypted value via the key
-only letters are encrypted, everything else is the same
-substituted letters are the same as original letter
-substituted letters are dependent on the key
  -key determines the shift, positions away in the alphabet
  (number to the right)
  -if key is longer than alphabet, wraps around from the beginning

Examples/Test Cases:
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
0 1 2 3 4 5..
'A' -> (3) index 0 (+ 3) -> index 3 which is D
'y' (5) -> index 24 (+5) = 29 (26 length) = index 3 which is d
'a' (47) -> index 0 (+ 47) = 47 (-26 length) index 21 which is v

Data Structure:
-Array for the alphabet
-Regex for matching lowercase and uppercase
-String input and output

Algorithm:
-Initialize a new string
-Iterate through the input string
  -if its a lowercase letter, pass the uppercase letter to shift
    -add the lowercase version of the letter to new string
  -if its a uppercase letter, pass the letter to shift
    -add the return to new string
  -otherwise, add it to the new string
-return the string

-shift method for uppercase letters
  -find the index of the letter
  -add the shift/key to the index
  -until the index is less than 26, subtract 26
  -retrieve the letter at that index and return it

*/

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
  'X', 'Y', 'Z'];

const ALPHABET_LENGTH = 26;

function shiftLetter(letter, shift) {
  let index = ALPHABET.indexOf(letter);
  index += shift;

  while (index >= ALPHABET_LENGTH) {
    index -= ALPHABET_LENGTH;
  }

  return ALPHABET[index];
}

function caesarEncrypt(plaintext, key) {
  let encryptText = '';
  let letter;

  for (let index = 0; index < plaintext.length; index++) {
    if (/[a-z]/.test(plaintext[index])) {
      letter = shiftLetter(plaintext[index].toUpperCase(), key);
      encryptText += letter.toLowerCase();
    } else if (/[A-Z]/.test(plaintext[index])) {
      letter = shiftLetter(plaintext[index], key);
      encryptText += letter;
    } else {
      encryptText += plaintext[index];
    }
  }

  return encryptText;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"