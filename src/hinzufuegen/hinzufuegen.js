"use strict";

import stylesheet from "./hinzufuegen.css";
import hinzufuegen from "./hinzufuegen.html";

class Hinzufuegen {

    constructor(app){
        this.app = app;
    }

    onShow() {
        //create Container from imported HTML
        let container = document.createElement("div");
        container.innerHTML = overview.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#hinzufügen").cloneNode(true);
        let content = {
            className: "hinzufuegen",
            main: section.querySelectorAll("main > *"),
        };

        // Ergebnis zurückliefern
        return content;
    }

    get title() {
        return "Auto hinzufuegen";
    }


}

export default Hinzufuegen;
