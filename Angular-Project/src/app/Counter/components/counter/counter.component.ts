import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public title:string = 'Project primera app';
  public counter:number = 10;

  public incrementar() : void {
    this.counter++;
  }

  public decrementar() : void {
    this.counter--;
  }
}
