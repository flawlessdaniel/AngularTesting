import { NgModule } from '@angular/core';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchboxComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    SearchboxComponent,
    SidebarComponent
  ],
})
export class SharedModule { }
