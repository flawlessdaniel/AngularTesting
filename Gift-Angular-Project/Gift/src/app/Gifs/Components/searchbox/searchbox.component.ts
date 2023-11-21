import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../Services/gift.service';

@Component({
  selector: 'gifs-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {

  constructor(private _gifService:GifsService) { }

  @ViewChild('txtQueryInput')
  public queryInput!: ElementRef<HTMLInputElement>;

  public onSearch(): void {
    this._gifService.searchGifts(this.queryInput.nativeElement.value);
    this._gifService.addQuery(this.queryInput.nativeElement.value);
    this._gifService.organizeQueries(this.queryInput.nativeElement.value);
    this.queryInput.nativeElement.value = '';
  }

}
