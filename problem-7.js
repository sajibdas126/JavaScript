let number = parseInt(prompt("Enter a number:"));

if (number % 5 === 0 && number % 11 === 0) {
  console.log("Divisible by both 5 and 11");
} else {
  console.log("Not Divisible by both 5 and 11");
}
