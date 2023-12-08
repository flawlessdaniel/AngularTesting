import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/countries';
import { Region } from '../interfaces/types';
import { CacheStorage } from '../interfaces/cachestore';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpClient: HttpClient) {
    this.loadFromLocalStorage('cacheStore');
  }

  public cacheStore?: CacheStorage = {
    porCapital: {
      termino: '',
      paises: []
    },
    porRegion: {
      region: '',
      paises: []
    },
    porPais: {
      termino: '',
      paises: []
    }
  };

  private base_url: string = 'https://restcountries.com/v3.1/';

  private saveToLocalStorage(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  private loadFromLocalStorage(key: string): void {
    const val = localStorage.getItem(key);
    if (val)
      this.cacheStore = JSON.parse(val);
  }

  private getCountryInformation(url: string): Observable<Country[]> {
    return this._httpClient.get<Country[]>(url)
    .pipe(
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }

  public getCountriesByCapital(capital: string): Observable<Country[]> {
    return this.getCountryInformation(this.base_url + 'capital/' + capital)
    .pipe(
      tap(paises => {
        this.cacheStore!.porCapital.paises = paises;
        this.cacheStore!.porCapital.termino = capital;
        this.saveToLocalStorage('cacheStore', this.cacheStore);
      })
    );
  }

  public getCountriesByName(nombre: string): Observable<Country[]> {
    return this.getCountryInformation(this.base_url + 'name/' + nombre)
    .pipe(
      tap(paises => {
        this.cacheStore!.porPais.paises = paises;
        this.cacheStore!.porPais.termino = nombre;
        this.saveToLocalStorage('cacheStore', this.cacheStore);
      })
    );
  }

  public getCountriesByRegion(region: Region): Observable<Country[]> {
    return this.getCountryInformation(this.base_url + 'region/' + region)
    .pipe(
      tap(paises => {
        this.cacheStore!.porRegion.paises = paises;
        this.cacheStore!.porRegion.region = region;
        this.saveToLocalStorage('cacheStore', this.cacheStore);
      })
    );
  }

  public getCountryByAlpha(code: string): Observable<Country | null> {
    return this._httpClient.get<Country[]>(this.base_url + 'alpha/' + code)
    .pipe(
      map(paises => paises.length > 0 ? paises[0] : null),
      catchError(err => {
        return of(null);
      })
    );
  }
}
