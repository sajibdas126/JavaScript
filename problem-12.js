// Problem 12: Simple Calculator (+, -, *, /)

// Problem 12: Simple Calculator (+, -, *, /)

let num1 = 10;
let num2 = 5;
let operator = '+'; 

let result;

if (operator === '+') {
  result = num1 + num2;
} else if (operator === '-') {
  result = num1 - num2;
} else if (operator === '*') {
  result = num1 * num2;
} else if (operator === '/') {
  result = num1 / num2;
} else {
  result = "Invalid operator";
}

console.log(result);
