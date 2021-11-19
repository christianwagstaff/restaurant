class Header {
    constructor(title, tabs) {
        this.title = title;
        this.tabs = tabs;
    }

    createTabs() {
        let nav = document.createElement('nav');
        let tabDiv = document.createElement('ul');
        let tabArray = this.tabs;
        for (let tab of tabArray) {
            let a = document.createElement('li');
            a.textContent = tab;
            a.id = `${tab.toLowerCase().replace(' ', '')}Page`;
            tabDiv.appendChild(a);
        }
        nav.appendChild(tabDiv);
        return nav;
    }

    createLogo(name) {
        let container = document.createElement('div');
        container.textContent = name;
        container.classList.add('logo')
        return container;
    }

    createHeader() {
        let headerDiv = document.createElement('header');
        headerDiv.classList.add('header');
        headerDiv.appendChild(this.createLogo(this.title));
        headerDiv.appendChild(this.createTabs());

        return headerDiv;
    }

}

export default Header;