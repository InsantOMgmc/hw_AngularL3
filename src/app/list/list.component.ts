import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../to-do-items/to-do-item';
import { ITEMS } from '../to-do-items/list-todo-items';

import { registerLocaleData } from '@angular/common';
import localeKk from '@angular/common/locales/kk';
registerLocaleData(localeKk, 'kk');

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  
  ngOnInit(): void {

  }
  items = ITEMS;
  selectedItem!: ToDoItem;
  onSelect(item: ToDoItem): void {
    this.selectedItem = item;
  }
  title = 'My List';
  toDoItem: ToDoItem = {
    id: 1,
    name: 'Call someone',
    isComplete: false
  }
}
