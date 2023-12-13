import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { TopmenuComponent } from './components/topmenu/topmenu.component';


@NgModule({
  declarations: [
    TopmenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    TopmenuComponent
  ]
})
export class SharedModule { }
