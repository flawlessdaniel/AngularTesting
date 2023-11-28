import { NgModule } from '@angular/core';
import { PorcapitalComponent } from './components/porcapital/porcapital.component';
import { PorpaisComponent } from './components/porpais/porpais.component';
import { PorregionComponent } from './components/porregion/porregion.component';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  imports: [
    CountriesRoutingModule
  ],
  exports: [
    PorcapitalComponent,
    PorpaisComponent,
    PorregionComponent,
  ],
  declarations: [
    PorcapitalComponent,
    PorpaisComponent,
    PorregionComponent
  ],
})
export class CountriesModule {

}
