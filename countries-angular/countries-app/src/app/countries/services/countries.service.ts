import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpClient: HttpClient) { }

  private base_url: string = 'https://restcountries.com/v3.1/';

  public getCountries(): Observable<Country[]> {
    return this._httpClient.get<Country[]>(this.base_url + 'all')
    .pipe(
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }

  public getCountriesByCapital(capital: string): Observable<Country[]> {
    return this._httpClient.get<Country[]>(this.base_url + 'capital/' + capital)
    .pipe(
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }

  public getCountriesByName(nombre: string): Observable<Country[]> {
    return this._httpClient.get<Country[]>(this.base_url + 'name/' + nombre)
    .pipe(
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }

  public getCountriesByRegion(region: string): Observable<Country[]> {
    return this._httpClient.get<Country[]>(this.base_url + 'region/' + region)
    .pipe(
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }
}
