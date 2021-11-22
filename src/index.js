import Header from './header.js';
import AboutUs from './about.js';
import Footer from './footer.js';
import displayMenu from './menu.js';
import displayHomepage from './homepage.js';

//cache
const content = document.getElementById('content');

//add EventListeners

const main = document.createElement('div');
const header = new Header('Trial by Coffee', ['Home', 'Menu', 'About Us']);
const aboutUs = new AboutUs('Trial by Coffee', '123 Somewhere St, Los Angeles CA 32004', '(901)789-2345', 'trialbycoffee@gmail.com');

main.classList.add('mainSection');
main.appendChild(displayHomepage());

let footer = new Footer();
let footerLinks = [['Our Partners', '#'], ['Contact Us', '#'], ['About Us', '#']]
let footerContent = footer.createFooter(header.createLogo(header.title), footerLinks, 'Made by Christian Wagstaff 2021');

content.appendChild(header.createHeader());
// start with the homepage
content.appendChild(main);
content.appendChild(footerContent);

//cache dynamic content
let aboutUsBtn = document.getElementById('aboutusPage');
let menuBtn = document.getElementById('menuPage');
let homeBtn = document.getElementById('homePage');

//add EventListeners
aboutUsBtn.addEventListener('click', changeToAboutUs);
menuBtn.addEventListener('click', changeToMenu)
homeBtn.addEventListener('click', changeToHome)

function changeToAboutUs() {
    clearMain();
    main.appendChild(aboutUs.makePage());
}

function clearMain() {
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
}

function changeToMenu() {
    clearMain();
    main.appendChild(displayMenu());
}

function changeToHome() {
    clearMain();
    main.appendChild(displayHomepage());
}