import container from '../Container/index';
import navMenu from '../Header-nav';
import './resources.scss';

const header = document.createElement('header');
header.classList.add('header');
container.appendChild(navMenu);
header.appendChild(container);

export default header;
