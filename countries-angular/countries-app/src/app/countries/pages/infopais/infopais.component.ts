import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-infopais',
  templateUrl: './infopais.component.html',
  styles: [
  ]
})
export class InfopaisComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _countriesService: CountriesService,
    private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.params
        .subscribe(({ code }) => {
          console.log(code);
          // this._countriesService.getCountryByAlpha(id)
          //     .subscribe(pais => {

          //     });
        });
  }

}
