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

        // for (var i = 0; i < carCount911.length; i++) {



        // var liste = document.createElement("ul");
        // var li = document.createElement("li");
        // var table = document.createElement("table");




        var myCars=JSON.parse(localStorage.getItem("911"));
        console.log(myCars);
        let erstes = JSON.parse(localStorage.getItem("911"));
        // let okay = JSON.parse(erstes.getItem());
        console.log("erstes"+erstes);
        var inhalt = document.createTextNode(erstes[0].stringify);
        var auto = document.createElement("p");
        auto.appendChild(inhalt);

        document.body.appendChild(inhalt);
        // var col = [];
        // for (var i = 0; i < myCars.length; i++) {
        //     for (var key in myCars[i]) {
        //         if (col.indexOf(key) === -1) {
        //             col.push(key);
        //         }
        //     }
        // }
        //
        // var tr = table.insertRow(-1);
        //
        // for (var i = 0; i < col.length; i++) {
        //     var th = document.createElement("th");
        //     th.innerHTML = col[i];
        //     tr.appendChild(th);
        // }
        //
        // for (var i = 0; i < myCars.length; i++) {
        //
        //     tr = table.insertRow(-1);
        //
        //     for (var j = 0; j < col.length; j++) {
        //         var tabCell = tr.insertCell(-1);
        //         tabCell.innerHTML = myCars[i][col[j]];
        //     }
        // }

        // para.appendChild(inhalt);
        // table.appendChild(para);
        // li.appendChild(table);
        // liste.appendChild(li);
        // document.body.appendChild(liste);
        // }


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
