import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    PanelModule
  ]
})
export class PrimengModule { }
