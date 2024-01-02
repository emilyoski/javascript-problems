/*

Input: text
-includes multiple sentences with multiple words
-sentences end with period, exclamation point, question marks
-sentences always begin with a word character
-word is:
  -any sequence of characters that are not spaces or sentence-ending characters
Output: number and sentence
-number representing the word count of the longest sentence
-sentence is the longest sentence

Examples:
-30 count is every word; counted as expected
-need to include the -- in the word count as well (any sequence)

Data Structure:
[sentence1 sentence2...] and so on
[words] [words] -> only need the count

[sentence1 sentence2 sentence3 sentence4] ->
  [wordCountSentence1 etc] [50 20 65 15] (take the max word count and the index)
index of largest word count -> longest sentence
{wordCount => sentence; wordCount => }
(look at the keys for maximum, return the sentence associated with the key)

Algorithm:
-Split the long text into sentences (break up at period, exclamation, question)
-initialize an object
-Iterate through the sentences:
  -word count
    -comes from split at word boundarys
    -array of all matches
    -return the length
  -add the word count as key, sentence as the value
-Determine the maximum key
  -iterate through the list
  -if the current number is greater than the maximum, set that as max
  -else keep the max
  -return the max
-Output the sentence associated with that max word count & output the word count

*/


let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

let longTextTwo = 'Four score and seven years ago our fathers brought forth' +
' on this continent a new nation, conceived in liberty, and' +
' dedicated to the proposition that all men are created' +
' equal!' +
' Now we are engaged in a great civil war, testing whether' +
' that nation, or any nation so conceived and so dedicated,' +
' can long endure. We are met on a great battlefield of that' +
' war. We have come to dedicate a portion of that field, as' +
' a final resting place for those who here gave their lives' +
' that that nation might live. It is altogether fitting and' +
' proper that we should do this.' +
' But, in a larger sense, we can not dedicate, we can not' +
' consecrate, we can not hallow this ground. The brave' +
' men, living and dead, who struggled here, have' +
' consecrated it, far above our poor power to add or' +
' detract. The world will little note, nor long remember' +
' what we say here, but it can never forget what they' +
' did here. It is for us the living, rather, to be dedicated' +
' here to the unfinished work which they who fought' +
' here have thus far so nobly advanced.';

function filterEmptyStrings(array) {
  return array.filter(element => element !== '');
}

function findWordCount(text) {
  let words = filterEmptyStrings(text.split(/\s/g));
  return words.length;
}

function findMaximumKey(object) {
  let numberKeys = Object.keys(object).map(str => parseInt(str, 10));

  return numberKeys.reduce((maxNumber, currentNumber) => {
    if (currentNumber > maxNumber) {
      return currentNumber;
    } else {
      return maxNumber;
    }
  });
}

// retrieve appropriate punctation at end of sentence
function insertSentenceEnding(text, sentence) {
  return text.split(sentence)[1][0];
}

function formatSentence(text, sentence) {
  return sentence.trim() + insertSentenceEnding(text, sentence);
}

function generateSentenceSummary(text, max, sentences) {
  return formatSentence(text, sentences[max]) + '\n\n' +
    'The longest sentence has ' + String(max) + ' words.';
}

function longestSentence(text) {
  let sentences = filterEmptyStrings(text.split(/[.!?]/g));
  let sentenceWordCount = {};

  sentences.forEach(function(sentence) {
    let wordCount = findWordCount(sentence);
    sentenceWordCount[wordCount] = sentence;
  });

  let maxCount = findMaximumKey(sentenceWordCount);
  let result = generateSentenceSummary(text, maxCount, sentenceWordCount);

  console.log(result);
}

longestSentence(longText);
longestSentence(longTextTwo);
longestSentence("Hello there! Why  not? Goodbye.");
longestSentence("    I yam what I yam!");


// console output
// It is rather for us to be here dedicated to the great task remaining
// before us -- that from these honored dead we take increased devotion
// to that cause for which they gave the last full measure of devotion --
// that we here highly resolve that these dead shall not have died in vain
// -- that this nation, under God, shall have a new birth of freedom --
// and that government of the people, by the people, for the people, shall
// not perish from the earth.

// The longest sentence has 86 words.

// Assuming the last sentence is removed:

// longestSentence(longText);

// console output
// Four score and seven years ago our fathers brought forth on this
// continent a new nation, conceived in liberty, and dedicated to the
// proposition that all men are created equal.

// The longest sentence has 30 words.