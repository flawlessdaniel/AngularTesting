import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-porpais',
  templateUrl: './porpais.component.html',
  styles: [
  ]
})
export class PorpaisComponent {

  constructor(private _countriesService: CountriesService) {}

  public countries: Country[] = [];

  public onSearch(termino: string): void {
    this._countriesService.getCountriesByName(termino)
        .subscribe(paises => {
          this.countries = paises;
        });
  }
}
