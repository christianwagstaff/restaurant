import Header from './header.js';

const content = document.getElementById('content');
const header = new Header('Trial by Coffee', ['Home', 'Menu', 'About Us']);

content.appendChild(header.createHeader());