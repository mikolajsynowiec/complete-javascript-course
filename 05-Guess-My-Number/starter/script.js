'use strict';

let totalScore = 20;
let highScore = 0;
document.querySelector('.score').textContent = totalScore;

let secretNumber = Math.trunc(Math.random() * 21);

const checkFunction = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (totalScore <= 1) {
    document.querySelector('.message').textContent = 'You lost!';
    totalScore--;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = totalScore;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'You gueesed the correct number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = totalScore;
    if (highScore === undefined || totalScore > highScore) {
      highScore = totalScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    totalScore--;
    document.querySelector('.score').textContent = totalScore;
    if (guess > secretNumber) {
      document.querySelector('.message').textContent =
        'Your Number is to gigh! Try again!';
    } else {
      document.querySelector('.message').textContent =
        'Your Number is to low! Try again!';
    }
  }
};

const againFunction = function () {
  totalScore = 20;
  document.querySelector('.score').textContent = totalScore;
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', checkFunction);
document.querySelector('.again').addEventListener('click', againFunction);
