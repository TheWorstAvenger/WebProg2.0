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

        let table;

        var test=this.obejecArrayzuArray(data911);
        console.log(test);

        if(data911 != null){
          var data911String = this.obejecArrayzuArray(data911);
          //Tabelle abholen
          table = garagePage.querySelector('#body911');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          this.tabelleMitDatenFuellen(table, data911String);
        }

        if(data718 != null){
          var data718String = this.obejecArrayzuArray(data718);
          //Tabelle abholen
          table = garagePage.querySelector('#body718');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          this.tabelleMitDatenFuellen(table, data718String);
        }

        if(dataCayenne != null){
          var dataCayenneString = this.obejecArrayzuArray(dataCayenne);
          //Tabelle abholen
          table = garagePage.querySelector('#bodyCayenne');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          this.tabelleMitDatenFuellen(table, dataCayenneString);
        }

        if(dataPanamera != null){
          var dataPanameraString = this.obejecArrayzuArray(dataPanamera);
          //Tabelle abholen
          table = garagePage.querySelector('#bodyPanamera');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          this.tabelleMitDatenFuellen(table, dataPanameraString);

        }

        if(dataMacan != null){
          var dataMacanString = this.obejecArrayzuArray(dataMacan);
          //Tabelle abholen
          table = garagePage.querySelector('#bodyMacan');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          this.tabelleMitDatenFuellen(table, dataMacanString);
        }


        garagePage.querySelector('.localstorageloeschen').addEventListener('click', () => {
          console.log("ALLES LÖSCHEN!!");
          localStorage.clear();
          location.reload();
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

    tabelleLeerenAußerUeberschrift(table){
      for(var i =table.rows.length - 1; i > 1 ; i--)
     {
          table.deleteRow(i);
      }
    }

    tabelleMitDatenFuellen(table, daten){
      var count = 0;
      //iterate over every array(row) within daten
      for (let row of daten) {
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
            newCell.className = "fav";
            newCell.innerHTML = "";
            var checkbox = document.createElement('input');
                  checkbox.type = "checkbox";
            newCell.appendChild(checkbox);
            count = 0;
          }

        }
      }
    }

}

export default GaragePage;
