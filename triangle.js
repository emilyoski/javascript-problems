/*



*/

function validTriangle(triangle) {
  triangle.sort((a, b) => a - b);
  return (triangle[0] + triangle[1]) > triangle[2];
}

function equilateral(triangle) {
  return triangle[0] === triangle[1] &&
    triangle[1] === triangle[2];
}

function isosceles(triangle) {
  triangle.sort((a, b) => a - b);
  return triangle[1] === triangle[2];
}

function triangle(...sides) {
  if (validTriangle(sides)) {
    if (equilateral(sides)) {
      return 'equilateral';
    } else if (isosceles(sides)) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }

  return 'invalid';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"