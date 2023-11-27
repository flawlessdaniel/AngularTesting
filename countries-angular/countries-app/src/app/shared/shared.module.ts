import { NgModule } from '@angular/core';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    SearchboxComponent,
    SidebarComponent
  ],
  imports: [
  ],
  exports: [
    SearchboxComponent,
    SidebarComponent
  ],
})
export class SharedModule { }
