/*

Input: Number
-represents the switches (total)
-each switch connects to one light
-lights all initially OFF

Output: Array
-contains the lights that are ON at the end of passes
-order should be from lowest to highest

Examples/Test Cases:
-during a pass, you hit various switches
-switches hit - depending on the pass number
-input -> could be 0 -> empty array returned
-switch being divisible by the pass number -> hit, switched

lightsOn(0); // []
lightsOn(6); // [1, 4]

[] OFF
1: OFF -> ON
2: OFF -> ON -> OFF
3: OFF -> ON -> OFF
4: OFF -> ON -> OFF -> ON
5: OFF -> ON -> OFF
6: OFF -> ON -> OFF -> ON -> OFF
[1 4]

Data Structure:
-{1 OFF 2 OFF 3 ON}

Algorithm:
-guard clause -> return empty array if input is 0
-Create the object that has all the keys for each light/switch
  with a value of OFF
-Iterate from 1 to n (number of switches) PASS NUMBER
  -Collect the lights (NUMBER data type) that are divisible by PASS NUMBER
  [3 6]
  -Toggle the status of those collected lights
-Collect all the lights with a status of ON
  -Iterate through our objects, keep the light numbers that are ON

*/

function createLightsObj(number) {
  let lights = {};
  for (let lightNumber = 1; lightNumber <= number; lightNumber++) {
    lights[lightNumber] = 'OFF';
  }
  return lights;
}

function lightsOn(switches) {
  if (switches === 0) {
    return [];
  }

  let lights = createLightsObj(switches);
  
  for (let passNumber = 1; passNumber <= switches; passNumber++) {
    let lightsToToggle = [];

    Object.keys(lights).forEach(function(light) {
      if (Number(light) % passNumber === 0) {
        lightsToToggle.push(light);
      }
    });

    lightsToToggle.forEach(function(light) {
      if (lights[light] === 'OFF') {
        lights[light] = 'ON';
      } else if (lights[light] === 'ON') {
        lights[light] = 'OFF';
      }
    });
  }

  let lightsOn = [];
  for (let light in lights) {
    if (lights[light] === 'ON') {
      lightsOn.push(Number(light));
    }
  }
  return lightsOn;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(0)); // []
console.log(lightsOn(6)); // [1, 4]