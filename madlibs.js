/*

-Iterate through the keys of the madlibs
  -Find all the regex matches to that and
    replace with a random selection from the value array

*/

let madlibWords = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
};

function randomMadLibWord(type) {
  let index = Math.floor(Math.random() * (madlibWords[type].length));
  return madlibWords[type][index];
}

function madlibs(template) {
  Object.keys(madlibWords).forEach(function(wordType) {
    let regex = new RegExp ('\\b' + wordType + '\\b', 'ig');
    let matches = template.match(regex) || [];

    for (let count = 0; count <= matches.length; count++) {
      let regex = new RegExp ('\\b' + wordType + '\\b', 'i');
      template = template.replace(regex, randomMadLibWord(wordType));
    }
  });
  return template;
}

// function madlibs(template) {
//   let array = template.split(' ');
//   let types = ['noun', 'adverb', 'adjective', 'verb'];

//   let madlibsArray = array.map(function(word) {
//     if (types.includes(word.toLowerCase())) {
//       return randomMadLibWord(word.toLowerCase());
//     } else {
//       return word;
//     }
//   });

//   return madlibsArray.join(' ');
// }

// These examples use the following list of replacement texts:
// adjective: quick lazy sleepy noisy hungry
// noun: fox dog head leg tail cat
// verb: jumps lifts bites licks pats
// adverb: easily lazily noisily excitedly

let template1 = "The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around.";
let template2 = "The noun verb the noun's noun.";

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily" "licks" the "sleepy" yellow "dog",
// who "lazily" "licks" his "tail" and looks around.
// input - the brown the yellow , who his and looks around.
// output - the (adjective) brown (noun) (adverb) (verb) the (adjective)
// yellow (noun), who (adverb) (verb) his (noun) and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily" "licks" the "noisy" yellow "dog",
// who "lazily" "licks" his "leg" and looks around.
// input - the brown the yellow, who his and looks around.
// output - the (adjective) brown (noun) (adverb) (verb) the (adjective)
// yellow (noun), who (adverb) (verb) his (noun) and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".
// input - the the 's
// output - the (noun) (verb) the (noun)'s (noun)

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
// input - the the 's
// output - the (noun) (verb) the (noun)'s (noun)