/*

Input: 2D array
? only one argument? more? less?
? always be an array? can be empty array -> what about sparse elements/gaps
? elements always be nested arrays?
? in the nested arrays -> what data types can they have?
? how should we compare arrays or objects? (to determine if they are duplicates)
? case sensitive for strings? 'A' and 'a' considered duplicates?

Output: array
-flat array
-duplicate elements removed
-numbers and number strings as duplicates (keep one that comes first in result)
? order of return array? elements from first nested array first then next?
? should it be a new array? 

Examples/Test Cases:

*/

flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']