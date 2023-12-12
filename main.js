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

getComputerChoice();

let getPlayerChoice = () => {
  
}