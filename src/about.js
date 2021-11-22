import { makeCard, makeDomElement } from "./template"

class AboutUs {
    constructor(name, address, phone, email) {
        this.name = name,
        this.address = address,
        this.phone = phone,
        this.email = email
    }

    contactUsInfo() {
        let mainSection = document.createElement('div');
        mainSection.appendChild(makeCard('Address', this.address, 'contactUs'));
        mainSection.appendChild(makeCard('Phone Number', this.phone, 'contactUs'));
        mainSection.appendChild(makeCard('Email', this.email, 'contactUs'));
        mainSection.classList.add('contactInfo')
        return mainSection;
    }

    paragraphSection() {
        let defaultInfo = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        let info = makeDomElement('div', 'aboutInfo', defaultInfo)
        return info;
    }

    makePage() {
        let mainSection = document.createElement('div');
        mainSection.classList.add('aboutUs');
        let title = document.createElement('h1');
        title.classList.add('pageTitle');
        title.textContent = 'About Us';
        mainSection.appendChild(title);
        mainSection.appendChild(this.paragraphSection());
        mainSection.appendChild(this.contactUsInfo());
        return mainSection;
    }
}

export default AboutUs;