const divGameOver = document.createElement('section');
divGameOver.classList.add('gameover');
const textGameOver = document.createElement('h1');
const textTimer = document.createElement('h2');
const textClicks = document.createElement('h2');
textTimer.classList.add('text-timer');
textClicks.classList.add('text-clicks');
textGameOver.textContent = 'Game Over';
const btn = document.createElement('button');
btn.textContent = 'New game';
btn.classList.add('btn-gameover');
divGameOver.append(textTimer);
divGameOver.append(textClicks);
divGameOver.append(textGameOver);
divGameOver.append(btn);

export default divGameOver;
