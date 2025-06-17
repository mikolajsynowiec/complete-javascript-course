'use strict';

let score0 = 0;
let score1 = 0;
let currentScore0 = 0;
let currentScore1 = 0;
let currentPlayer = 0;

document.querySelector('#score--0').textContent = score0;
document.querySelector('#score--1').textContent = score1;
document.querySelector('#current--0').textContent = currentScore0;
document.querySelector('#current--1').textContent = currentScore1;

const diceImage = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const switchPlayer = function () {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--active');
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--active');
};

const dieceRoll = function () {
  const roll = Math.trunc(Math.random() * 6) + 1;
  diceImage.src = `dice-${roll}.png`;

  if (roll === 1) {
    if (currentPlayer === 0) {
      score0 = 0;
      document.querySelector('#score--0').textContent = score0;
    } else {
      score1 = 0;
      document.querySelector('#score--1').textContent = score1;
    }
    switchPlayer();
  } else {
    if (currentPlayer === 0) {
      score0 += roll;
      document.querySelector('#score--0').textContent = score0;
      if (score0 >= 100) {
        currentScore0++;
        document.querySelector('#current--0').textContent = currentScore0;
        newGame();
      }
    } else {
      score1 += roll;
      document.querySelector('#score--1').textContent = score1;
      if (score1 >= 100) {
        currentScore1++;
        document.querySelector('#current--1').textContent = currentScore1;
        newGame();
      }
    }
  }
};

const hold = function () {
  switchPlayer();
};

const newGame = function () {
  score0 = 0;
  score1 = 0;
  document.querySelector('#score--0').textContent = score0;
  document.querySelector('#score--1').textContent = score1;

  currentPlayer = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
};

btnNew.addEventListener('click', newGame);
btnRoll.addEventListener('click', dieceRoll);
btnHold.addEventListener('click', hold);
