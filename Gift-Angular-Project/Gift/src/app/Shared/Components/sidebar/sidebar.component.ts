import { Component } from '@angular/core';
import { GifsService } from 'src/app/Gifs/Services/gift.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private _gifsService:GifsService) { }

  public getQueries(): string[] {
    return this._gifsService.queries;
  }

  public onSelectQuery(query: string): void {
    this._gifsService.searchGifts(query);
    this._gifsService.organizeQueries(query);
  }
}
