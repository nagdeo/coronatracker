import { Component, OnInit } from '@angular/core';
import { CoronaserviceService } from 'src/app/coronaservice.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {

  globalStats:any=[];
  constructor(public corona:CoronaserviceService) { }
  pieChartLabels =  ['Total Cases', 'Active Cases', 'Recovered', 'Serious', 'Deaths'];
pieChartColor:any = [
  {
      backgroundColor: ['rgba(30, 169, 224, 0.8)',
      'rgba(255,165,0,0.9)',
      'rgba(100, 255, 0, 0.9)',
      'rgba(255, 161, 181, 0.9)',
      'rgba(255, 102, 0, 0.9)'
      ]
  }
]

pieChartData:any = [
  { 
      data: []
  }
]; pieChartOptions = {
  responsive: true
}

  ngOnInit(): void {
    this.getGlobalStats();
     
  }
  getGlobalStats(){
    this.corona.getGlobalStats().subscribe((res: any) => {
      this.globalStats=res;
      let re = /\,/gi;
      console.log(this.globalStats.total_cases.replace(re, ''));
      let total=this.globalStats.total_cases.replace(re, '')+this.globalStats.active_cases.replace(re, '')+
      this.globalStats.total_recovered.replace(re, '')+this.globalStats.serious_critical.replace(re, '')+
      this.globalStats.total_deaths.replace(re, '');

      this.pieChartData= [(this.globalStats.total_cases.replace(re, '')*360)/total,(this.globalStats.active_cases.replace(re, '')*360)/total,
          (this.globalStats.total_recovered.replace(re, '')*360)/total,(this.globalStats.serious_critical.replace(re, '')*360)/total,
          (this.globalStats.total_deaths.replace(re, '')*360)/total];
          console.log(this.pieChartData)
    
  });
  }
  onChartClick(event) {
    console.log(event);
   }

}
