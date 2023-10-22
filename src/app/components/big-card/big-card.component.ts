import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input() public id : string = "";
  @Input() public imageSource : string = "";
  @Input() public title : string = "";
  @Input() public description : string = "";
  @Input() public date : string = "";

  constructor() {}

  ngOnInit(): void {
    this.description = this.description.length > 300
    ? this.description.substring(0, 300) + '...'
    : this.description;
  }

  ngOnChange(): void {

  }
}
