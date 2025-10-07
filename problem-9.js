// Problem 9: Check Uppercase or Lowercase (use ternary operator)
// Write a program to check whether a character is uppercase or lowercase.
// Hint: Use character ranges 'A'–'Z' and 'a'–'z'.
// Sample Input/Output:

// Input: A → Output: Uppercase
// Input: g → Output: Lowercase

let ch = 'angladesh'; 
let result = (ch >= 'A' && ch <= 'Z') 
  ? "Uppercase" 
  : (ch >= 'a' && ch <= 'z') 
  ? "Lowercase" 
  : "Not a letter";

console.log(result);