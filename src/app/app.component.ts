import { Component, OnInit } from '@angular/core';
import {CoronaserviceService} from './coronaservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'corona';
  constructor(public corona:CoronaserviceService){}
  ngOnInit(){
    this.getCountryStats();
    this.getGlobalStats();
    this.getIndiaStatCases();
  }
  getCountryStats(){
    this.corona.getCountryStats().subscribe((res: any) => {
        console.log(res);
    });
  }
  getGlobalStats(){
    this.corona.getGlobalStats().subscribe((res: any) => {
      console.log(res);
  });
  }
  getIndiaStatCases(){
    this.corona.getIndiaStatCases().subscribe((res: any) => {
      console.log(res);
    });
  }
}
