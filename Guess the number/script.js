'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// console.log(secretNumber);
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = `Start guessing ...`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.highscore').textContent = highScore;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No input try again';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(
        '.message'
      ).textContent = `Too High Guess again you have ${score} attempts`;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = `You lost try again`;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(
        '.message'
      ).textContent = `Too Low Guess again you have ${score} attempts`;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = `You lost try again`;
    }
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = `You won`;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
