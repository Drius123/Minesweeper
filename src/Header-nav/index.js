import './resources.scss';

const menuText = ['New Game', 'Last 10 results'];
const navMenu = document.createElement('div');
const timer = document.createElement('h1');
const clicks = document.createElement('h1');
const headerItems = document.createElement('div');

headerItems.classList.add('header-items');
clicks.classList.add('clicks-h1');
clicks.innerHTML = 0;
navMenu.classList.add('header-nav');
timer.classList.add('header-h1');
timer.innerHTML = 0;
const logo = document.createElement('a');
logo.classList.add('logo');
logo.href = '#!';
logo.textContent = 'Minesweeper';

navMenu.appendChild(logo);
headerItems.appendChild(timer);
headerItems.appendChild(clicks);
navMenu.appendChild(headerItems);

const nav = document.createElement('nav');
nav.classList.add('nav');

const ul = document.createElement('ul');
ul.classList.add('nav-list');

for (let i = 0; i < 2; i += 1) {
  const li = document.createElement('li');
  li.classList.add('nav-item');

  const a = document.createElement('a');
  a.classList.add('nav-link');
  a.href = '#!';
  a.textContent = menuText[i];

  li.appendChild(a);
  ul.appendChild(li);
}

nav.appendChild(ul);
navMenu.appendChild(nav);

export default navMenu;
