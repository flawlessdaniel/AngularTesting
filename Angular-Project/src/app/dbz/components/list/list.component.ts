import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from "../../interfaces/Personaje";

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  @Input()
  personajes : Personaje[] = []

  onDeleteCharacter(index: number): void {
    if (this.personajes.length <= 0) return;
    this.onDeletePersonaje.emit(this.personajes[index].id);
  }
}
