import './resources.scss';

const newGame = document.createElement('section');
const gameContent = document.createElement('div');
const textNewGame = document.createElement('h1');
const btnNewGameYes = document.createElement('button');
const btnNewGameNo = document.createElement('button');

gameContent.classList.add('game-content');
btnNewGameYes.classList.add('btn-new-game-yes');
btnNewGameNo.classList.add('btn-new-game-no');
btnNewGameYes.textContent = 'Yes';
btnNewGameNo.textContent = 'No';
newGame.classList.add('new-game');
textNewGame.textContent = 'Do you want to start a new game?';

gameContent.appendChild(textNewGame);
gameContent.appendChild(btnNewGameYes);
gameContent.appendChild(btnNewGameNo);
newGame.appendChild(gameContent);

export { newGame, gameContent };
