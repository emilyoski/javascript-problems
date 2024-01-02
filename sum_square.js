function determineRange(num) {
  let arr = [];

  for (let count = 1; count <= num; count++) {
    arr.push(count);
  }

  return arr;
}

function sumSquareDifference(number) {
  let range = determineRange(number);
  let sum = Math.pow((range.reduce((sum, num) => sum + num)), 2);

  let squareSum = range.map(num => Math.pow(num, 2))
                       .reduce((sum, num) => sum + num);
  return sum - squareSum;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150