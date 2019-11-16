"use strict";

class HinzufuegenPage {

    constructor(app){
        this.app = app;
    }

    idCouner(){
      idCounter=-1;
      idCounter++;
      return idCounter;
    }

    async onShow() {
        let hinzuPage = await this._importStartPageHtml();

        var idCounter911 = 0;
        var idCounter718 = 0;
        var idCounterCayenne = 0;
        var idCounterMacan = 0;
        var idCounterPanamera = 0;


        hinzuPage.querySelector('.klickMich').addEventListener('click', () => {
            console.log("KLICKMICH!!");
            var modellMenu = document.getElementById('modell');
            var modellIndex = modellMenu.selectedIndex;
            var modellText = modellMenu.options[modellIndex].text

            var baureiheMenu = document.getElementById('baureihe');
            var baureiheText = baureiheMenu.options[baureiheMenu.selectedIndex].text;

            var varianteMenu = document.getElementById('variante');
            var varianteText = varianteMenu.options[varianteMenu.selectedIndex].text;

            if(modellText != "-----"){
              var newCar = {
                'id': 0,
                'modell': modellText,
                'baureihe': baureiheText,
                'varante': varianteText,
                'karosserieform': $('input[name="karosserieform"]:checked').index()/2,
                'leistung': document.getElementById('ps').value,
                'nm': document.getElementById('nm').value,
                'hubraum': document.getElementById('hr').value,
                'beschreibung': document.getElementById('beschreibung').value
              };

              switch (modellText) {
                case "911":
                  newCar.id = "911-"+idCounter911++;
                  break;

                case "718":
                  newCar.id = "718-"+idCounter718++;
                  break;

                case "Cayenne":
                  newCar.id = "Cayenne-"+idCounterCayenne++;
                  break;

                 case "Macan":
                  newCar.id = "Macan-"+idCounterMacan++;
                  break;

                case "Panamera":
                  newCar.id = "Panamera-"+idCounterPanamera++;
                  break;
                }

              console.log(newCar);

              var key= newCar.id;
              var data = JSON.stringify(newCar);
              window.localStorage.setItem(key, data);
            }
        });

        hinzuPage.querySelector('#modell').addEventListener('change', function(event) {
            var modellMenu = document.getElementById('modell');
            var modellIndex = modellMenu.selectedIndex;
            var modellText = modellMenu.options[modellIndex].text // geht auch mit event.target.value;

            var baureiheMenu = document.getElementById('baureihe');
            var varianteMenu = document.getElementById('variante');

            var baureiheOptionArray;
            var varianteOptionArray;

            console.log("Modell Changed!!" +" Modellindex: " +modellIndex + " ModellText: " +modellText);

            switch (modellText) {
              case "911":
                  console.log("911 ausgewählt")
                  baureiheOptionArray = ["-----", "G-Modell","964",  "993",  "996",  "997",  "991",  "992"];
                  varianteOptionArray =["-----", "Carrera", "Carrera S", "Carrera 4", "Carrera 4S", "Carrera GTS", "Turbo", "Turbo S", "GT3", "GT3 RS", "GT2 RS"];
                break;

              case "718":
                  console.log("718 ausgewählt")
                  baureiheOptionArray = ["-----", "982"];
                  varianteOptionArray =["-----", "Cayman","Cayman S",  "Cayman T",  "Cayman GTS"];
                  break;

              case "Cayenne":
                  console.log("Cayenne ausgewählt")
                  baureiheOptionArray = ["-----", "9PA", "92A",  "PO536",  "Coupe"];
                  varianteOptionArray =["-----", "Diesel", "S", "GTS", "Turbo", "Turbo S", "S-Hybrid", "S E-Hybrid","Turbo S E-Hybrid",];
                break;

               case "Macan":
                  console.log("Macan ausgewählt")
                  baureiheOptionArray = ["-----", "Macan"];
                  varianteOptionArray =["-----", "S", "GTS", "Turbo", "S Diesel",];
                break;

              case "Panamera":
                  console.log("Panamera ausgewählt")
                   baureiheOptionArray = ["-----", "970", "971"];
                   varianteOptionArray =["-----", "4", "S", "4 S", "GTS", "S-Hybrid", "Turbo", "Turbo S", "Diesel", "S E-Hybrid","4 S Executive", "Turbo Executive", "Turbo S Executive"];
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
