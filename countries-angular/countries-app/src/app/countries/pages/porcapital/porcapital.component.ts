import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-porcapital',
  templateUrl: './porcapital.component.html',
  styles: [
  ]
})
export class PorcapitalComponent {

  constructor(private _countriesService: CountriesService) {}

  public countries: Country[] = [];

  public onSearch(termino: string): void {
    this._countriesService.getCountriesByCapital(termino)
        .subscribe(paises => {
          this.countries = paises;
        });
  }
}
