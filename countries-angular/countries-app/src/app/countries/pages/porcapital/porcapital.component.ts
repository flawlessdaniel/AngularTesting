import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-porcapital',
  templateUrl: './porcapital.component.html',
  styles: [
  ]
})
export class PorcapitalComponent implements OnInit {

  constructor(private _countriesService: CountriesService) {}

  ngOnInit(): void {
    this.termino = this._countriesService.cacheStore?.porCapital.termino ?? '';
    this.countries = this._countriesService.cacheStore?.porCapital.paises ?? [];
  }

  public termino: string = '';
  public countries: Country[] = [];

  public onSearch(termino: string): void {
    this._countriesService.getCountriesByCapital(termino)
        .subscribe(paises => {
          this.countries = paises;
        });
  }
}
