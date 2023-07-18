import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Router } from '@angular/router';
import { Step6 } from '../../../actions/config.action';
import IAccessoire from 'src/app/model/accessoire.model';
import DATA from 'src/app/data';

import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss'],
})
export class Step6Component {
  Accessoire: { [key: string]: IAccessoire[] } = {};

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.Accessoire = DATA.accessoires;
    console.log(this.Accessoire);
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };

  selectAccessoire(accessoire: IAccessoire) {
    this.store.dispatch(Step6({ Accessoire: accessoire }));
    this.router.navigate(['step7']);
  }
}

