/*
Q1. Write a program using prompt function to take age as a value from the user and use alert to tell him if he can drive!
Q2. In Q1 use confirm to ask the user if he wants to see the prompt again.
Q3. In the previous question, use console.error() to log the error if the age entered is negative.
Q4. Write a program to change the url to google.com (Redirection') if user enters a number greater than 4.
Q5. Change the background of the page to yellow, red or any other color based on user input through prompt.
*/

// QUESTION 1
let age = Number.parseInt(prompt("Enter your age: "));
age<18 ? alert("You cannot drive!") : alert("You can drive!");

// QUESTION 2
let age = Number.parseInt(prompt("Enter your age: "));
age<18 ? alert("You cannot drive!") : alert("You can drive!");
let again = confirm("Do you want to see the message again?");
if(again){
  age<18 ? alert("You cannot drive!") : alert("You can drive!");
}

// QUESTION 3
let age = Number.parseInt(prompt("Enter your age: "));
if(age<0){
  console.error("Age cannot be negative. Please enter a positive integer.")
} else{
  age<18 ? alert("You cannot drive!") : alert("You can drive!");
}
