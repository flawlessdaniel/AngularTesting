import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shared-lazy-image',
    templateUrl: './lazyImage.component.html',
    styleUrls: ['./lazyImage.component.css']
})
export class LazyImageComponent implements OnInit {

  constructor() { }

  @Input()
  url!: string

  @Input()
  alt: string = '';


  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('LazyImageComponent: url is required');
  }

  public onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

}
