import { NgModule } from '@angular/core';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    SearchboxComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule
  ],
  exports: [
    SearchboxComponent,
    SidebarComponent
  ],
})
export class SharedModule { }
