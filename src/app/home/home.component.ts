import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dataService: DataService) { 
    this.data = [];
  }

  data: any[];

  ngOnInit(): void {
    this.dataService.getNews().subscribe(data => {
      console.log(data);
      this.data = data["articles"];
    })
  }

}
