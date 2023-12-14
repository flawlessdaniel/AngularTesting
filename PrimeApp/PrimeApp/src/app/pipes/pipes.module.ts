import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { PrimengModule } from '../primeng/primeng.module';
import { CommonComponent } from './pages/common/common.component';
import { PersonalizadosComponent } from './pages/personalizados/personalizados.component';
import { CanflyPipe } from './canfly.pipe';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
    CommonComponent,
    NumerosComponent,
    PersonalizadosComponent,
    CanflyPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    PipesRoutingModule,
    PrimengModule
  ]
})
export class PipesModule { }
