'use strict';
// creating btns variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
let currentScore0El = document.getElementById('current--0');
let currentScore1El = document.getElementById('current--1');
let newGame = document.querySelector('.btn--new');

let score = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
// starting condition
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');

  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;
};
init(); // initial conditon

// Switching next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionalty
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1 Generating a random dice Number
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    //console.log(diceNumber);
    // 2:-display dice Number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;

    // 3:-checking dice Number
    if (diceNumber !== 1) {
      // add dice to curent score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // currentScore0El.textContent = currentScore;
    } else {
      // current score of previous player as 0
      switchPlayer();
      // currentScore = 0;
      // currentScore0El.textContent = currentScore;
      // currentScore += diceNumber;
      // currentScore1El.textContent = currentScore;
      //Switching next playe
    }
  }
});
// Holding the state of game
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current to active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // 2. check if score is >= 10
    if (score[activePlayer] >= 100) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active--player');
    } else {
      // Swith next player
      switchPlayer();
    }
  }
});
// Starting new game
newGame.addEventListener('click', init);
// newGame.addEventListener('click', function () {
//   // score0El.textContent = 0;
//   // score1El.textContent = 0;
//   // currentScore0El.textContent = 0;
//   // currentScore1El.textContent = 0;

//   // player0El.classList.remove('player--winner');
//   // player1El.classList.remove('player--winner');
//   // player0El.classList.add('player--active');
//   // player1El.classList.remove('player--active');
//   // // console.log('new button clicked !');
//   // diceEl.classList.add('hidden');
//   // // score = [0, 0];
//   // currentScore = 0;
//   // playing = true;
//   // activePlayer = 0;
//   // wrapped in initial method
//   init();
//   // console.log(score[0], score[1]);
// });
