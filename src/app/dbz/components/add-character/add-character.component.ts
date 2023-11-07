import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/Personaje';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 20
  };

  public EmitirPersonaje(): void {
    if (this.nuevoPersonaje.nombre.trim().length === 0) return;
    this.onNuevoPersonaje.emit(this.nuevoPersonaje);
    this.nuevoPersonaje = { nombre: '', poder: 0 };
  }
}
