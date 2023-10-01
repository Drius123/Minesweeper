import './utils/Reset/index';
import './resources.scss';

import header from './Header';
import main from './Main';
import footer from './Footer';
import Mineswiper from './Game-logic/index';
import { newGame } from './New Game';
import gameWinner from './Game win';
import divGameOver from './Game over';
import audio from './Audio click';
import audioWin from './Audio game win';
import audioLose from './Audio game lose';
import gameScores from './Last scores';

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
main.appendChild(newGame);
main.appendChild(gameWinner);
main.appendChild(divGameOver);
main.appendChild(audio);
main.appendChild(audioWin);
main.appendChild(audioLose);
main.appendChild(gameScores);

const mineswiper = new Mineswiper(10);

mineswiper.init();

const clicks = document.querySelector('.clicks-h1');
const field = document.querySelector('.game-field');
const audioClick = document.querySelector('#sound');
const formMusic = document.querySelector('.form-music');
const btnToChangeColor = document.querySelector('.btn-change-color');

btnToChangeColor.addEventListener('click', () => {
  field.classList.toggle('dark');
});
field.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget && formMusic.firstChild.children[0].checked) {
    audioClick.play();
  }
  if (event.target !== event.currentTarget && !event.srcElement.classList.contains('active')) {
    clicks.innerHTML = Number(clicks.innerHTML) + 1;
  }
  if (event.target !== event.currentTarget && mineswiper.store) {
    mineswiper.store = false;
    mineswiper.randomAddBomb();

    mineswiper.addOneInOneField();

    if (mineswiper.fieldArr[event.target.classList[0].slice(3)] === 'X') {
      while (mineswiper.fieldArr[event.target.classList[0].slice(3)] === 'X') {
        mineswiper.randomAddBomb();

        mineswiper.addOneInOneField();
      }
    }
  }
});

mineswiper.mineFieldChanger();

mineswiper.addFlag();

mineswiper.newGame();

let time = 0;
const headerH1 = document.querySelector('.header-h1');
let timeOut = setInterval(() => {
  time += 1;
  headerH1.textContent = time;
}, 1000);

setInterval(() => {
  if (!mineswiper.game) {
    clearInterval(timeOut);
    time = 0;
  } else if (time === 0) {
    timeOut = setInterval(() => {
      time += 1;
      headerH1.textContent = time;
    }, 1000);
  }
}, 1100);

setInterval(() => {
  let count = 0;
  for (let i = 0; i < mineswiper.lengthGame * mineswiper.lengthGame; i += 1) {
    if (field.children[i].classList.contains('active')) {
      count += 1;
    }
  }
  if (count === mineswiper.lengthGame * mineswiper.lengthGame - mineswiper.bomb
    && mineswiper.flag) {
    mineswiper.gameWinner();
    mineswiper.flag = false;
  }
}, 100);
