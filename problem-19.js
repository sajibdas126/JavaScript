// Problem 19: Check Armstrong Number (3-digit)

let num = 153; 
let originalNum = num;

let digit1 = Math.floor(num / 100);      
let digit2 = Math.floor((num % 100) / 10); 
let digit3 = num % 10;                   

let sumOfCubes = (digit1 ** 3) + (digit2 ** 3) + (digit3 ** 3);

if (sumOfCubes === originalNum) {
  console.log("Armstrong");
} else {
  console.log("Not Armstrong");
}
