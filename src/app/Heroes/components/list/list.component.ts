import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroNames: string[] = ['Batman','Superman', 'Hulk', 'Thor'];
  heroeBorrado?: string = '';

  BorrarHeroe(): void{
    if (this.heroNames.length <= 0) return;
    this.heroeBorrado = this.heroNames.pop();
  }
}
