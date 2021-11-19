import Header from './header.js';
import './style.css';

const content = document.getElementById('content');
const header = new Header('Trials by Coffee', ['Home', 'Menu', 'About Us']);

content.appendChild(header.createHeader());