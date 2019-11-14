"use strict";

class HinzufuegenPage {

    constructor(app){
        this.app = app;
    }

    async onShow() {
        let hinzuPage = await this._importStartPageHtml();

        hinzuPage.querySelector('.klickMich').addEventListener('click', () => {
            console.log("KLICKMICH!!")
        });

        hinzuPage.querySelector('#modell').addEventListener('change', function() {
            var modellMenu = document.querySelector('#modell');
            var modellIndex = modellMenu.selectedIndex;
            var modellText = modellMenu.options[modellIndex].text
            var  baureihe = document.querySelector('#baureihe');
            console.log("Modell Changed!!" +" Modellindex: " +modellIndex + " ModellText: " +modellText);
            switch (modellText) {
              case "911":
                  console.log("911 ausgewählt")
                break;

              case "718":
                  console.log("718 ausgewählt")
                break;

              case "Cayenne":
                  console.log("Cayenne ausgewählt")
                break;

               case "Macan":
                  console.log("Macan ausgewählt")
                break;

              case "Panamera":
                  console.log("Panamera ausgewählt")
                break;
            }
        });

        return this._createContentObject(hinzuPage);
    }

    async _importStartPageHtml() {
        const template = await import('./hinzufuegen.html');
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
        return "hinzufügen";
    }


}

export default HinzufuegenPage;
