import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  nombre: string = 'IronMan';
  age: number = 40;
  metodo: string = 'IronMan Metodo';
  nombreCambio: boolean = false;
  edadCambio: boolean = false;

  get CapitalizeName(): string {
    return this.nombre.toUpperCase();
  }

  GetHeroDescription(): string {
    return `${this.nombre } - ${ this.age }`;
  }

  CambiarNombre(): void{
    this.nombre = 'Daniel';
    this.nombreCambio = true;
  }

  CambiarEdad(): void{
    this.age = 30;
    this.edadCambio = true;
  }
}
