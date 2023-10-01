import gameSet from '../Game change';
import { gameContent } from '../New Game';

export default class Mineswiper {
  constructor(lengthGame) {
    this.lengthGame = lengthGame;
    this.bomb = 10;
    this.game = true;
    this.gameScores = [];
    this.flag = true;
    this.store = true;
  }

  randomAddBomb() {
    this.fieldArr = [];
    while (this.fieldArr.length < this.lengthGame * this.lengthGame) {
      this.fieldArr.push(0);
    }
    this.counter = 0;
    this.randomNum = 0;
    if (this.bomb > 90) {
      while (this.counter < this.bomb + 1) {
        this.randomNum = Math.round(Math.random() * this.lengthGame * this.lengthGame - 1);
        if (this.fieldArr[this.randomNum] !== 'X') {
          this.counter += 1;
          this.fieldArr[this.randomNum] = 'X';
        }
      }
    } else {
      while (this.counter < this.bomb) {
        this.randomNum = Math.round(Math.random() * this.lengthGame * this.lengthGame - 1);
        if (this.fieldArr[this.randomNum] !== 'X') {
          this.counter += 1;
          this.fieldArr[this.randomNum] = 'X';
        }
      }
    }
  }

  addOneInOneField() {
    this.fieldArr.forEach((item, index, arr) => {
      if (item === 'X') {
        if (index === 0) {
          const indexArrForAddOne = [index + 1,
            index + this.lengthGame, index + this.lengthGame + 1];
          indexArrForAddOne.forEach((itemForAddOne) => {
            arr[itemForAddOne] !== 'X' ? arr[itemForAddOne] += 1 : null;
          });
        } else if (index === this.lengthGame * this.lengthGame - this.lengthGame) {
          const indexArrForAddOne = [index + 1,
            index - this.lengthGame, index - this.lengthGame + 1];
          indexArrForAddOne.forEach((itemForAddOne) => {
            arr[itemForAddOne] !== 'X' ? arr[itemForAddOne] += 1 : null;
          });
        } else if (index === this.lengthGame - 1) {
          const indexArrForAddOne = [index - 1,
            index + this.lengthGame - 1, index + this.lengthGame];
          indexArrForAddOne.forEach((itemForAddOne) => {
            arr[itemForAddOne] !== 'X' ? arr[itemForAddOne] += 1 : null;
          });
        } else if (index === this.lengthGame * this.lengthGame - 1) {
          const indexArrForAddOne = [index - 1,
            index - this.lengthGame, index - this.lengthGame - 1];
          indexArrForAddOne.forEach((itemForAddOne) => {
            arr[itemForAddOne] !== 'X' ? arr[itemForAddOne] += 1 : null;
          });
        } else if (index % this.lengthGame === 0) {
          const indexArrForAddOne = [index + 1, index - this.lengthGame,
            index + this.lengthGame, index - this.lengthGame + 1, index + this.lengthGame + 1];
          indexArrForAddOne.forEach((itemForAddOne) => {
            arr[itemForAddOne] !== 'X' ? arr[itemForAddOne] += 1 : null;
          });
        } else if (index % this.lengthGame === this.lengthGame - 1) {
          const indexArrForAddOne = [index - 1, index - this.lengthGame,
            index + this.lengthGame, index + this.lengthGame - 1, index - this.lengthGame - 1];
          indexArrForAddOne.forEach((itemForAddOne) => {
            arr[itemForAddOne] !== 'X' ? arr[itemForAddOne] += 1 : null;
          });
        } else if (index > 0 && index < this.lengthGame - 1) {
          const indexArrForAddOne = [index + 1, index + this.lengthGame,
            index + this.lengthGame - 1, index + this.lengthGame + 1, index - 1];
          indexArrForAddOne.forEach((itemForAddOne) => {
            arr[itemForAddOne] !== 'X' ? arr[itemForAddOne] += 1 : null;
          });
        } else if (index > this.lengthGame * this.lengthGame - this.lengthGame
          && index < this.lengthGame * this.lengthGame - 1) {
          const indexArrForAddOne = [index + 1, index - this.lengthGame,
            index - this.lengthGame + 1, index - this.lengthGame - 1, index - 1];
          indexArrForAddOne.forEach((itemForAddOne) => {
            arr[itemForAddOne] !== 'X' ? arr[itemForAddOne] += 1 : null;
          });
        } else {
          const indexArrForAddOne = [index + 1, index - 1, index + this.lengthGame,
            index + this.lengthGame - 1, index + this.lengthGame + 1, index - this.lengthGame + 1,
            index - this.lengthGame, index - this.lengthGame - 1];
          indexArrForAddOne.forEach((itemForAddOne) => {
            arr[itemForAddOne] !== 'X' ? arr[itemForAddOne] += 1 : null;
          });
        }
      }
    });
    this.fieldArr = this.fieldArr.map((item) => (item === 0 ? '' : item));
  }

  init() {
    const field = document.querySelector('.game-field');
    for (let i = 0; i < this.lengthGame * this.lengthGame; i += 1) {
      field.append(document.createElement('button'));
      field.children[i].classList.add(`btn${i}`);
    }
  }

  checkerForChanger(i, item) {
    if (item === '') {
      this.fieldArr[i] = ' ';
      if (i === 0) {
        document.querySelector(`.btn${i}`).classList.add('active');
        const indexForChecker = [i + 1, i + this.lengthGame, i + this.lengthGame + 1];
        indexForChecker.forEach((itm) => {
          if (this.fieldArr[itm] !== 'X' && this.fieldArr[itm] !== '') {
            if (this.fieldArr[itm] === 1) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('green');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 2) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('blue');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 3) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('pink');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 4) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('aqua');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 5) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('yellow');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 6) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('orange');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 7) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('brown');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 8) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('red');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            }
          } else if (this.fieldArr[itm] === '') {
            document.querySelector(`.btn${itm}`).classList.remove('flag');
            this.checkerForChanger(itm, this.fieldArr[itm]);
          }
        });
      } else if (i === this.lengthGame - 1) {
        document.querySelector(`.btn${i}`).classList.add('active');
        const indexForChecker = [i - 1, i + this.lengthGame, i + this.lengthGame - 1];
        indexForChecker.forEach((itm) => {
          if (this.fieldArr[itm] !== 'X' && this.fieldArr[itm] !== '') {
            if (this.fieldArr[itm] === 1) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('green');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 2) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('blue');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 3) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('pink');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 4) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('aqua');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 5) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('yellow');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 6) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('orange');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 7) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('brown');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 8) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('red');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            }
          } else if (this.fieldArr[itm] === '') {
            document.querySelector(`.btn${itm}`).classList.remove('flag');
            this.checkerForChanger(itm, this.fieldArr[itm]);
          }
        });
      } else if (i === this.lengthGame * this.lengthGame - this.lengthGame) {
        document.querySelector(`.btn${i}`).classList.add('active');
        const indexForChecker = [i + 1, i - this.lengthGame, i - this.lengthGame + 1];
        indexForChecker.forEach((itm) => {
          if (this.fieldArr[itm] !== 'X' && this.fieldArr[itm] !== '') {
            if (this.fieldArr[itm] === 1) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('green');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 2) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('blue');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 3) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('pink');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 4) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('aqua');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 5) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('yellow');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 6) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('orange');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 7) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('brown');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 8) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('red');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            }
          } else if (this.fieldArr[itm] === '') {
            document.querySelector(`.btn${itm}`).classList.remove('flag');
            this.checkerForChanger(itm, this.fieldArr[itm]);
          }
        });
      } else if (i === this.lengthGame * this.lengthGame - 1) {
        document.querySelector(`.btn${i}`).classList.add('active');
        const indexForChecker = [i - 1, i - this.lengthGame, i - this.lengthGame - 1];
        indexForChecker.forEach((itm) => {
          if (this.fieldArr[itm] !== 'X' && this.fieldArr[itm] !== '') {
            if (this.fieldArr[itm] === 1) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('green');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 2) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('blue');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 3) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('pink');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 4) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('aqua');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 5) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('yellow');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 6) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('orange');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 7) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('brown');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 8) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('red');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            }
          } else if (this.fieldArr[itm] === '') {
            document.querySelector(`.btn${itm}`).classList.remove('flag');
            this.checkerForChanger(itm, this.fieldArr[itm]);
          }
        });
      } else if (i > 0 && i < this.lengthGame - 1) {
        document.querySelector(`.btn${i}`).classList.add('active');
        const indexForChecker = [i - 1, i + 1, i + this.lengthGame,
          i + this.lengthGame - 1, i + this.lengthGame + 1];
        indexForChecker.forEach((itm) => {
          if (this.fieldArr[itm] !== 'X' && this.fieldArr[itm] !== '') {
            if (this.fieldArr[itm] === 1) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('green');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 2) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('blue');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 3) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('pink');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 4) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('aqua');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 5) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('yellow');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 6) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('orange');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 7) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('brown');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 8) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('red');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            }
          } else if (this.fieldArr[itm] === '') {
            document.querySelector(`.btn${itm}`).classList.remove('flag');
            this.checkerForChanger(itm, this.fieldArr[itm]);
          }
        });
      } else if (i > this.lengthGame * this.lengthGame - this.lengthGame
        && i < this.lengthGame * this.lengthGame - 1) {
        document.querySelector(`.btn${i}`).classList.add('active');
        const indexForChecker = [i - 1, i + 1,
          i - this.lengthGame, i - this.lengthGame - 1, i - this.lengthGame + 1];
        indexForChecker.forEach((itm) => {
          if (this.fieldArr[itm] !== 'X' && this.fieldArr[itm] !== '') {
            if (this.fieldArr[itm] === 1) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('green');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 2) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('blue');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 3) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('pink');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 4) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('aqua');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 5) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('yellow');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 6) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('orange');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 7) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('brown');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 8) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('red');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            }
          } else if (this.fieldArr[itm] === '') {
            document.querySelector(`.btn${itm}`).classList.remove('flag');
            this.checkerForChanger(itm, this.fieldArr[itm]);
          }
        });
      } else if (i % this.lengthGame === 0) {
        document.querySelector(`.btn${i}`).classList.add('active');
        const indexForChecker = [i + 1, i - this.lengthGame,
          i + this.lengthGame, i - this.lengthGame + 1, i + this.lengthGame + 1];
        indexForChecker.forEach((itm) => {
          if (this.fieldArr[itm] !== 'X' && this.fieldArr[itm] !== '') {
            if (this.fieldArr[itm] === 1) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('green');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 2) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('blue');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 3) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('pink');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 4) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('aqua');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 5) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('yellow');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 6) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('orange');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 7) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('brown');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 8) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('red');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            }
          } else if (this.fieldArr[itm] === '') {
            document.querySelector(`.btn${itm}`).classList.remove('flag');
            this.checkerForChanger(itm, this.fieldArr[itm]);
          }
        });
      } else if (i % this.lengthGame === this.lengthGame - 1) {
        document.querySelector(`.btn${i}`).classList.add('active');
        const indexForChecker = [i - 1, i - this.lengthGame,
          i + this.lengthGame, i - this.lengthGame - 1, i + this.lengthGame - 1];
        indexForChecker.forEach((itm) => {
          if (this.fieldArr[itm] !== 'X' && this.fieldArr[itm] !== '') {
            if (this.fieldArr[itm] === 1) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('green');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 2) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('blue');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 3) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('pink');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 4) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('aqua');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 5) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('yellow');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 6) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('orange');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 7) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('brown');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 8) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('red');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            }
          } else if (this.fieldArr[itm] === '') {
            document.querySelector(`.btn${itm}`).classList.remove('flag');
            this.checkerForChanger(itm, this.fieldArr[itm]);
          }
        });
      } else {
        document.querySelector(`.btn${i}`).classList.add('active');
        const indexForChecker = [i - 1, i + 1, i - this.lengthGame,
          i + this.lengthGame, i - this.lengthGame - 1, i - this.lengthGame + 1,
          i + this.lengthGame + 1, i + this.lengthGame - 1];
        indexForChecker.forEach((itm) => {
          if (this.fieldArr[itm] !== 'X' && this.fieldArr[itm] !== '') {
            if (this.fieldArr[itm] === 1) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('green');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 2) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('blue');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 3) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('pink');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 4) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('aqua');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 5) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('yellow');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 6) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('orange');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 7) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('brown');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            } else if (this.fieldArr[itm] === 8) {
              document.querySelector(`.btn${itm}`).textContent = this.fieldArr[itm];
              document.querySelector(`.btn${itm}`).classList.add('active');
              document.querySelector(`.btn${itm}`).classList.add('red');
              document.querySelector(`.btn${itm}`).classList.remove('flag');
            }
          } else if (this.fieldArr[itm] === '') {
            document.querySelector(`.btn${itm}`).classList.remove('flag');
            this.checkerForChanger(itm, this.fieldArr[itm]);
          }
        });
      }
    }
  }

  mineFieldChanger() {
    const field = document.querySelector('.game-field');
    field.addEventListener('click', (event) => {
      if (event.target === event.currentTarget || event.ctrlKey) {
        /* empty */
      } else if (this.fieldArr[event.target.classList.value.slice(3)] === '') {
        event.target.classList.remove('flag');
        this.checkerForChanger(
          Number(event.target.classList.value.slice(3)),
          this.fieldArr[event.target.classList.value.slice(3)],
        );
      } else if (this.fieldArr[event.target.classList.value.slice(3)] === 'X') {
        this.fieldArr.forEach((item, index) => {
          if (item === 'X') {
            field.children[index].classList.add('bomb');
            field.children[index].classList.add('red');
          }
        });
        this.gameOver();
      } else {
        // eslint-disable-next-line no-lonely-if
        if (this.fieldArr[event.target.classList.value.slice(3)] === 1) {
          event.target.textContent = this.fieldArr[event.target.classList.value.slice(3)];
          event.target.classList.add('active');
          event.target.classList.add('green');
        } else if (this.fieldArr[event.target.classList.value.slice(3)] === 2) {
          event.target.textContent = this.fieldArr[event.target.classList.value.slice(3)];
          event.target.classList.add('active');
          event.target.classList.add('blue');
        } else if (this.fieldArr[event.target.classList.value.slice(3)] === 3) {
          event.target.textContent = this.fieldArr[event.target.classList.value.slice(3)];
          event.target.classList.add('active');
          event.target.classList.add('pink');
        } else if (this.fieldArr[event.target.classList.value.slice(3)] === 4) {
          event.target.textContent = this.fieldArr[event.target.classList.value.slice(3)];
          event.target.classList.add('active');
          event.target.classList.add('aqua');
        } else if (this.fieldArr[event.target.classList.value.slice(3)] === 5) {
          event.target.textContent = this.fieldArr[event.target.classList.value.slice(3)];
          event.target.classList.add('active');
          event.target.classList.add('yellow');
        } else if (this.fieldArr[event.target.classList.value.slice(3)] === 6) {
          event.target.textContent = this.fieldArr[event.target.classList.value.slice(3)];
          event.target.classList.add('active');
          event.target.classList.add('orange');
        } else if (this.fieldArr[event.target.classList.value.slice(3)] === 7) {
          event.target.textContent = this.fieldArr[event.target.classList.value.slice(3)];
          event.target.classList.add('active');
          event.target.classList.add('brown');
        } else if (this.fieldArr[event.target.classList.value.slice(3)] === 8) {
          event.target.textContent = this.fieldArr[event.target.classList.value.slice(3)];
          event.target.classList.add('active');
          event.target.classList.add('red');
        }
      }
    });
  }

  gameOver() {
    this.game = false;
    const field = document.querySelector('.game-field');
    const divGameOver = document.querySelector('.gameover');
    const textTimer = document.querySelector('.text-timer');
    const textClicks = document.querySelector('.text-clicks');
    const headerH1 = document.querySelector('.header-h1');
    const clicks = document.querySelector('.clicks-h1');
    const musicLose = document.querySelector('#soundLose');
    const formMusic = document.querySelector('.form-music');
    if (formMusic.firstChild.children[0].checked) {
      musicLose.play();
    }
    textTimer.textContent = headerH1.textContent;
    textClicks.textContent = clicks.textContent;
    const bombsLeft = document.querySelector('.bombs-left');
    const usedFlags = document.querySelector('.used-flags');
    usedFlags.innerHTML = 0;
    bombsLeft.innerHTML = this.bomb;
    divGameOver.classList.add('active');
    const btn = document.querySelector('.btn-gameover');
    btn.addEventListener('click', () => {
      divGameOver.classList.remove('active');
      this.randomAddBomb();
      this.addOneInOneField();
      this.store = true;
      this.game = true;
      field.innerHTML = '';
      headerH1.innerHTML = 0;
      clicks.innerHTML = 0;
      this.init();
      if (this.lengthGame === 10) {
        field.style.gridTemplateColumns = `repeat(${this.lengthGame}, 1fr)`;
        field.style.gridTemplateRows = `repeat(${this.lengthGame}, 1fr)`;
        for (let i = 0; i < this.lengthGame * this.lengthGame; i += 1) {
          field.children[i].style.width = '50px';
          field.children[i].style.height = '50px';
        }
      } else if (this.lengthGame === 20) {
        field.style.gridTemplateColumns = `repeat(${this.lengthGame}, 1fr)`;
        field.style.gridTemplateRows = `repeat(${this.lengthGame}, 1fr)`;
        for (let i = 0; i < this.lengthGame * this.lengthGame; i += 1) {
          field.children[i].style.width = '19px';
          field.children[i].style.height = '19px';
        }
      } else if (this.lengthGame === 25) {
        field.style.gridTemplateColumns = `repeat(${this.lengthGame}, 1fr)`;
        field.style.gridTemplateRows = `repeat(${this.lengthGame}, 1fr)`;
        for (let i = 0; i < this.lengthGame * this.lengthGame; i += 1) {
          field.children[i].style.width = '16px';
          field.children[i].style.height = '16px';
        }
      }
    });
  }

  addFlag() {
    const field = document.querySelector('.game-field');
    const usedFlags = document.querySelector('.used-flags');
    const bombsLeft = document.querySelector('.bombs-left');
    field.addEventListener('click', (event) => {
      if (event.ctrlKey && event.target !== event.currentTarget) {
        if (event.target.classList.contains('flag')) {
          event.target.classList.toggle('flag');
          usedFlags.innerHTML = Number(usedFlags.innerHTML) - 1;
          bombsLeft.innerHTML = Number(bombsLeft.innerHTML) + 1;
        } else {
          event.target.classList.toggle('flag');
          usedFlags.innerHTML = Number(usedFlags.innerHTML) + 1;
          bombsLeft.innerHTML = Number(bombsLeft.innerHTML) - 1;
        }
      }
    })
  }

  newGame() {
    const navList = document.querySelector('.nav-list');
    const field = document.querySelector('.game-field');
    const headerH1 = document.querySelector('.header-h1');
    const newGame = document.querySelector('.new-game');
    const btnYes = document.querySelector('.btn-new-game-yes');
    const btnNo = document.querySelector('.btn-new-game-no');
    navList.addEventListener('click', (event) => {
      if (event.target === navList.children[0].children[0]) {
        newGame.classList.add('active');
        btnNo.addEventListener('click', () => {
          newGame.classList.remove('active');
        });
        btnYes.addEventListener('click', () => {
          this.game = false;
          newGame.innerHTML = '';
          newGame.append(gameSet);
          const startGame = document.querySelector('.btn-start-game');
          const selectorField = document.querySelector('.selector-field');
          const inputMines = document.querySelector('#input-mines');
          const clicks = document.querySelector('.clicks-h1');
          startGame.addEventListener('click', () => {
            if (inputMines.value < 10 || inputMines.value > 99) {
              /* empty */
            } else {
              newGame.classList.remove('active');
              newGame.innerHTML = '';
              newGame.appendChild(gameContent);
              field.innerHTML = '';
              this.bomb = Number(inputMines.value);
              this.lengthGame = Number(selectorField.value.slice(3));
              this.init();
              if (this.lengthGame === 10) {
                field.style.gridTemplateColumns = `repeat(${this.lengthGame}, 1fr)`;
                field.style.gridTemplateRows = `repeat(${this.lengthGame}, 1fr)`;
                for (let i = 0; i < this.lengthGame * this.lengthGame; i += 1) {
                  field.children[i].style.width = '50px';
                  field.children[i].style.height = '50px';
                }
              } else if (this.lengthGame === 20) {
                field.style.gridTemplateColumns = `repeat(${this.lengthGame}, 1fr)`;
                field.style.gridTemplateRows = `repeat(${this.lengthGame}, 1fr)`;
                for (let i = 0; i < this.lengthGame * this.lengthGame; i += 1) {
                  field.children[i].style.width = '20px';
                  field.children[i].style.height = '20px';
                }
              } else if (this.lengthGame === 25) {
                field.style.gridTemplateColumns = `repeat(${this.lengthGame}, 1fr)`;
                field.style.gridTemplateRows = `repeat(${this.lengthGame}, 1fr)`;
                for (let i = 0; i < this.lengthGame * this.lengthGame; i += 1) {
                  field.children[i].style.width = '17px';
                  field.children[i].style.height = '17px';
                }
              }
              const bombsLeft = document.querySelector('.bombs-left');
              const usedFlags = document.querySelector('.used-flags');
              usedFlags.innerHTML = 0;
              bombsLeft.innerHTML = this.bomb;
              this.randomAddBomb();
              this.addOneInOneField();
              this.game = true;
              this.store = true;
              headerH1.innerHTML = 0;
              clicks.innerHTML = 0;
            }
          });
        });
      } else if (event.target === navList.children[1].children[0]) {
        const gameScores = document.querySelector('.game-scores');
        const scores = document.querySelector('.scores');
        scores.innerHTML = '';
        const tr = document.createElement('tr');
        const headTable = ['Number', 'Time', 'Clicks'];
        headTable.forEach((item) => {
          const td = document.createElement('td');
          td.textContent = item;
          tr.appendChild(td);
        });
        scores.appendChild(tr);
        const btnBackGame = document.querySelector('.btn-back-game');
        gameScores.classList.add('active');
        const scoresGame = JSON.parse(localStorage.getItem('Scores'));
        if (localStorage.getItem('Scores') !== null) {
          scoresGame.forEach((item, index) => {
            const newTr = document.createElement('tr');
            const tdNumber = document.createElement('td');
            const tdTIme = document.createElement('td');
            const tdClicks = document.createElement('td');
            tdNumber.textContent = index + 1;
            tdTIme.textContent = item[1];
            tdClicks.textContent = item[0];
            newTr.appendChild(tdNumber);
            newTr.appendChild(tdTIme);
            newTr.appendChild(tdClicks);
            scores.appendChild(newTr);
          });
        }
        btnBackGame.addEventListener('click', () => {
          gameScores.classList.remove('active');
        });
      }
    });
  }

  gameWinner() {
    this.game = false;
    const field = document.querySelector('.game-field');
    const gameWin = document.querySelector('.section-game-win');
    const winBtn = document.querySelector('.btn-game-win');
    const timer = document.querySelector('.time-win');
    const clicks = document.querySelector('.clicks-win');
    const headerH1 = document.querySelector('.header-h1');
    const clicksH1 = document.querySelector('.clicks-h1');
    const musicWin = document.querySelector('#soundWin');
    const formMusic = document.querySelector('.form-music');
    if (this.gameScores.length < 10) {
      this.gameScores.push([clicks.textContent, timer.textContent]);
      localStorage.setItem('Scores', JSON.stringify(this.gameScores));
    } else if (this.gameScores.length === 10) {
      this.gameScores = this.gameScores.slice(1);
      this.gameScores.push([clicks.textContent, timer.textContent]);
      localStorage.setItem('Scores', JSON.stringify(this.gameScores));
    }
    if (formMusic.firstChild.children[0].checked) {
      musicWin.play();
    }
    clicks.textContent = clicksH1.textContent;
    timer.textContent = headerH1.textContent;
    const bombsLeft = document.querySelector('.bombs-left');
    const usedFlags = document.querySelector('.used-flags');
    usedFlags.innerHTML = 0;
    bombsLeft.innerHTML = this.bomb;
    gameWin.classList.add('active');
    winBtn.addEventListener('click', () => {
      gameWin.classList.remove('active');
      field.innerHTML = '';
      this.init();
      this.randomAddBomb();
      this.addOneInOneField();
      this.store = true;
      this.game = true;
      headerH1.innerHTML = 0;
      clicksH1.innerHTML = 0;
      this.flag = true;
    });
  }
}
