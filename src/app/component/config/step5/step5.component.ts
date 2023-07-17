import { Component, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Router } from '@angular/router';
import { Step5 } from '../../../actions/config.action';
import IEquipment from 'src/app/model/equipment.model';
import DATA from 'src/app/data';

import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss']
})
export class Step5Component  {

  equipment: { [key: string]: IEquipment[] } = {};

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.equipment = DATA.equipements;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  selectEquipment(equipment: IEquipment) {
    this.store.dispatch(Step5({ Equipment: equipment }));
    this.router.navigate(['step6']);
  }
}
