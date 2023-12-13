import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: []
})
export class TopmenuComponent {

  constructor() { }

  public menuItems: MenuItem[] = [
    {
      label: 'Angular Pipes',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
        {
          label: 'Numeros',
          icon: 'pi pi-dollar',
          routerLink: 'numeros'
        }
      ]
    },
    {
      label: 'Pipes Personalizados',
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Otro item',
          icon: 'pi pi-cog',
          routerLink: 'personalizados'
        }
      ]
    }
  ];

}
