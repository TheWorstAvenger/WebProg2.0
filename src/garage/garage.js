"use strict";

class GaragePage {

    constructor(app){
        this.app = app;
    }

    async onShow() {
        let garagePage = await this._importStartPageHtml();

        garagePage.querySelector('.loeschen').addEventListener('click', () => {
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
