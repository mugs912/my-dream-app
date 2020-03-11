import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items = [];
  @Output() itemClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  listItemClicked(item) {
    this.itemClicked.emit(item);
  }
}
