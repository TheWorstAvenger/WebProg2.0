"use strict";

import stylesheet from "./garage.css";
import garage from "./garage.html";

class Garage {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = garage.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#garage").cloneNode(true);
        let content = {
            className: "garage",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Garage";
    }


}

export default Garage;
