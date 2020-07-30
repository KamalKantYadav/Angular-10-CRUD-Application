import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { ItemService } from "../item.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private itemService: ItemService) { }
  first_name: any;
  old_first_name: any;
  last_name: any;
  age: any;
  items;
  show: boolean = true;
  formtype:any;

  ngOnInit(): void {
    this.refresh_items();
  }
  refresh_items() {
    this.items = this.itemService.getItems();
    this.first_name = '';
    this.last_name = '';
    this.age = '';
    this.old_first_name = '';
    this.formtype = 'New User';

    this.show = true;
  }
  addItem() {
    let newItem = {
      first_name: this.first_name,
      last_name: this.last_name,
      age: this.age
    }
    this.itemService.addItem(newItem);
    this.refresh_items();
  }


  deleteItem(itemFname) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].text == itemFname) {
        this.items.splice(i, 1);
      }
    }

    this.itemService.deleteItem(itemFname);
    this.refresh_items();
  }

  editTodo(item) {
    this.show = false;
    this.formtype = 'Edit User';
    this.old_first_name = item.first_name;
    this.first_name = item.first_name;
    this.last_name = item.last_name;
    this.age = item.age;
  }

  updateItem() {
    let newItem = {
      first_name: this.first_name,
      last_name: this.last_name,
      age: this.age
    }
    const index = this.items.findIndex(el => el.first_name == this.old_first_name);
    this.itemService.updateItem(index, newItem);
    this.refresh_items();
  }

}
