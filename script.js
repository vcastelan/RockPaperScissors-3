// establish a round count,playerWin count, computerWin count
let round = 0;
let playerWin = 0;
let computerWin = 0;

let computerSelection;
let playerChoice;

const player = document.querySelector("#player-win");
player.textContent = `Player Score: ${playerWin}`;

const computer = document.querySelector("#comp-win");
computer.textContent = `Computer Score: ${computerWin}`;

// div output p.
const output = document.querySelector('#output');
output.textContent = "Rock, Paper, Scissors?"

const buttons = document.querySelectorAll('.btn');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerChoice = button.id;
    if (playerChoice === "rock"){
      playerChoice = 'rock';
    } else if(playerChoice === 'paper') {
      playerChoice = 'paper';
    } else {
      playerChoice = 'scissors';
    }
    computerSelection = getComputerChoice();
    playRound(playerChoice, computerSelection);
  });
});

// i: function to get computer choice
function getComputerChoice() {
  //i: random number to between 3 choices out of 10...
  //o: random string, with either "rock" , 'paper' or 'scissors'
  //declare an array to keep track of 3 choices. 
  let choices = ['Rock', 'Paper', 'Scissors'];
  // declare a variable to get a random choice from the array of choices.
  const choice = choices[Math.floor(Math.random() * choices.length)];
  // return that choice to lowerCase.
  return choice.toLowerCase();
}

// function that plays a single round.
function playRound(playerSelection, computerSelection) {
//i: 2 parameters, playerSeletion and computerSelection
//o: return winner of the round as a string. 
//if else to check if player won or computer won
  //return appropiate string winner.
  if((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
    computerWin++;
    output.textContent = "You Lose! Computer won.";
  } else if ((playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    playerWin++;
    output.textContent = 'You win!';
  } else {
    output.textContent = "It's a tie.";
  }
}

// function game() {

// // establish a round count,playerWin count, computerWin count

//   //use a loop. either for loop or while loop.
//   while (round < 5) {
//     //when invoked increment round by one.
//     round++;
//     const playerSelection = prompt("Rock, Paper, Scissors?");
    
//     if (playerSelection === null || playerSelection === undefined || playerSelection === '' || (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors')) {
//         console.log('Select rock, paper or scissors. Refresh to play again..');
//         return;
//     } 

//     let computerSelection;
//     // console.log(playRound(playerSelection, computerSelection)); 
//     // // make playerSelection function parameter case sensitive can be any rock, ROCK, or RocK variation.
//     // console.log("Player wins " + playerWin);
//     // console.log("Computer wins " + computerWin);
//   }
// }

  // if game is over tally wins.
  // if (playerWin === computerWin) {
  //   console.log('Tie game, run it again?');
  //   console.log("Player wins totals " + playerWin);
  //   console.log("Computer wins totals " + computerWin);
  // } else if (playerWin > computerWin) {
  //   console.log("You did it!! Congrats, you won!!!");
  //   console.log("Player wins totals " + playerWin);
  //   console.log("Computer wins totals " + computerWin);
  // } else {
  //   console.log("Game over. You Lost!");
  //   console.log("Player wins totals " + playerWin);
  //   console.log("Computer wins totals " + computerWin);
  // }
// }

// game();