import { Component } from '@angular/core';

@Component({
  selector: 'pipes-personalizados',
  templateUrl: './personalizados.component.html',
  styles: [
  ]
})
export class PersonalizadosComponent {

  public canFly: boolean = true;
  public value: number[] = [100, 50, 200, 150, 300, 250, 400, 350];
}
