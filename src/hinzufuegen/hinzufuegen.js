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

        hinzuPage.querySelector('#modell').addEventListener('change', function(event) {
            var modellMenu = document.querySelector('#modell');
            var modellIndex = modellMenu.selectedIndex;
            var modellText = modellMenu.options[modellIndex].text // geht auch mit event.target.value;

            var baureiheMenu = document.querySelector('#baureihe');
            var varianteMenu = document.querySelector('#variante');

            var baureiheOptionArray;
            var varianteOptionArray;

            console.log("Modell Changed!!" +" Modellindex: " +modellIndex + " ModellText: " +modellText);

            switch (modellText) {
              case "911":
                  console.log("911 ausgewählt")
                  baureiheOptionArray = ["-----", "911","Baureihe1",  "Baureihe3",  "Baureihe3"];
                  varianteOptionArray =["-----", "variante1", "variante2", "variante3"];
                break;

              case "718":
                  console.log("718 ausgewählt")
                  baureiheOptionArray = ["-----", "718","Baureihe1",  "Baureihe3",  "Baureihe3"];
                  varianteOptionArray =["-----", "variante1", "variante2", "variante3"];
                  break;

              case "Cayenne":
                  console.log("Cayenne ausgewählt")
                  baureiheOptionArray = ["-----", "Cayenne", "Baureihe1",  "Baureihe3",  "Baureihe3"];
                  varianteOptionArray =["-----", "variante1", "variante2", "variante3"];
                break;

               case "Macan":
                  console.log("Macan ausgewählt")
                  baureiheOptionArray = ["-----", "Macan", "Baureihe1",  "Baureihe3",  "Baureihe3"];
                  varianteOptionArray =["-----", "variante1", "variante2", "variante3"];
                break;

              case "Panamera":
                  console.log("Panamera ausgewählt")
                   baureiheOptionArray = ["-----", "Panamera", "Baureihe1",  "Baureihe3",  "Baureihe3"];
                   varianteOptionArray =["-----", "variante1", "variante2", "variante3"];
                break;

              default:
              console.log("---- ausgewählt")
              baureiheOptionArray = ["-----"];
              varianteOptionArray = ["-----"];
            }

            baureiheMenu.innerHTML="";
            for(var baureihe in baureiheOptionArray){
              var newOption = document.createElement("option");
              newOption.innerHTML = baureiheOptionArray[baureihe];
              baureiheMenu.options.add(newOption);
            }

            varianteMenu.innerHTML="";
            for(var variante in varianteOptionArray){
              var newOption = document.createElement("option");
              newOption.innerHTML = varianteOptionArray[variante];
              varianteMenu.options.add(newOption);
            }
        });



        return this._createContentObject(hinzuPage);
    }

    populate(modellMenu, baureiheMenu){
      var modellMenu = document.querySelector('#modell');
      var baureiheMenu = document.querySelector('#baureihe');

      baureiheMenu.innerHTML="";
        if(modellMenu="911"){

        }

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
