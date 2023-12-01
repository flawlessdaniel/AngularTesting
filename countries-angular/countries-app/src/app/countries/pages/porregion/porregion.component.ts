import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-porregion',
  templateUrl: './porregion.component.html',
  styles: [
  ]
})
export class PorregionComponent {

  constructor(private _countriesService: CountriesService) {}

  public countries: Country[] = [];

  public onSearch(termino: string): void {
    this._countriesService.getCountriesByRegion(termino)
        .subscribe(paises => {
          this.countries = paises;
        });
  }
}
