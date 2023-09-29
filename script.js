// i: function to get computer choice
function getComputerChoice() {
  //i: random number to between 3 choices out of 10...
  //o: random string, with either "rock" , 'paper' or 'scissors'
  //declare a random variable to get a random number 
  let random = Math.random() * 9;
  // if else to check if number is greater than 6
    // if so return 'rock'
  if(random >= 6) {
    return 'rock';
    // else if number is greater than 2 but less than 3
    //return 'paper'
  } else if (random >= 3 && random < 6) {
    return 'paper';
     //else return 'scissors'
  } else {
    return 'scissors';
  }
}

function game() {

   //establish a round count,playerWin count, computerWin count
   let round = 0;
   let playerWin = 0;
   let computerWin = 0;
   
  // function that plays a single round.
  function playRound(playerSelection, computerSelection) {
    //i: 2 parameters, playerSeletion and computerSelection
    //o: return winner of the round as a string. 
    //if else to check if player won or computer won
      //return appropiate string winner.
    //convert the player choice to lower case.
    const choice = playerSelection.toLowerCase();
    if((choice === 'rock' && computerSelection === 'paper') || (choice === 'paper' && computerSelection === 'scissors') || (choice === 'scissors' && computerSelection === 'rock')) {
      return "You Lose! Computer won.";
    } else if ((choice === 'paper' && computerSelection === 'rock') || (choice === 'rock' && computerSelection === 'scissors') || (choice === 'scissors' && computerSelection === 'paper')) {
      return 'You win!'
    } else {
      return "It's a tie."
    }
  }

}
   
const playerSelection = prompt('Rock, Paper, Scissors?');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
// make playerSelection function parameter case sensitive can be any rock, ROCK, or RocK variation.


