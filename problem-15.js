// Problem 15: Check Profit or Loss

let costPrice = 100;  // CP
let sellingPrice = 150; // SP

if (sellingPrice > costPrice) {
  console.log("Profit");
} else if (sellingPrice < costPrice) {
  console.log("Loss");
} else {
  console.log("No Profit, No Loss");
}


// (Ternary Operator Version): 

// let costPrice = 100;
// let sellingPrice = 150;

// let result = (sellingPrice > costPrice) 
//   ? "Profit" 
//   : (sellingPrice < costPrice) 
//     ? "Loss" 
//     : "No Profit, No Loss";

// console.log(result);
