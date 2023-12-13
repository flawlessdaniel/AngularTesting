import { Component } from '@angular/core';

@Component({
  selector: 'pipes-common',
  templateUrl: './common.component.html',
  styles: [
  ]
})
export class CommonComponent {
  public nombreRaro: string = 'CaPiTáN AmÉrIcA';
  public fechaPrueba: Date = new Date();
}
