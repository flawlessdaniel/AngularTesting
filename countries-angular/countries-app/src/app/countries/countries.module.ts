import { NgModule } from '@angular/core';
import { PorcapitalComponent } from './pages/porcapital/porcapital.component';
import { PorpaisComponent } from './pages/porpais/porpais.component';
import { PorregionComponent } from './pages/porregion/porregion.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListadoPaisComponent } from './components/listado-pais/listado-pais.component';
import { CommonModule } from '@angular/common';
import { InfopaisComponent } from './pages/infopais/infopais.component';
import { DetallePaisComponent } from './components/detalle-pais/detalle-pais.component';

@NgModule({
  imports: [
    CountriesRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports: [
    PorcapitalComponent,
    PorpaisComponent,
    PorregionComponent,
  ],
  declarations: [
    PorcapitalComponent,
    PorpaisComponent,
    PorregionComponent,
    ListadoPaisComponent,
    InfopaisComponent,
    DetallePaisComponent
  ],
})
export class CountriesModule {

}
