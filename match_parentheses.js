function isBalanced(string) {
  let regex = /[^\(\)]/g;
  let testString = string.replace(regex, '');
  let tally = 0;

  for (let index = 0; index < testString.length; index += 1) {
    if (testString[index] === '(') {
      tally += 1;
    } else if (testString[index] === ')') {
      tally -= 1;
    }

    if (tally < 0) {
      console.log(false);
      return false;
    }
  }
  console.log(tally === 0);
  return tally === 0;
}


isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false