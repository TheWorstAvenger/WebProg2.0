"use strict";

import "./garage.css";

class GaragePage {

    constructor(app){
        this.app = app;
    }

    async onShow() {
        let garagePage = await this._importStartPageHtml();

        var data911=JSON.parse(localStorage.getItem("911"));
        var data718=JSON.parse(localStorage.getItem("718"));
        var dataCayenne=JSON.parse(localStorage.getItem("cayenne"));
        var dataMacan=JSON.parse(localStorage.getItem("macan"));
        var dataPanamera=JSON.parse(localStorage.getItem("panamera"));
        var dataGesamt = [];

        Array.prototype.push.apply(dataGesamt,data911);
        Array.prototype.push.apply(dataGesamt,data718);
        Array.prototype.push.apply(dataGesamt,dataCayenne);
        Array.prototype.push.apply(dataGesamt,dataMacan);
        Array.prototype.push.apply(dataGesamt,dataPanamera);

        var table;
        var tb911 = garagePage.querySelector('#body911');
        var tb718 = garagePage.querySelector('#body718');
        var tbCayenne = garagePage.querySelector('#bodyCayenne');
        var tbMacan = garagePage.querySelector('#bodyPanamera');
        var tbPanamera = garagePage.querySelector('#bodyMacan')
        var tbGesamt = garagePage.querySelector('#bodyGesamt');

        var tbs = [tb911, tb718, tbCayenne, tbMacan, tbPanamera, tbGesamt];

        let listeGesamt = garagePage.querySelector('#listeGesamt');
        let listenEinzeln =  garagePage.querySelector('#listenEinzeln');

        if(data911 != null){
          //Tabelle abholen
          table = tb911;
          //alles raus bis auf die Überschriften
          table.innerHTML ="";
          this.tabelleMitDatenFuellen(table, data911);
        }

        if(data718 != null){
          //Tabelle abholen
          table = tb718;
          //alles raus bis auf die Überschriften
          table.innerHTML ="";
          this.tabelleMitDatenFuellen(table, data718);
        }

        if(dataCayenne != null){
          //Tabelle abholen
          table = tbCayenne;
          //alles raus bis auf die Überschriften
          table.innerHTML ="";
          this.tabelleMitDatenFuellen(table, dataCayenne);
        }

        if(dataPanamera != null){
          //Tabelle abholen
          table = tbPanamera;
          //alles raus bis auf die Überschriften
          table.innerHTML ="";
          this.tabelleMitDatenFuellen(table, dataPanamera);

        }

        if(dataMacan != null){
          //Tabelle abholen
          table = tbMacan;
          //alles raus bis auf die Überschriften
          table.innerHTML ="";
          this.tabelleMitDatenFuellen(table, dataMacan);
        }

        garagePage.querySelector('.localstorageloeschen').addEventListener('click', () => {
          console.log("ALLES LÖSCHEN!!");
          localStorage.clear();
          for(var tb of tbs){
            tb.style.display = "none";
          }
        });

        garagePage.querySelector('.nuranzeigen').addEventListener('change', event => {
          data911=JSON.parse(localStorage.getItem("911"));
          data718=JSON.parse(localStorage.getItem("718"));
          dataCayenne=JSON.parse(localStorage.getItem("cayenne"));
          dataMacan=JSON.parse(localStorage.getItem("macan"));
          dataPanamera=JSON.parse(localStorage.getItem("panamera"));
          dataGesamt = [];
          Array.prototype.push.apply(dataGesamt,data911);
          Array.prototype.push.apply(dataGesamt,data718);
          Array.prototype.push.apply(dataGesamt,dataCayenne);
          Array.prototype.push.apply(dataGesamt,dataMacan);
          Array.prototype.push.apply(dataGesamt,dataPanamera);

          console.log("nuranzeigen!!");
          var index = event.target.value;
          if(index=="Alle"){
            listenEinzeln.style.display = "none";

            table = tbGesamt;
            //alles raus bis auf die Überschriften
            table.innerHTML ="";
            this.tabelleMitDatenFuellen(table, dataGesamt);
            listeGesamt.style.display = "block";
          }
          if(index=="Modell"){
            listeGesamt.style.display = "none";

            if(data911 != null){
              //Tabelle abholen
              table = tb911;
              //alles raus bis auf die Überschriften
              table.innerHTML ="";
              this.tabelleMitDatenFuellen(table, data911);
            }

            if(data718 != null){
              //Tabelle abholen
              table = tb718;
              //alles raus bis auf die Überschriften
              table.innerHTML ="";
              this.tabelleMitDatenFuellen(table, data718);
            }

            if(dataCayenne != null){
              //Tabelle abholen
              table = tbCayenne;
              //alles raus bis auf die Überschriften
              table.innerHTML ="";
              this.tabelleMitDatenFuellen(table, dataCayenne);
            }

            if(dataPanamera != null){
              //Tabelle abholen
              table = tbPanamera;
              //alles raus bis auf die Überschriften
              table.innerHTML ="";
              this.tabelleMitDatenFuellen(table, dataPanamera);

            }

            if(dataMacan != null){
              //Tabelle abholen
              table = tbMacan;
              //alles raus bis auf die Überschriften
              table.innerHTML ="";
              this.tabelleMitDatenFuellen(table, dataMacan);
            }

            listenEinzeln.style.display = "block";
          }
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

    obejecArrayzuArray(objectArray){
      var dataString = [];
      for(var auto in objectArray)
      dataString.push(Object.values(objectArray[auto]));
      return dataString;
    }

    tabelleMitDatenFuellen(table, data){
      var dataString = this.obejecArrayzuArray(data);
      let count = 0;
      var idCount = 0;
      //iterate over every array(row) within daten
      for (let row of dataString) {
      //Insert a new row element into the table element
        table.insertRow();
      //Iterate over every index(cell) in each array(row)
        for (let cell of row) {
      //While iterating over the index(cell)
      //insert a cell into the table element
          let newCell = table.rows[table.rows.length - 1].insertCell();
      //add text to the created cell element
          newCell.textContent = cell;
          count++;
          if(count == 10){ //<-- 10. Feld einer Zeile == FAVORITE
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            if(newCell.innerHTML == "true")
            checkbox.checked = "checked";
            checkbox.name = ""+data[idCount].modell+"-"+data[idCount].id;
            newCell.innerHTML = "";
            newCell.className = "fav";
            checkbox.addEventListener("change", function(event){
              //modell aus tabelle holen
              var modell = event.path[2].cells[1].textContent.toLowerCase();
              //id aus tabelle holen
              var id = event.path[2].cells[0].textContent;
              //checkbox an sich holen
              var checkbox = event.path[0];
              //daten von dem Modell aus dem Speicher holen
              var autoData = JSON.parse(localStorage.getItem(modell));
              if(checkbox.checked){
                autoData[id-1].isFavorite = true;
              }else{
                autoData[id-1].isFavorite = false;
              }
              //geupdatete daten in speicher schreiben und alte daten überschreiben
              localStorage.setItem(modell, JSON.stringify(autoData));

            });
            newCell.appendChild(checkbox);
            count = 0;
          }

        }
        idCount++;
      }
    }

}

export default GaragePage;
