import './resources.scss';

const gameWin = document.createElement('section');
const gameWinH1 = document.createElement('h1');
const btnGameWin = document.createElement('button');
const clicks = document.createElement('h2');
const time = document.createElement('time');

clicks.classList.add('clicks-win');
time.classList.add('time-win');
gameWin.classList.add('section-game-win');
gameWinH1.classList.add('game-win-h1');
btnGameWin.classList.add('btn-game-win');
gameWinH1.textContent = 'Congratulations, you are the champion!';
btnGameWin.textContent = 'Start New Game';

gameWin.appendChild(gameWinH1);
gameWin.appendChild(clicks);
gameWin.appendChild(time);
gameWin.appendChild(btnGameWin);

export default gameWin;
