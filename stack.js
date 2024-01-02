/*

Input: string
-correlates to a set of commands and numbers

Output: dependent on commands
-print command -> logs the register value

Examples/Test Cases:
-initialize the stack to [] and register to 0

5 PUSH 3 MULT PRINT
stack []
register 0
5
stack []
register 5
PUSH
stack [5]
register 5
3
stack [5]
register 3
MULT
stack []
register 3 * 5 = 15
PRINT
stack []
register 15 -> logs 15

Data Structure:
Array of commands so we can iterate through them

Algorithm:
-Initialize a stack to []
-Initialize the register to 0
-Split the input command into an array and iterate through
  -case command
  -if it's a decimal -> set the register to that value
  -if PUSH -> push the register value to the stack
  -if ADD -> pop value from stack, add to register
  -if SUB -> pop value from stack, substract from register
  -if MULT -> pop value from stack, multiply it by register
  -if DIV -> pop value from stack, divide by register, INTEGER in register
  -if REMAINDER -> pop value from stack, INTEGER REMAINDER in register
  -if POP -> pop value from stack, make that the register
  -if PRINT -> log the register value

*/

function minilang(operations) {
  let stack = [];
  let register = 0;
  let commands = operations.split(' ');
  for (let index = 0; index < commands.length; index++) {
    if (commands[index] === 'PUSH') {
      stack.push(register);
    } else if (commands[index] === 'ADD') {
      register += stack.pop();
    } else if (commands[index] === 'SUB') {
      register -= stack.pop();
    } else if (commands[index] === 'MULT') {
      register *= stack.pop();
    } else if (commands[index] === 'DIV') {
      register = parseInt(register / stack.pop(), 10);
    } else if (commands[index] === 'REMAINDER') {
      register %= stack.pop();
    } else if (commands[index] === 'POP') {
      register = stack.pop();
    } else if (commands[index] === 'PRINT') {
      console.log(register);
    } else {
      register = Number(commands[index]); 
}}}

minilang('PRINT');
// 0
console.log(' ');

minilang('5 PUSH 3 MULT PRINT');
// 15
console.log(' ');

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

console.log(' ');
minilang('5 PUSH POP PRINT');
// 5

console.log(' ');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

console.log(' ');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

console.log(' ');
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

console.log(' ');
minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)