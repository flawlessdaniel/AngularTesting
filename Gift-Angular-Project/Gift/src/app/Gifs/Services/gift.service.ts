import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../Interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private _httpClient:HttpClient) {
    this.loadLocalStorage();
  }

  private API_KEY: string = 'e1A6qifszNu2aqkRR0VC2UWPLGNqHJd4';
  private BASE_URL: string = 'https://api.giphy.com/v1/gifs/search';

  public Gifs: Gif[] = []
  public queries: string[] = [];

  public searchGifts(query: string): void {

    const params = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('q', query)
    .set('limit', 10);

    this._httpClient.get<SearchResponse>(`${this.BASE_URL}`, { params })
    .subscribe((response: SearchResponse) => {
      this.Gifs = response.data;
      this.saveLocalStorage('gifs', JSON.stringify(this.Gifs));
    });
  }

  public addQuery(query: string): void {
    this.queries.push(query);
    // this.saveLocalStorage('queries', JSON.stringify(this.queries));
  }

  public organizeQueries(query: string): void {
    console.log('organizing');
    if (this.queries.includes(query)) {
      this.queries = this.queries.filter((q: string) => q !== query);
      console.log('removed existing');
    }

    this.queries.unshift(query);
    this.queries = this.queries.splice(0, 10);

    this.saveLocalStorage('queries', JSON.stringify(this.queries));
  }

  private saveLocalStorage(key:string, value:string): void {
    localStorage.setItem(key, value);
  }

  private loadLocalStorage(){
    this.queries = JSON.parse(localStorage.getItem('queries') || '[]');
    this.Gifs = JSON.parse(localStorage.getItem('gifs') || '[]');
  }
}
