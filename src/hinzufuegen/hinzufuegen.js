"use strict";
import "./hinzufuegen.css";
class HinzufuegenPage {

    constructor(app){
        this.app = app;
    }

    async onShow() {
        let hinzuPage = await this._importStartPageHtml();

        var data911=JSON.parse(localStorage.getItem("911"));
        var data718=JSON.parse(localStorage.getItem("718"));
        var dataCayenne=JSON.parse(localStorage.getItem("cayenne"));
        var dataMacan=JSON.parse(localStorage.getItem("macan"));
        var dataPanamera=JSON.parse(localStorage.getItem("panamera"));

        if(data911 == null)
          data911=[];
        if(data718 == null)
          data718=[];
        if(dataCayenne == null)
          dataCayenne=[];
        if(dataPanamera == null)
          dataPanamera=[];
        if(dataMacan == null)
          dataMacan=[];


        var idCounter911 = data911.length+1;
        var idCounter718 = data718.length+1;
        var idCounterCayenne = dataCayenne.length+1;
        var idCounterMacan = dataMacan.length+1;
        var idCounterPanamera = dataPanamera.length+1;




        hinzuPage.querySelector('.klickMich').addEventListener('click', () => {
            console.log("KLICKMICH!!");
            var modellMenu = document.getElementById('modell');
            var modellIndex = modellMenu.selectedIndex;
            var modellText = modellMenu.options[modellIndex].text

            var baureiheMenu = document.getElementById('baureihe');
            var baureiheText = baureiheMenu.options[baureiheMenu.selectedIndex].text;

            var varianteMenu = document.getElementById('variante');
            var varianteText = varianteMenu.options[varianteMenu.selectedIndex].text;

            var bj = document.getElementById('bj');

            if(modellText != "-----"){
              var newCar = {
                'id': 1,
                'modell': modellText,
                'baureihe': baureiheText,
                'variante': varianteText,
                'baujahr': bj.value.split("-")[1]+"-"+bj.value.split("-")[0],
                'karosserieform': $('input[name="karosserieform"]:checked').index()/2,
                'leistung': document.getElementById('ps').value,
                'nm': document.getElementById('nm').value,
                'hubraum': document.getElementById('hr').value,
                'beschreibung': document.getElementById('beschreibung').value,
                'isFavorite': false
              };

              switch (modellText) {
                case "911":
                  newCar.id = idCounter911++;
                  data911.push(newCar);
                  break;

                case "718":
                  newCar.id = idCounter718++;
                  data718.push(newCar);
                  break;

                case "Cayenne":
                  newCar.id = idCounterCayenne++;
                  dataCayenne.push(newCar);
                  break;

                 case "Macan":
                  newCar.id = idCounterMacan++;
                  dataMacan.push(newCar);
                  break;

                case "Panamera":
                  newCar.id = idCounterPanamera++;
                  dataPanamera.push(newCar)
                  break;
                }

                switch (newCar.karosserieform) {
                  case 0:
                    newCar.karosserieform = "Coupe";
                    break;
                  case 1:
                    newCar.karosserieform = "Cabrio";
                    break;
                  case 2:
                    newCar.karosserieform = "Targa";
                    break;
                  case 3:
                    newCar.karosserieform = "Limosine";
                    break;
                  default:
                    newCar.karosserieform = "-----";

                }

              console.log(newCar);
              this.launch_toast();

              var key= newCar.id;
              var data = JSON.stringify(newCar);
              if (data911.length > 0)
                window.localStorage.setItem("911", JSON.stringify(data911));
              if (data718.length > 0)
                window.localStorage.setItem("718", JSON.stringify(data718));
              if (dataCayenne.length > 0)
                window.localStorage.setItem("cayenne", JSON.stringify(dataCayenne));
              if (dataMacan.length > 0)
                window.localStorage.setItem("macan", JSON.stringify(dataMacan));
              if (dataPanamera.length > 0)
                window.localStorage.setItem("panamera", JSON.stringify(dataPanamera));
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
    launch_toast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}
}

export default HinzufuegenPage;
