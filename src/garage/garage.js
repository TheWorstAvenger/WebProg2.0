"use strict";

import "./garage.css";

class GaragePage {

    constructor(app){
        this.app = app;
    }

    async onShow() {
        let garagePage = await this._importStartPageHtml();

        let carCount = localStorage.length;
        console.log(carCount);
        let carCount911 = JSON.parse(localStorage.getItem("911")).length;
        console.log("911: "+carCount911);

        var tbody = document.querySelector("#autoliste ul");
        var temp = document.querySelector("#neuesAuto");

        if('content' in document.createElement('template')&&tbody&&temp){
          tbody.innerHTML="";

          tr = document.importNode(temp.content, true);
          tbody.appendChild(tr);
        }




        garagePage.querySelector('.localstorageloeschen').addEventListener('click', () => {
          console.log("ALLES LÖSCHEN!!");
          localStorage.clear();
        });



        return this._createContentObject(garagePage);
    }

    async _importStartPageHtml() {
        const template = await import('./garage.html');
        let container = document.createElement('div');
        container.innerHTML = template.trim();
        return container;
    }

    _createContentObject(html) {
      let content = {
          className: "overview",
          main: html.querySelectorAll('div > *')
      };
      return content;
  }

    get title() {
        return "Garage";
    }
}

export default GaragePage;
