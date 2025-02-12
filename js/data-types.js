// 1. Single Line Comment (//)
// 2. Multi Line Comment  (/**/)

/*
Primitive datatypes
String, Number, Null, Boolean, Undefined

- Default datatype: String

Complex datatypes
Object
    Object
    Array
    Date

*/

const string = "raktim shrestha is a good person."; // Character, Word, sentence, paragraph
const pi = 3.14;
let x;
const d = null;
const isMale = true;

// Type Conversion / Type Coercion (ctrl + /)

const value = "13";
console.log(typeof value); // type checking

const actualNumber = Number(value); // type conversion
console.log(actualNumber);
console.log(typeof actualNumber);

// Convert number to string
const num = 13;
const numToString = String(num);
console.log(num, numToString);

// Write a program that divides the two numbers asking user for the 2 number inputs and alert the result.

// const num1 = +prompt("First number please");
// const num2 = prompt("Second number please");
// console.log(typeof num2);
// const result = num1 / num2;
// alert(`The result of division between ${num1} and ${num2} is ${result}`);

// Unary Operator;
let val = 1;
val++; //2
val += 1; //3
console.log(val);
