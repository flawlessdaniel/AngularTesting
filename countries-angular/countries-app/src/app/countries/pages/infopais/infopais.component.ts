import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries';

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

    public Pais?: Country;

  ngOnInit(): void {
    this._activatedRoute.params
    .pipe(
      switchMap(({ code }) => this._countriesService.getCountryByAlpha(code)),
    )
    .subscribe(resp => {
      if (resp !== null) {
        this.Pais = resp;
      }
    });
  }

}
