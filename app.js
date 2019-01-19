class RmRouter {
    constructor() {
        window.addEventListener("hashchange", e => this.onRouteChange(e));
        this.section = document.querySelector('#section');
    }

    onRouteChange(e) {
        const hashLocation = window.location.hash.substring(1);
        console.log("hasLocation=" + hashLocation);
        this.loadContent(hashLocation);
    }


    loadContent(uri) {
        if (uri == "main") {
            const contentUri = '/src/comp/main/main.html';
            fetch(contentUri).
            then(r => r.text()).
            then(newContent => this.updateSection(newContent));
        } else if (uri == "driverdetail") {
            var newContent = "<driver-detail name='Hakkinen' age='42'></driver-detail>";
            this.updateSection(newContent);
        }
    }

    updateSection(newContent) {
        console.log("updateSection");
        console.log("innerHtml=" + this.section.innerHTML);
        console.log("newContent=" + newContent);
        this.section.innerHTML = newContent;
    }
}

new RmRouter();