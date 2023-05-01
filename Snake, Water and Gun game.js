/* 
User enters S, W or G.
S vs W, S wins
S vs G, G wins
G vs W, W wins
*/
console.log("Snake, Water and Gun Game.");
console.log(" ");
console.log("Enter S for Snake.");
console.log("Enter W for Water");
console.log("Enter G for Gun");

let user = prompt("Enter: ");
user = user.toUpperCase()

let choices = ["S","W","G"];
let computer = choices[Math.floor(Math.random() * 3)];

let computerChoice;
let userChoice;

if(user === "S"){
  userChoice = "Snake";
} else if(user === "W"){
  userChoice = "Water";
} else if(user === "G"){
  userChoice = "Gun"
}

if(computer === "S"){
  computerChoice = "Snake";
} else if(computer === "W"){
  computerChoice = "Water";
} else if(computer === "G"){
  computerChoice = "Gun"
}

if(user === "S" && computer === "W"){
  console.log(`You chose ${userChoice} and computer chose ${computerChoice}. So you win.`)
} else if(user === "W" && computer === "S"){
  console.log(`You chose ${userChoice} and computer chose ${computerChoice}. So computer wins.`)
} else if(user === "S" && computer === "G"){
  console.log(`You chose ${userChoice} and computer chose ${computerChoice}. So computer wins.`)
} else if(user === "G" && computer === "S"){
  console.log(`You chose ${userChoice} and computer chose ${computerChoice}. So you win.`)
} else if(user === "G" && computer === "W"){
  console.log(`You chose ${userChoice} and computer chose ${computerChoice}. So computer wins.`)
} else if(user === "W" && computer === "G"){
  console.log(`You chose ${userChoice} and computer chose ${computerChoice}. So you win.`)
} else{
  console.log(`It was a tie! You both chose ${userChoice}.`)
}
