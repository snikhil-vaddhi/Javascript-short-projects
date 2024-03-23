'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const changeNumber = exp => {
  document.querySelector('.number').textContent = exp;
};
const changeScore = score => {
  document.querySelector('.score').textContent = score;
};
const displayBackground = bg => {
  document.querySelector('body').style.backgroundColor = bg;
};
const displayWidth = width => {
  document.querySelector('.number').style.width = width;
};
// console.log(secretNumber);
document.querySelector('.again').addEventListener('click', function () {
  displayBackground('#222');
  displayWidth('15rem');
  document.querySelector('.guess').value = '';
  changeNumber('?');
  score = 20;
  changeScore(score);
  displayMessage(`Start guessing ...`);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('No input try again');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(
        guess > secretNumber
          ? `Too High Guess again you have ${score} attempts`
          : `Too Low Guess again you have ${score} attempts`
      );

      changeScore(score);
    } else {
      changeScore(0);
      displayMessage(`You lost try again`);
    }
  } else if (guess === secretNumber) {
    displayBackground('#60b347');
    displayWidth('30rem');
    changeNumber(secretNumber);
    displayMessage(`You won`);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
