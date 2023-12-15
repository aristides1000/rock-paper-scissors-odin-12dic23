let getComputerChoice = () => {
  let query = Math.floor(Math.random() * 3);
  switch (query) {
    case 0:
      return 'rock';
      break;

    case 1:
      return 'paper';
      break;

    default:
      return 'scissors';
  }
}

let getPlayerChoice = () => {
  let playerSelectionRock = document.getElementById("playerSelectionRock");
  playerSelectionRock.addEventListener("click", function() {
    return 'rock';
  });
  let playerSelectionPaper = document.getElementById("playerSelectionPaper");
  playerSelectionPaper.addEventListener("click", function() {
    return 'paper';
  });
  let playerSelectionScissor = document.getElementById("playerSelectionScissor");
  playerSelectionScissor.addEventListener("click", function() {
    return 'scissor';
  });
}

let playRound = (playerSelection, computerSelection) => {
  if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return 'It\'s a tie';
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

let game = () => {
  let computerPoints = 0;
  let playerPoints = 0;
  while(computerPoints < 5 && playerPoints < 5) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playRound(playerSelection, computerSelection) === `You Win! ${playerSelection} beats ${computerSelection}`) {
      playerPoints++;
      console.log(`You Win! ${playerSelection} beats ${computerSelection}, you have ${playerPoints} and the computer have ${computerPoints}`);
    } else if (playRound(playerSelection, computerSelection) === 'It\'s a tie') {
      console.log('It\'s a tie');
      continue;
    } else {
      computerPoints++;
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}, you have ${playerPoints} and the computer have ${computerPoints}`);
    }
  }
  if (playerPoints > computerPoints) {
    console.log('Congratulaion, you finally win');
  } else {
    console.log('Sorry, you finally lose, please try again');
  }
}

game();
