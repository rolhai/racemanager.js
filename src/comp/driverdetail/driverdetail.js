class DriverDetail extends HTMLElement {

    connectedCallback() {
        const currentDocument = document.currentScript.ownerDocument;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = currentDocument.querySelector('#driver-detail-template');
        const instance = template.content.cloneNode(true);
        shadowRoot.appendChild(instance);

        const driverName = this.getAttribute('name');
        const driverAge = this.getAttribute('age');

        this.render(driverName, driverAge);
    }

    render(driverName, driverAge) {
        // Fill the respective areas of the card using DOM manipulation APIs
        // All of our components elements reside under shadow dom. So we created a this.shadowRoot property
        // We use this property to call selectors so that the DOM is searched only under this subtree
        this.shadowRoot.querySelector('.driver__detail-title').innerHTML = driverName;
        this.shadowRoot.querySelector('.driver__detail-age').innerHTML = driverAge;
    }
}
customElements.define('driver-detail', DriverDetail);