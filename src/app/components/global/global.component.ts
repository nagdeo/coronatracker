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

  ngOnInit(): void {
    this.getGlobalStats();
  }
  getGlobalStats(){
    this.corona.getGlobalStats().subscribe((res: any) => {
      this.globalStats=res;
  });
  }

}
