
class DatabaseConnector {

  constructor(){
    
  }

  defaultKey(){
    return "myData";
  }

  write(key, json) {
    window.localStorage.setItem(key, JSON.stringify(json));
  }

  read(key){
    return JSON.parse(window.localStorage.getItem(key));
  }
  
  initMyDatabase(){
    let data = [
      {
        'id': 0,
        'name': 'Hans-Peter Wurst',
        'tel': '12345 778008',
        'mail': 'hans@wurst.de'
      },
      {
        'id': 1,
        'name': 'asdf',
        'tel': '0000',
        'mail': 'a@s.df'
      },
      {
        'id': 2,
        'name': 'Max Mustermann',
        'tel': '4711 080022222',
        'mail': 'max@mustermann.de'
      }
    ];

    const key = this.defaultKey();
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  isDataObjectAlreadyPersisted(){
    return window.localStorage.getItem(this.defaultKey) != 'undefined';
  }
}

export default DatabaseConnector;