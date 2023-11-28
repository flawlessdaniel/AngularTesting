import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorcapitalComponent } from './components/porcapital/porcapital.component';
import { PorpaisComponent } from './components/porpais/porpais.component';
import { PorregionComponent } from './components/porregion/porregion.component';

const routes: Routes = [
  {
    path: 'porcapital',
    component: PorcapitalComponent
  },
  {
    path: 'porpais',
    component: PorpaisComponent
  },
  {
    path: 'porregion',
    component: PorregionComponent
  },
  {
    path: '**',
    redirectTo: 'porpais'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CountriesRoutingModule {

}
