let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

function pickComputerMove() {
  const randomNumber = Math.random();
  
  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
      score.ties++;
    } else if (computerMove === 'paper') {
      result = 'You lose';
      score.losses++;
    } else if (computerMove === 'scissors') {
      result = 'You win';
      score.wins++;
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
      score.wins++;
    } else if (computerMove === 'paper') {
      result = 'Tie';
      score.ties++;
    } else if (computerMove === 'scissors') {
      result = 'You lose';
      score.losses++;
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
      score.losses++;
    } else if (computerMove === 'paper') {
      result = 'You win';
      score.wins++;
    } else if (computerMove === 'scissors') {
      result = 'Tie';
      score.ties++;
    }
  }

  console.log(result);
  console.log(score);
}