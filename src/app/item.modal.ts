export class Init {
  load() {
    if(localStorage.getItem('items') === null || localStorage.getItem('items') == undefined) {
      console.log('No Todos Found... Creating...');
      let items = [
        {
          first_name : "Kamal",
          last_name : "Yadav",
          age : 23
        }
      ];

      localStorage.setItem('items', JSON.stringify(items));
      return 
    } else {
      console.log('Found Todos...');
    }
  }
}