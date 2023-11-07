import { Component } from "@angular/core";
import { Personaje } from "../interfaces/Personaje";
import { DbzService } from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})
export class DbzMainPageComponent{

  constructor(private dbzService: DbzService){

  }

  get Personajes(): Personaje[]{
    return [...this.dbzService.Personajes];
  }

  onDeletePersonajeById(id: string): void {
    this.dbzService.DeletePersonajeById(id);
  }

  onNuevoPersonaje(pj: Personaje): void {
    this.dbzService.NuevoPersonaje(pj);
  }
}
