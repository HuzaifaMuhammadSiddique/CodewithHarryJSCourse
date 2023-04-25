/*
Q1. Create an array of numbers and take input from the user to add numbers to this array.
Q2. Keep adding numbers to an array until the user adds 0.
Q3. Filter the numbers that are divisble by 10 from an array.
Q4. Create an array of squares of a given number
Q5. Use reduce to calculate the factorial of a given number from an array of first n natural numbers.
*/

// QUESTION 1
let arr = [1, 4, 7, 17, 28, 31];
console.log("The current array is", arr);
let input = Number.parseInt(prompt("Enter a number you want to add to the array: "));
arr.push(input);
console.log(arr)

// QUESTION 2
let newArray = [2, 5, 6, 9, 11];
let count = 0;
let add;
do{
  add = Number.parseInt(prompt("Enter a number: "));
  newArray.push(add);
  count += 1;
} while (add !== 0);

console.log(`You have added ${count} number(s)`)
console.log(newArray)

// QUESTION 3
let numbers = Number.parseInt(prompt("How many numbers should the array contain: "));
let divident = Number.parseInt(prompt("Which number do you want to find the multiples of: "));
let max = Number.parseInt(prompt("What could be the maximum number in the array: "))
let array = [];
for(let i = 1; i <= numbers; i++){
  let num = Math.floor(Math.random() * (max)) + 1;
  array.push(num);
}

let filteredArray = array.filter(function(number){
  return number % divident === 0;
})

console.log(filteredArray)

// QUESTION 4
let myArray = [2, 5, 9, 11, 14, 19, 30, 55, 61, 78, 100];

let result = myArray.map(function(n){
  return n*n;
})

console.log(result);

// QUESTION 5
let ultimateArray = [1,2,3,4,5,6,7,8,9];

let fact = ultimateArray.reduce(function(acc, n){
  return acc = acc * n
}, 1);

console.log(fact);



