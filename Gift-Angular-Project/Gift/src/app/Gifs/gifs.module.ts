import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { SearchboxComponent } from './Components/searchbox/searchbox.component';
import { CardlistComponent } from './Components/cardlist/cardlist.component';
import { GifcardComponent } from './Components/gifcard/gifcard.component';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [
    SearchboxComponent,
    CardlistComponent,
    GifcardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    SearchboxComponent,
    CardlistComponent
  ]
})
export class GifsModule { }
