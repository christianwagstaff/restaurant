class Footer {
    constructor() {

    }

    createFooter(logo, links, copyright) {
        let footer = document.createElement('footer');
        footer.appendChild(logo);
        let linkDiv = document.createElement('ul')
        linkDiv.classList.add('footerLinks');
        for (let link of links) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', link[1]);
            a.textContent = link[0];
            li.appendChild(a);
            linkDiv.appendChild(li);
        }
        footer.appendChild(linkDiv);
        let cr = document.createElement('p');
        cr.textContent = copyright
        cr.setAttribute('class','copyright');
        footer.appendChild(cr);
        return footer
    }
}

export default Footer;