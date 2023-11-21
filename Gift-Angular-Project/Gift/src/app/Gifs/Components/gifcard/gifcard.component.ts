import { Component, Input } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gif-gifcard',
  templateUrl: './gifcard.component.html',
  styleUrls: ['./gifcard.component.css']
})
export class GifcardComponent {

  @Input()
  public Gif!: Gif;

}
