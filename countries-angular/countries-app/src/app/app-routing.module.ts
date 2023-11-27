
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorcapitalComponent } from './countries/components/porcapital/porcapital.component';

const routes: Routes = [
  {
    path: 'home',
    component: PorcapitalComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
