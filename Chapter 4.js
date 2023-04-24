/*
Q1. Write a program using inclues, startsWith and endsWith function.
Q2. Write a program that converts a string to lowercase.
Q3. Write a program that extracts the amount from the following string: "Please give me RS 1000"
*/

// QUESTION 1
let word = prompt("Enter a word: ");
let letter = prompt("Enter a letter: ");

console.log(word.includes(letter));
console.log(word.startsWith(letter));
console.log(word.endsWith(letter));

// QUESTION 2
let word = prompt("Enter a word: ");
let lw = word.toLowerCase();
console.log(`The lowercase form of this word is ${lw}`)

// QUESTION 3
let sentence = "Please give me RS 1000";
let amount = sentence.slice(18);
console.log(`The amount is ${amount}`);

