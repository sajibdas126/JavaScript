// Problem 4: Find Maximum of Three Numbers

let num1 = 5;
let num2 = 2;
let num3 = 8;

let max;

if(num1 > num2 && num1 > num3){
    max = num1;
}else if (num2 > num1 && num2 > num3) {
    max = num2;
}else{
    max = num3;
}

console.log("Largest number is:" +max);
    