"use strict";
const score0ele = document.querySelector("#score--0");
const score1ele = document.getElementById("score--1");
const diceEle = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const curr0 = document.querySelector("#current--0");
const curr1 = document.querySelector("#current--1");
const Player0Ele = document.querySelector(".player--0");
const Player1Ele = document.querySelector(".player--1");
let gameState, active, curr, scores;
const init = () => {
  score0ele.textContent = 0;
  score1ele.textContent = 0;
  curr0.textContent = 0;
  curr1.textContent = 0;
  Player0Ele.classList.remove("player--winner");
  Player1Ele.classList.remove("player--winner");
  Player0Ele.classList.add("player--active");
  Player1Ele.classList.remove("player--active");
  diceEle.classList.add("hidden");
  scores = [0, 0];
  curr = 0;
  active = 0;
  gameState = true;
};

const switchPlayer = () => {
  document.getElementById(`current--${active}`).textContent = 0;
  curr = 0;
  active = active === 0 ? 1 : 0;
  Player0Ele.classList.toggle("player--active");
  Player1Ele.classList.toggle("player--active");
};
init();
// Rolling dice
btnRoll.addEventListener("click", function () {
  if (gameState) {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    //   console.log(diceNum);
    diceEle.classList.remove("hidden");
    diceEle.src = `dice-${diceNum}.png`;
    if (diceNum !== 1) {
      curr += diceNum;
      document.getElementById(`current--${active}`).textContent = curr;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  //   console.log("hold button");
  if (gameState) {
    scores[active] += curr;
    document.getElementById(`score--${active}`).textContent = scores[active];
    // check if won
    if (scores[active] >= 100) {
      gameState = false;
      document
        .querySelector(`.player--${active}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${active}`)
        .classList.remove("player--active");
      diceEle.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", function () {
  init();
});
