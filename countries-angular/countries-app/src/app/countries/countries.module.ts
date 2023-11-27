import { NgModule } from '@angular/core';
import { PorcapitalComponent } from './components/porcapital/porcapital.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    PorcapitalComponent
  ],
  declarations: [
    PorcapitalComponent
  ],
})
export class CountriesModule {

}
