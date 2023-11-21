import { Component } from '@angular/core';
import { GifsService } from '../../Services/gift.service';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent {

  constructor(private _gifsService:GifsService) {}

  public getGifs() : Gif[] {
    return this._gifsService.Gifs;
  }

}
