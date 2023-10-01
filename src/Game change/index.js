import './resources.scss';

const gameSet = document.createElement('div');
const h2 = document.createElement('h2');
const selectorField = document.createElement('select');
const inputMines = document.createElement('input');
const labeForInputMines = document.createElement('label');
const fieldArr = ['10x10', '20x20', '25x25'];
const btnStartGame = document.createElement('button');

selectorField.classList.add('selector-field');
inputMines.type = 'number';
inputMines.id = 'input-mines';
inputMines.setAttribute('required', true);
inputMines.value = 10;
inputMines.min = 10;
inputMines.max = 99;
labeForInputMines.for = 'input-mines';
labeForInputMines.textContent = 'Enter the number of bombs from 10 to 99: ';
btnStartGame.classList.add('btn-start-game');
btnStartGame.textContent = 'Start Game';
h2.classList.add('h2-set');
h2.textContent = 'Set field settings';
fieldArr.forEach((item) => {
  const option = document.createElement('option');
  option.textContent = item;
  selectorField.appendChild(option);
});
gameSet.classList.add('game-settings');
gameSet.appendChild(h2);
gameSet.appendChild(selectorField);
gameSet.appendChild(labeForInputMines);
gameSet.appendChild(inputMines);
gameSet.appendChild(btnStartGame);

export default gameSet;
