import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-listado-pais',
  templateUrl: './listado-pais.component.html',
  styles: [
  ]
})
export class ListadoPaisComponent {

  constructor() {}

  @Input()
  public countries: Country[] = [];
}
