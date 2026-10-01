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

  document.querySelector('.js-moves')
    .innerHTML = `You ${playerMove} - ${computerMove} Computer`;

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };

  document.querySelector('.js-result')
    .innerHTML = 'Score was reset.';
  
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

let intervalId;
let isAutoPlaying = false;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const computerMove = pickComputerMove();
      playGame(computerMove);
    }, 1500);
    isAutoPlaying = true;
    
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}