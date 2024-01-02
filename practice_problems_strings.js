let firstName = 'Emily';
let lastName = 'Olszewski';

let fullName = firstName + ' ' + lastName;

// console.log(fullName.split(' '));

let language = 'JavaScript';
let idx = language.indexOf('S');

// console.log(idx);

let charCode = language.charCodeAt(idx);
// console.log(String.fromCharCode(charCode));

let last_idx = language.lastIndexOf('a');
// console.log(last_idx);

let a = 'a';
let b = 'b';

// console.log(a > b);

b = 'B';

// console.log(a > b);

// console.log(language.substring(1, -1));
// console.log(language.substring(2, -1));

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);
// console.log(compoundSentence);
// console.log(fact1[0]);
// console.log(fact2[0]);

let pi = 22 / 7;
let index = pi.toString().lastIndexOf('14');
console.log(index);

let boxNumber = (356).toString();
boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);

boxNumber = String(boxNumber);
console.log(typeof boxNumber);

let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');

if (name.endsWith('!')) {
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}