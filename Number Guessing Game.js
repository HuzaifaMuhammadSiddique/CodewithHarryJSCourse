let number = Math.floor(Math.random() * 101);
let lives = 100;
let guess; 

do{
  guess = Number.parseInt(prompt("What is your Guess: "))
  if(number === guess){
    break;
  }
  lives -= 1;
}while(number !== guess);

console.log(`You guessed the number! The number was ${number}. You had ${lives} lives left.`)
