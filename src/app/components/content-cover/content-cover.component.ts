import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeData } from 'src/data/FakeData';

@Component({
  selector: 'app-content-cover',
  templateUrl: './content-cover.component.html',
  styleUrls: ['./content-cover.component.css']
})
export class ContentCoverComponent implements OnInit {
  public imageSource : string = "";
  public title : string = "";
  public description : string = "";
  public date : string = "";

  private id: string | null = "";

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"));
    this.setValuesToComponent();
  }

  private setValuesToComponent() {
    const result = FakeData.filter(article => article.id.toString() == this.id)[0];

    if (result) {
      this.imageSource = result.imageSource;
      this.title = result.title;
      this.description = result.description;
      this.date = result.date;
    }
  }

}
