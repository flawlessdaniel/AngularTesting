import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-porpais',
  templateUrl: './porpais.component.html',
  styles: [
  ]
})
export class PorpaisComponent implements OnInit {

  constructor(private _countriesService: CountriesService) {}

  ngOnInit(): void {
    this.termino = this._countriesService.cacheStore?.porPais.termino ?? '';
    this.countries = this._countriesService.cacheStore?.porPais.paises ?? [];
  }

  public termino: string = '';
  public countries: Country[] = [];

  public onSearch(termino: string): void {
    this._countriesService.getCountriesByName(termino)
        .subscribe(paises => {
          this.countries = paises;
        });
  }
}
