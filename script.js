// i: function to get computer choice
function getComputerChoice() {
  //i: random number to between 3 choices out of 10...
  //o: random string, with either "rock" , 'paper' or 'scissors'
  //declare a random variable to get a random number 
  // let random = Math.floor(Math.random() * 4);
  // // if else to check if number is greater than 6
  //   // if so return 'rock'
  // if(random === 3) {
  //   return 'rock';
  //   // else if number is greater than 2 but less than 3
  //   //return 'paper'
  // } else if (random > 1 && random < 3) {
  //   return 'paper';
  //    //else return 'scissors'
  // } else {
  //   return 'scissors';
  // }
  //OR
  let choices = ['Rock', 'Paper', 'Scissors'];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice.toLowerCase();
}

function game() {

  //establish a round count,playerWin count, computerWin count
  let round = 0;
  let playerWin = 0;
  let computerWin = 0;

  //use a loop. either for loop or while loop.
  while (round < 5) {
    //when invoked increment round by one.
    round++;
    const playerSelection = prompt("Rock, Paper, Scissors?");
    
    if (playerSelection === null || playerSelection === undefined || playerSelection === '' || (playerSelection.toLowerCase() !== 'rock' && playerSelection.toLowerCase() !== 'paper' && playerSelection.toLowerCase() !== 'scissors')) {
        console.log('Select rock, paper or scissors. Refresh to play again..');
        return;
    } 

    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection)); 
    // make playerSelection function parameter case sensitive can be any rock, ROCK, or RocK variation.
    console.log("Player wins " + playerWin);
    console.log("Computer wins " + computerWin);

    // function that plays a single round.
    function playRound(playerSelection, computerSelection) {
      //i: 2 parameters, playerSeletion and computerSelection
      //o: return winner of the round as a string. 
      //if else to check if player won or computer won
        //return appropiate string winner.
      //convert the player choice to lower case.
      const player = playerSelection.toLowerCase();
      if((player === 'rock' && computerSelection === 'paper') || (player === 'paper' && computerSelection === 'scissors') || (player === 'scissors' && computerSelection === 'rock')) {
        computerWin++;
        return "You Lose! Computer won.";
      } else if ((player === 'paper' && computerSelection === 'rock') || (player === 'rock' && computerSelection === 'scissors') || (player === 'scissors' && computerSelection === 'paper')) {
        playerWin++;
        return 'You win!'
      } else {
        return "It's a tie."
      }
    }
  }

  // if game is over tally wins.
  if (playerWin === computerWin) {
    console.log('Tie game, run it again?');
    console.log("Player wins totals " + playerWin);
    console.log("Computer wins totals " + computerWin);
  } else if (playerWin > computerWin) {
    console.log("You did it!! Congrats, you won!!!");
    console.log("Player wins totals " + playerWin);
    console.log("Computer wins totals " + computerWin);
  } else {
    console.log("Game over. You Lost!");
    console.log("Player wins totals " + playerWin);
    console.log("Computer wins totals " + computerWin);
  }
}

game();