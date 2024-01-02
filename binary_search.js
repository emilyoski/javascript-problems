/*

Input: array, string
-array containing various elements, assuming all the same data type
-array will always be sorted
-string is the search term that we are looking for
-assuming case sensitive

Output: number
-represents the index of the search term
-or will return -1 if not found

Examples/Test Cases:
['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us',
  'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper']
(10 items) / 2 -> 5
index 5 -> Good Food (apple store < good food)
keep 0 to 4 (one less than the index)
['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot']
5 / 2 -> (round down) 2 -> Bike Store (apple store < bike store)
keep 0 to 1
['Apple Store', 'Bags Galore']
2 / 2 -> (round down) 1 -> Bags Galore (apple store < bags galore)
keep 0 to 0
['Apple Store'] -> hit! (if not, return -1)

Data Structure:
-Arrays for the search, arrays for the sliced part

Algorithm:
-while the length of the array is greater than 1
  -find the half way point (length / 2 - rounded down)
  -compare the search term to that halfway point item
  -return the search term if it's equal
  -if it's less than the index,
    -make the array now a slice of 0 to the halfway point - 1
  -if its more than,
    -make the array now a slice of halfway point + 1 to rest of array


*/

function binarySearch(array, searchTerm) {
  let search = true;
  let index;
  let missingIndex = 0;

  while (search) {
    index = Math.ceil(array.length / 2) - 1;

    if (array[index] === searchTerm) {
      return missingIndex + index;
    } else if (array[index] > searchTerm) {
      array = array.slice(0, index);
    } else {
      array = array.slice((index + 1));
      missingIndex += (index + 1);
    }

    if (array.length === 0) {
      search = false;
    }
  }

  return -1;
}


const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us',
  'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6