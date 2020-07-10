import { Component, OnInit } from '@angular/core';
import { CoronaserviceService } from 'src/app/coronaservice.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.scss']
})
export class IndiaComponent implements OnInit {

  indiaCases:any=[];
  stateIndia:any;
  cnt=0;
  cols: { field: string; header: string; }[];
  constructor(public corona:CoronaserviceService) { }

  ngOnInit(): void {
    this.getIndiaStatCases();
    this.cols = [
      { field: 'name', header: 'State' },
      { field: 'cases', header: 'Cases' },
      { field: 'recovered', header: 'Recovered'},
      { field: 'deaths', header: 'Deaths' },
     
    ];
  }
  getIndiaStatCases(){
    this.corona.getIndiaStatCases().subscribe((res: any) => {
      console.log(res);
      res.forEach((element,index) => {
        if(index<35){
          this.indiaCases.push(element);
        }
      });
      
    });
  }
  // findState(event){
  //   console.log(event);
  //   if (!this.indiaCases.some((item) => item.name == event)) {
  //     this.indiaCases.push();
  // }
  
 // }

}
