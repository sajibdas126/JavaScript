

// let marks =92;

// let performance = (marks >=90)? "Excellent" 
//                 : (marks >=75)? "Very Good"
//                 : (marks >= 50)? "Average"
//                 : "Needs Improvement";


//                 console.log(performance)

// Problem 20: Student Performance Category

let marks = 92; 
let performance;

if (marks >= 90) {
  performance = "Excellent";
} else if (marks >= 75) {
  performance = "Very Good";
} else if (marks >= 50) {
  performance = "Average";
} else {
  performance = "Needs Improvement";
}

console.log(performance);
