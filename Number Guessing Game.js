let number = Math.floor(Math.random() * 101);
let lives = 10;
let guess; 

do{
  guess = Number.parseInt(prompt("What is your Guess: "));
  
  if (isNaN(guess) || guess < 0 || guess > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
    continue;
  }
  
  if(number === guess){
    console.log(`You guessed the number! The number was ${number}. You had ${lives} lives left.`);
    break;
  } 
  else {
    lives--;
    console.log(`Try again! Your guess is ${guess > number ? 'greater' : 'less'} than the number!`);
  }
}while(lives > 0);

if(lives === 0) {
  console.log(`You lose! You have ${lives} lives left! The number was ${number}.`);
}
