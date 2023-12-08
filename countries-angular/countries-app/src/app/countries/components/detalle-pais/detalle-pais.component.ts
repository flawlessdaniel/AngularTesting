import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styles: [
  ]
})
export class DetallePaisComponent {

  constructor() { }

  @Input()
  public Pais?: Country;

}
