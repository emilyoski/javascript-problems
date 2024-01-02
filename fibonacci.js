function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

// function fibonacci(number) {
//   if (number === 1 || number === 2) {
//     return 1;
//   } else {
//     return fibonacci(number - 2) + fibonacci(number - 1);
//   }
// }

function fibonacci(number) {
  let sum = 1;

  if (number <= 2) {
    return sum;
  } else {
    return sum + fibonacci(number - 1);
  }
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765