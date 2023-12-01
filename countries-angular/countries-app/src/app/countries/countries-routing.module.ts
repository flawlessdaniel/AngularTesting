import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorcapitalComponent } from './pages/porcapital/porcapital.component';
import { PorpaisComponent } from './pages/porpais/porpais.component';
import { PorregionComponent } from './pages/porregion/porregion.component';
import { InfopaisComponent } from './pages/infopais/infopais.component';

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
    path: 'pais/:code',
    component: InfopaisComponent
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
