import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-searchbox',
  templateUrl: './searchbox.component.html',
  styles: [
  ]
})
export class SearchboxComponent {

  @Output()
  onSearch = new EventEmitter<string>();

  @ViewChild('txtSearchInput')
  public searchInput!: ElementRef<HTMLInputElement>;

  onEnter(termino: string) {
    this.onSearch.emit(termino);
    this.searchInput.nativeElement.value = '';
  }
}
