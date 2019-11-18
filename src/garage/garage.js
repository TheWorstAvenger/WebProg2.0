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

        var data911String = this.obejecArrayzuArray(data911);
        var data718String = this.obejecArrayzuArray(data718);
        var dataCayenneString = this.obejecArrayzuArray(dataCayenne);
        var dataPanameraString = this.obejecArrayzuArray(dataPanamera);
        var dataMacanString = this.obejecArrayzuArray(dataMacan);
        let table;

        var test=this.obejecArrayzuArray(data911);
        console.log(test);

        if(data911 != null){
          //Tabelle abholen
          table = garagePage.querySelector('#body911');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          //iterate over every array(row) within data911String
          for (let row of data911String) {
          //Insert a new row element into the table element
            table.insertRow();
          //Iterate over every index(cell) in each array(row)
            for (let cell of row) {
          //While iterating over the index(cell)
          //insert a cell into the table element
              let newCell = table.rows[table.rows.length - 1].insertCell();
          //add text to the created cell element
              newCell.textContent = cell;
            }
          }
        }

        if(data718 != null){
          //Tabelle abholen
          table = garagePage.querySelector('#body718');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          //iterate over every array(row) within data911String
          for (let row of data718String) {
          //Insert a new row element into the table element
            table.insertRow();
          //Iterate over every index(cell) in each array(row)
            for (let cell of row) {
          //While iterating over the index(cell)
          //insert a cell into the table element
              let newCell = table.rows[table.rows.length - 1].insertCell();
          //add text to the created cell element
              newCell.textContent = cell;
            }
          }
        }

        if(dataCayenne != null){
          //Tabelle abholen
          table = garagePage.querySelector('#bodyCayenne');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          //iterate over every array(row) within data911String
          for (let row of dataCayenneString) {
          //Insert a new row element into the table element
            table.insertRow();
          //Iterate over every index(cell) in each array(row)
            for (let cell of row) {
          //While iterating over the index(cell)
          //insert a cell into the table element
              let newCell = table.rows[table.rows.length - 1].insertCell();
          //add text to the created cell element
              newCell.textContent = cell;
            }
          }
        }

        if(dataPanamera != null){
          //Tabelle abholen
          table = garagePage.querySelector('#bodyPanamera');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          //iterate over every array(row) within data911String
          for (let row of dataPanameraString) {
          //Insert a new row element into the table element
            table.insertRow();
          //Iterate over every index(cell) in each array(row)
            for (let cell of row) {
          //While iterating over the index(cell)
          //insert a cell into the table element
              let newCell = table.rows[table.rows.length - 1].insertCell();
          //add text to the created cell element
              newCell.textContent = cell;
            }
          }
        }

        if(dataMacan != null){
          //Tabelle abholen
          table = garagePage.querySelector('#bodyMacan');
          //alles raus bis auf die Überschriften
          this.tabelleLeerenAußerUeberschrift(table);
          //iterate over every array(row) within data911String
          for (let row of dataMacanString) {
          //Insert a new row element into the table element
            table.insertRow();
          //Iterate over every index(cell) in each array(row)
            for (let cell of row) {
          //While iterating over the index(cell)
          //insert a cell into the table element
              let newCell = table.rows[table.rows.length - 1].insertCell();
          //add text to the created cell element
              newCell.textContent = cell;
            }
          }
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
}

export default GaragePage;
