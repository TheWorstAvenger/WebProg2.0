"use strict";

import stylesheet from "./app.css";

import Navigo from "navigo/lib/navigo.js";
import Overview from "./overview/overview.js";
import Detail from "./detail/detail.js";
import Hinzufuegen from "./hinzufuegen/hinzufuegen.js";
import Garage from "./garage/garage.js"

    /**
     * Hauptklasse der Anwendung. Kümmert sich darum, die Anwendung auszuführen
     * und die angeforderten Bildschirmseiten anzuzeigen.
     */
    class App {
        /**
         * Konstruktor.
         */
        constructor() {
            this._title = "Porsche Garage";
            this._currentView = null;
            this.initRouter();
          }

        initRouter(){
        console.log("init Router");
        this._router = new Navigo('http://localhost:1234/', false);
        this._currentUrl = "";

        this._router.on({
            "Auto_hinzufuegen":   () =>{this.showHinzufuegen();},
            "Garage_anzeigen":    () => {this.showGarage();},
            "overview":            () => {this.showOverview();},
            "*":                    () => {this.showOverview();},
        });
        }

        /**
         * Ab hier beginnt die Anwendung zu laufen.
         */
        start() {
            console.log("Die Klasse App sagt Hallo!");
            this._router.resolve();
        }

      showOverview() {
          let view = new Overview(this);
          this._switchVisibleView(view);
      }

      showDetail(id, mode){
          let view = new Detail(this, id, mode);
          this._switchVisibleView(view);
      }

      showHinzufuegen(){
        let view = new Hinzufuegen(this);
        this._switchVisibleView(view);
      }

      showGarage(){
        let view = new Garage(this);
        this._switchVisibleView(view);
      }

      async _switchVisibleView(view) {
          // Alles klar, aktuelle View nun wechseln
          document.title = `${this._title} – ${view.title}`;

          this._currentView = view;
          console.log()
          var content =  await view.onShow();
          this._switchVisibleContent(content);
          return true;
      }

      _switchVisibleContent(content) {
          // <header> und <main> des HTML-Grundgerüsts ermitteln
          let app = document.querySelector("#app");
          let header = document.querySelector("#app > header");
          let main = document.querySelector("#app > main");

          // Zuvor angezeigte Inhalte entfernen
          // Bei der Topbar nur die untere Zeile, im Hauptbereich alles!
          app.className = "";
          // header.querySelectorAll(".bottom").forEach(e => e.parentNode.removeChild(e));
          main.innerHTML = "";

          // CSS-Klasse übernehmen, um die viewspezifischen CSS-Regeln zu aktivieren
          if (content && content.className) {
              app.className = content.className;
          }

          // Neue Inhalte des Hauptbereichs einfügen
          if (content && content.main) {
              content.main.forEach(element => {
                  main.appendChild(element);
              });
          }
          this._router.updatePageLinks();
      }

      }

      export default App;
