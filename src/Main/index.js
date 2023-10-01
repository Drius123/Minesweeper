import './resources.scss';

const radioArr = ['Music on ', 'Music off '];
const main = document.createElement('main');
const container = document.createElement('div');
const section = document.createElement('section');
const gameField = document.createElement('div');
const gameRule = document.createElement('div');
const gameRuleH1 = document.createElement('h1');
const usedFlags = document.createElement('h2');
const bombsLeft = document.createElement('h2');
const form = document.createElement('form');
const btnToChangeColor = document.createElement('button');

btnToChangeColor.classList.add('btn-change-color');
btnToChangeColor.textContent = 'Click to Change Light/Dark theme';
gameField.classList.add('game-field');
form.classList.add('form-music');
for (let i = 0; i < 2; i += 1) {
  const inputRadio = document.createElement('input');
  const label = document.createElement('p');
  inputRadio.type = 'radio';
  inputRadio.name = 'music';
  if (i === 0) {
    inputRadio.setAttribute('checked', true);
  }
  inputRadio.value = radioArr[i];
  label.textContent = radioArr[i];
  label.appendChild(inputRadio);
  form.appendChild(label);
}

gameRule.classList.add('game-rule');
gameRuleH1.classList.add('game-rule-set-flags');
usedFlags.classList.add('used-flags');
usedFlags.innerHTML = 0;
bombsLeft.classList.add('bombs-left');
bombsLeft.innerHTML = 10;
gameRuleH1.textContent = 'For set the flag press ctrl + left click';
gameRule.appendChild(form);
gameRule.appendChild(btnToChangeColor);
gameRule.appendChild(gameRuleH1);
gameRule.appendChild(usedFlags);
gameRule.appendChild(bombsLeft);

section.classList.add('minesweeper-game');
section.appendChild(gameRule);
section.appendChild(gameField);

container.classList.add('container');
container.appendChild(section);

main.classList.add('main');
main.appendChild(container);

export default main;
