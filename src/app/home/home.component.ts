import { Component } from '@angular/core';
import { ItemsService } from "../items.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ItemsService]
})

export class HomeComponent {
  getTitle() {
    return "Hello";
  }
  title = "Home?";
  subheader = "To Be or Not to Be";
  count = 50;

  items: string[] = [];
  name: string = "";

  constructor(private itemsService: ItemsService) {}

  addItem(name: string){
    this.itemsService.addData(name);
  }

  ngOnInit() {
    this.items = this.itemsService.getData();
  }
}
