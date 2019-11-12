"use strict";

import App from "./app.js";
import stylesheet from "./index.css";
import "babel-core/register";
import "babel-polyfill";

    // Erst loslaufen, wenn das Document Object Modul bereit ist
    window.addEventListener("load", () => {
        // Anwendung starten
        let app = new App();
        app.start();
    });
