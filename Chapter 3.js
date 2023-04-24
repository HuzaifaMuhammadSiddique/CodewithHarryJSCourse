/*
Q1. Write a program to print the marks of a student in an object using for loop. {"huzaifa": 89, "hammad": 85, "ali": 88}
Q2. Write a program given in Q1 using a for in loop.
Q3. Write a program that prints "try again" until the user enters a positive number.
Q4. Wrtie a function that finds the mean of 5 numbers.
*/

// QUESTION 1
let marks = {"huzaifa": 89, "hammad": 85, "ali": 88};
let marksArray = Object.keys(marks);
for(let i=0; i<marksArray.length; i++){
  console.log("The marks of " + marksArray[i] + " is " + marks[marksArray[i]]) 
}

// QUESTION 2
let marks = {"huzaifa": 89, "hammad": 85, "ali": 88};
let marksArray = Object.keys(marks);
for(key in marks){
  console.log("The marks of " + key + " is " + marks[key])
}

// QUESTION 3
let n;
do{
    n = prompt("Enter a positive number: ");
}while (n <= 0)

// QUESTION 4
function meanOfFive(a,b,c,d,e){
return (a+b+c+d+e)/5
}
