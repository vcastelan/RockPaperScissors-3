// establish a round count,playerWin count, computerWin count
let round = 0;
let playerWin = 0;
let computerWin = 0;

// declare a variable to make computer and player selections
let computerChoice;
let playerChoice;

// output player score using DOM
const player = document.querySelector("#player-win");
player.textContent = `Player Score: ${playerWin}`;

// output computer score using DOM
const computer = document.querySelector("#comp-win");
computer.textContent = `Computer Score: ${computerWin}`;

// div output results using DOM
const output = document.querySelector('#output');
output.textContent = "Rock, Paper, Scissors?"

const buttons = document.querySelectorAll('.btn');
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
      // and for each one we add a 'click' listener to select the player choice.
      button.addEventListener('click', () => {
        playerChoice = button.id;
        if (playerChoice === "rock"){
          playerChoice = 'rock';
        } else if(playerChoice === 'paper') {
          playerChoice = 'paper';
        } else {
          playerChoice = 'scissors';
        }
        // get computer choice
        computerChoice = getComputerChoice();
        //run playround function passing in playerChoice and computerChoice.
        game();
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
function playRound(playerChoice, computerChoice) {
  //i: 2 parameters, playerSeletion and computerSelection
  //o: return winner of the round as a string. 
  //if else to check if player won or computer won
    //return appropiate string winner.
  if((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
    output.textContent = "You Lose! Computer won.";
    computerWin++;
  } else if ((playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
    output.textContent = 'You win!';
    playerWin++;
  } else {
    output.textContent = "It's a tie.";
  }
}

function game() {
  //use a loop
    player.textContent = `Player Score: ${playerWin}`;
    computer.textContent = `Computer Score: ${computerWin}`;
    playRound(playerChoice, computerChoice);
    // if game is over tally wins.
    if (computerWin === 5) {
      output.textContent = "Game over. You Lost!";
      player.textContent = "Player wins totals " + playerWin;
      computer.textContent = "Computer wins totals " + computerWin;
      round = 0;
      computerWin = 0;
      playerWin = 0;
    } else if (playerWin === 5) {
      output.textContent = "You did it!! Congrats, you won!!!";
      player.textContent = "Player wins totals " + playerWin;
      computer.textContent = "Computer wins totals " + computerWin;
      round = 0;
      computerWin = 0;
      playerWin = 0;
    } 
}