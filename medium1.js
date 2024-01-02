/*

*/

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return array;
  }

  return array.slice(1).concat([array[0]]);
}

function rotateRightmostDigits(number, rotateDigits) {
  let numArray = String(number).split('');
  let index = numArray.length - rotateDigits;

  let rotateArr = numArray.slice(0, index).concat(rotateArray(numArray.slice(index)));
  return Number(rotateArr.join(''));
}

function maxRotation(number) {
  let stringNumber = String(number);
  
  for (let index = stringNumber.length; index > 0; index --) {
    stringNumber = rotateRightmostDigits(stringNumber, index);
  }

  return Number(stringNumber);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845