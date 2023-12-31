import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() public id : string = "";
  @Input() public imageSource : string = "";
  @Input() public title : string = "";
  @Input() public date : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
