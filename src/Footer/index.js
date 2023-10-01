import './resources.scss';

const container = document.createElement('div');
const footer = document.createElement('footer');
const footerContent = document.createElement('div');
const link = document.createElement('a');
const h1 = document.createElement('h1');

container.classList.add('container');

h1.textContent = '2023';

footerContent.classList.add('footer-content');
link.href = 'https://github.com/Drius123';
link.textContent = '©';
footerContent.appendChild(link);
footerContent.appendChild(h1);
footer.classList.add('footer');

container.appendChild(footerContent);
footer.appendChild(container);

export default footer;
