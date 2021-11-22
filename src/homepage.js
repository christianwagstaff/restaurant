import { makeCardWithImg, makeDomElement } from "./template";
import data from "./homepage.json";
import historyImg from './imgs/latte-notebook.jpg';
import holidayImg from './imgs/coffee-stump.jpg';
import bookImg from './imgs/latte-book.jpg';

let historyCard = makeCardWithImg(historyImg, 'Our Story', data.history, 'homepageCard');
let holiday = makeCardWithImg(holidayImg, "Trial's Holiday Blend", data.holidayBlend, 'homepageCard');
let employee = makeCardWithImg(bookImg, 'Giving Back to Our Baristas', data.book, 'homepageCard');

function displayHomepage() {
    let content = makeDomElement('div', 'homepage', '');
    content.appendChild(holiday)
    content.appendChild(historyCard)
    content.appendChild(employee)
    return content;
}

export default displayHomepage;