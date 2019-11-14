"use strict";

import DatabaseConnector from '../database/DatabaseConnector';

class AddNewEntry {

    constructor(app){
        this.app = app;
        this.db = new DatabaseConnector();
    }

    async onShow() {
        let form = await this._importNewEntryForm();
        let data = this._loadData();

        form.querySelector('.save').addEventListener('click', () => {
            var newObj = { 
              'id': "asdf",
              'name': document.getElementById('name').value,
              'tel': document.getElementById('tel').value,
              'mail': document.getElementById('mail').value
            };
            data.push(newObj);
            console.log(data);
            this.db.write(this.db.defaultKey(), data);
            this.app._router.navigate('overview');
        });
        
        return this._createContentObject(form);
    }

    async _importNewEntryForm() {
        const template = await import('./add-new-entry.html');
        let container = document.createElement('div');
        container.innerHTML = template.trim();
        return container;
    }

    _loadData(){
      return this.db.read(this.db.defaultKey());
  }

    _createContentObject(html) {
      let content = {
          className: "overview",
          main: html.querySelectorAll('section > *')
      };
      return content;
  }

    get title() {
        return "Neuer Eintrag";
    }
}
export default AddNewEntry;
