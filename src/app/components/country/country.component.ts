import { Component, OnInit } from '@angular/core';
import { CoronaserviceService } from 'src/app/coronaservice.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  countryStats:any;
  loading:boolean=true;
  constructor(public corona:CoronaserviceService) { }
 


  ngOnInit(): void {
    this.getCountryStats();
  }
  getCountryStats(){
    this.corona.getCountryStats().subscribe((res: any) => {
        console.log(res);
        this.countryStats=res.countries_stat;
        this.loading=false;
    });
  }
  
  div(){

  }
 
}
