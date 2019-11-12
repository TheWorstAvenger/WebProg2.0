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
        container.innerHTML = hinzufuegen.trim();

        // Anzuzeigende HTML-Elemente ermitteln
        let section = container.querySelector("#hinzufuegen").cloneNode(true);
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

    dropmenu() {
        var m = document.getElementById('modell').value;
        var b = document.getElementById('baureihe');
        if (m == '911') {
            b = document.createElement("991");
            b.text = '991';
            b.add('991');
        }
    }
}

export default Hinzufuegen;

let klickMichButton = document.getElementById("klick-mich-button");
    klickMichButton.addEventListener("click", () => {
        console.log("SPEICHERN!!");

});
