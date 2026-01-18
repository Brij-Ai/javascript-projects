'use strict';
// document.querySelector('.message').textContent = '🎉Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// let gess = (document.querySelector('.guess').value = 10); // this is defined as number so we are get by value not by textcontent
// console.log(gess);
//
// random generation
let randNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// lost game function
function lostGame() {
  document.querySelector('.message').textContent =
    '🙁 You lost the game,Try again!';
  document.querySelector('.score').textContent = 0;
}
// message
const dispalyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// score decreament
function scoreD(scr) {
  score--;
  document.querySelector('.score').textContent = score;
}
// let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessVlue = Number(document.querySelector('.guess').value);

  if (!guessVlue) {
    document.querySelector('.message').textContent = '⛔No number';
  } else if (guessVlue === randNumber) {
    // win condition
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '🏆Correct Number';
    document.querySelector('.number').textContent = randNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = score;
  } else if (guessVlue !== randNumber) {
    // wrong condition
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessVlue > randNumber ? '📈Too high!' : '📉Too Low!';
      scoreD(score);
    } else {
      lostGame();
    }
  }
});

// implemaention of Again functionalty
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  randNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = '0';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
