// Problem 3: Find Maximum of Two Numbers 
// (use ternary operator)


let num1 = parseFloat(prompt ("Enter your first number"));
let num2 = parseFloat(prompt("Enter your secend number"))

let max = (num1 > num2)? num1:num2;

console.log("Maximum number is :" +max);