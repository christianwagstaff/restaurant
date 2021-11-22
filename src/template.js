function makeCardWithImg(img, title, content, userClass) {
    let card = document.createElement('div')
    if (userClass !== '') {
        card.classList.add(userClass);
    }
    let cardImg = new Image();
    cardImg.src = img;
    let infocard = document.createElement('div')
    let cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    let cardContent = document.createElement('p');
    cardContent.textContent = content;
    infocard.appendChild(cardTitle);
    infocard.appendChild(cardContent);
    card.appendChild(cardImg);
    card.appendChild(infocard);
    return card;
}

function makeCard(title, content, userClass) {
    let card = document.createElement('div')
    card.classList.add(userClass);
    let cardTitle = document.createElement('h2');
    cardTitle.textContent = title;
    let cardContent = document.createElement('p');
    cardContent.textContent = content;
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
    return card;
}

function makeDomElement(type, userClass, content) {
    let section = document.createElement(type);
    section.classList.add(userClass);
    section.textContent = content;
    return section;
}

export {makeCardWithImg, makeCard, makeDomElement};