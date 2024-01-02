function validTriangle(triangle) {
  let sumAngles = triangle.reduce((sum, num) => sum + num);
  return (sumAngles === 180) && (Math.min(...triangle) > 0);
}

function rightTriangle(triangle) {
  return triangle.includes(90);
}

function acuteTriangle(triangle) {
  return triangle.filter(angle => angle < 90).length === 3;
}

function triangle(...angles) {
  if (validTriangle(angles)) {
    if (rightTriangle(angles)) {
      return 'right';
    } else if (acuteTriangle(angles)) {
      return 'acute';
    } else {
      return 'obtuse';
    }
  }

  return 'invalid';
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"