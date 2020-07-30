import { Injectable } from '@angular/core';
import { Init } from "./item.modal";

@Injectable()
export class ItemService extends Init {
  constructor() {
    super();
    console.log('TodoService Works');
    this.load();
  }


  addItem(newItem) {
    let items = JSON.parse(localStorage.getItem('items'));
    // Add New TodoService
    debugger;
    items.push(newItem);
    // Set New Todos
    localStorage.setItem('items', JSON.stringify(items));
  }

  getItems() {
    let items = JSON.parse(localStorage.getItem('items'));
    return items;
  }


  deleteItem(itemFname) {
    let items = JSON.parse(localStorage.getItem('items'));

    for (let i = 0; i < items.length; i++) {
      if (items[i].first_name == itemFname) {
        items.splice(i, 1);
      }
    }
    localStorage.setItem('items', JSON.stringify(items));

  }

  updateItem(index, newItem) {
    let items = JSON.parse(localStorage.getItem('items'));
    items.splice(index, 1);
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
  }



}
