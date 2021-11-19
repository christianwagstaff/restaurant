class Header {
    constructor(title, tabs) {
        this.title = title;
        this.tabs = tabs;
    }

    createTabs() {
        let tabDiv = document.createElement('ul');
        let tabArray = this.tabs;
        for (let tab of tabArray) {
            let a = document.createElement('li');
            a.textContent = tab;
            a.id = `${tab.toLowerCase().replace(' ', '')}Page`;
            tabDiv.appendChild(a);
        }
        return tabDiv;
    }

    createHeader() {
        let headerDiv = document.createElement('header');
        headerDiv.classList.add('header');
        headerDiv.innerText = this.title;
        headerDiv.appendChild(this.createTabs());

        return headerDiv;
    }

}

export default Header;