let score = {
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    resetScore();
  });

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
  });

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
    .innerHTML = `You <img src="images/${playerMove}.png"> - <img src="images/${computerMove}.png"> Computer`;

  resultColor(result);

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

  removeResultColors();

  document.querySelector('.js-result')
    .innerHTML = 'Score was reset.';
  
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

let intervalId;
let isAutoPlaying = false;

function autoPlay() {
  const autoPlayButtonElem = document.querySelector('.js-auto-play-button');
  
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const computerMove = pickComputerMove();
      playGame(computerMove);
    }, 1500);

    autoPlayButtonElem.innerHTML = 'Stop playing';
    isAutoPlaying = true;
    
  } else {
    clearInterval(intervalId);
    autoPlayButtonElem.innerHTML = 'Auto play';
    isAutoPlaying = false;
  }
}

function resultColor(result) {
  const resultMessageElem = document.querySelector('.js-result');

  removeResultColors();

  if (result === 'You win') {
      resultMessageElem.classList.add('result-green');
  } else if (result === 'You lose') {
    resultMessageElem.classList.add('result-red');
  } else if (result === 'Tie') {
    resultMessageElem.classList.add('result-yellow');
  } else {
    removeResultColors();
  }
}

function removeResultColors() {
  const resultMessageElem = document.querySelector('.js-result');

  resultMessageElem.classList.remove('result-green');
  resultMessageElem.classList.remove('result-red');
  resultMessageElem.classList.remove('result-yellow');
}