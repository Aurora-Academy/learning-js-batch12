console.log("Hello World"); // print the message

// ES5
var name = "raktim"; // variable declare
var name = "shyam"; // override
console.log(name);

// ES6
// let, const

const person = "raktim"; // no override
console.log(person);

let school = "abc"; // allows override
school = "xyz";
console.log(school);

///////////////

alert("hello world");

// const user = prompt("What is your name?");
// console.log(user);

// const isStudent = confirm("are you above 18?");
// console.log(isStudent);

// Write a program that asks user for their name and alerts their name
// with greeting

const username = prompt("What is your name?");
//1
const greeter = "Welcome back," + username;
alert(greeter);

//2 String Literal
alert(`Welcome back, ${username}`);
