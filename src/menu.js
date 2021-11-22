import data from './menu.json';
import { makeDomElement } from './template';
const coffee = data.coffee;
const food = data.pastries;

function displayMenu() {
    let menuDiv = makeDomElement('div', 'menuList', '');
    let drinkDiv = makeDomElement('div', 'drinks', '');
    drinkDiv.appendChild(makeDomElement('h2', 'drinkList', 'Drinks'));
    for (let drink of coffee) {
        let container = makeDomElement('div', 'drink', '');
        container.appendChild(makeDomElement('p', 'drinkName', drink.name));
        container.appendChild(makeDomElement('p', 'drinkPrice', drink.price));
        drinkDiv.appendChild(container); 
    }
    menuDiv.appendChild(drinkDiv)
    let foodDiv = makeDomElement('div', 'foods', '');
    foodDiv.appendChild(makeDomElement('h2', 'foodList', 'Pastries'));
    for (let item of food) {
        let container = makeDomElement('div', 'food', '');
        container.appendChild(makeDomElement('p', 'foodName', item.name));
        container.appendChild(makeDomElement('p', 'foodPrice', item.price));
        foodDiv.appendChild(container);
    }
    menuDiv.appendChild(foodDiv);

    return menuDiv
}

export default displayMenu;