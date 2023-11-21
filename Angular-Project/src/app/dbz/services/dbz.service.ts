import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/Personaje';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  Personajes : Personaje[] = [
    {
      id: uuid(),
      nombre: 'Gohan',
      poder: 15000
    },
    {
      id: uuid(),
      nombre: 'Trunks',
      poder: 8500
    },
    {
      id: uuid(),
      nombre: 'Gotens',
      poder: 8500
    }
  ]

  public NuevoPersonaje(pj: Personaje): void {
    const newPj: Personaje = { id: uuid(), ...pj}
    this.Personajes.push(newPj);
  }

  public DeletePersonaje(index: number): void {
    this.Personajes.splice(index, 1);
  }

  public DeletePersonajeById(id: string): void {
    this.Personajes = this.Personajes.filter(pj => pj.id !== id);
  }

}
