"use strict";

class StartPage {

    constructor(app){
        this.app = app;
    }

    async onShow() {
        let startPage = await this._importStartPageHtml();

      

        return this._createContentObject(startPage);
    }

    async _importStartPageHtml() {
        const template = await import('./start.html');
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
        return "Startseite";
    }
}

export default StartPage;
