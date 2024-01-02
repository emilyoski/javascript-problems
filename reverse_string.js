function reverse(string) {
  let reverseString = '';

  for (let index = string.length - 1; index >= 0; index -= 1 ) {
    reverseString += string[index];
  }

  console.log(reverseString);
}

reverse('hello');                  // returns "olleh"
reverse('The quick brown fox');    // returns "xof nworb kciuq ehT"