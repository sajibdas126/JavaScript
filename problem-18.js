// Problem 18: Check Odd and Positive

let num = 7; 

if (num % 2 !== 0 && num > 0) {
  console.log("Odd & Positive");
} else if (num % 2 !== 0 && num <= 0) {
  console.log("Odd but Not Positive");
} else if (num % 2 === 0 && num > 0) {
  console.log("Even & Positive");
} else {
  console.log("Even & Not Positive");
}
