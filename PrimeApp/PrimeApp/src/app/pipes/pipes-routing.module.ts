import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './pages/common/common.component';
import { PersonalizadosComponent } from './pages/personalizados/personalizados.component';
import { NumerosComponent } from './pages/numeros/numeros.component';

const routes: Routes = [
  {
    path:'',
    component: CommonComponent
  },
  {
    path:'numeros',
    component: NumerosComponent
  },
  {
    path:'personalizados',
    component: PersonalizadosComponent
  },
  {
    path:'**',
    redirectTo:''
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class PipesRoutingModule { }
