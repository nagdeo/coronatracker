import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaComponent } from './components/india/india.component';
import { GlobalComponent } from './components/global/global.component';
import { CountryComponent } from './components/country/country.component';


const routes: Routes = [
  { path: '', component: IndiaComponent },
  { path: 'global', component: GlobalComponent },
  { path: 'country', component: CountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
