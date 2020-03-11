import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  foods = ['Ice Cream', 'Pav Bhaji', 'Veg Biryani', 'Uttappa'];
  drinks = ['Lassi', 'Maza', 'Frooti', 'Juice'];
  constructor() { }

  ngOnInit(): void {
  }

  showItemClicked(item) {
    alert('you clicked ' + item);
  }

}
