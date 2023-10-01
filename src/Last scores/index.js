import './resources.scss';

const gameScores = document.createElement('section');
const gameScoresDiv = document.createElement('div');
const scores = document.createElement('table');
const gameTextScores = document.createElement('h1');
const btnBackGame = document.createElement('button');

scores.classList.add('scores');
gameScores.classList.add('game-scores');
gameScoresDiv.classList.add('game-scores-div');
gameTextScores.classList.add('game-text-scores');
gameTextScores.textContent = 'Last 10 games results:';

btnBackGame.classList.add('btn-back-game');
btnBackGame.textContent = 'Back to game';

gameScoresDiv.appendChild(gameTextScores);
gameScoresDiv.appendChild(scores);
gameScoresDiv.appendChild(btnBackGame);
gameScores.appendChild(gameScoresDiv);

export default gameScores;
