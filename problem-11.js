// Problem 11: Check Multiple of 3 or 7 (use ternary operator)

let num =6;

let result = (num % 3 === 0 && num % 7 === 0)

? "Multiple of both 3 and 7"
:(num % 3 === 0)
? "Multiple of 3"
:(num % 7 === 0)
? "Multiple of 7"
:"Not a multiple of 3 or 7";

console.log(result);