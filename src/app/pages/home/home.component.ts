import { Component, OnInit } from '@angular/core';
import { ContentDataType } from 'src/app/types/ContentDataType';
import { FakeData } from 'src/data/FakeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public contentData : ContentDataType[];

  constructor() {
    this.contentData = FakeData.sort((a, b) => b.views - a.views);
   }

  ngOnInit(): void {
  }

}
