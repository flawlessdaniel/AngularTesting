import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';
import { Region } from '../../interfaces/types';

@Component({
  selector: 'countries-porregion',
  templateUrl: './porregion.component.html',
  styles: [
  ]
})
export class PorregionComponent implements OnInit {

  constructor(private _countriesService: CountriesService) {}

  public regiones: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public countries: Country[] = [];
  public regionSeleccionada? : Region;

  ngOnInit(): void {
    this.regionSeleccionada = this._countriesService.cacheStore?.porRegion.region;
    this.countries = this._countriesService.cacheStore?.porRegion.paises ?? [];
  }

  public onSearch(termino: Region): void {
    this.regionSeleccionada = termino;
    this._countriesService.getCountriesByRegion(termino)
        .subscribe(paises => {
          this.countries = paises;
        });
  }
}
