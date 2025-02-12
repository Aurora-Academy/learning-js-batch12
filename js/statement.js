// Statement/ Conditional Operator

// ES5
// if-else
// switch-case

// ES6
// ternary operator

// const gender = prompt("Gender");

// // if else only target 2 conditions max
// // Syntax:
// // if(condition){
// }else{}

// if (gender === "m") {
//   console.log("Male");
// } else {
//   console.log("Female");
// }

// const day = +prompt("Enter Day from 1 to 7");

// switch (day) {
//   case 1:
//     alert("Sunday");
//     break;
//   case 2:
//     alert("Monday");
//     break;
//   default:
//     alert("invalid number");
// }

// Write a js program that handles the grading
// Logic
// 80% and above: distinction
// 70% - 79.99%: First division
// 60% - 69.99%: Second division
// below 60%: Fail

// const score = +prompt("Enter your percentage"); //82

// switch (true) {
//   case score >= 80:
//     alert("Distinction");
//     break;
//   case score >= 70 && score <= 79.99:
//     alert("1st Division");
//     break;
//   default:
//     alert("Invalid Number");
// }

// ES6 Ternary Operator

// if (gender === "m") {
// } else {
// }

// const gender = prompt("Gender");
// gender === "m" ? alert("Male") : alert("Female");

// Write a js program to ask user their drink order
// (tea, coffee, coke, milk, water)
// alert => You have ordered .....

const drink = prompt("What would you like to drink?");

const result = drink === "tea" ? "Tea" : "Coffee";
