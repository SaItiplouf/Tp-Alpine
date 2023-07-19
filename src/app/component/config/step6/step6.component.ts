import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Router } from '@angular/router';
import { Step6 } from '../../../actions/config.action';
import IAccessoire from 'src/app/model/accessoire.model';
import DATA from 'src/app/data';

import { OwlOptions } from 'ngx-owl-carousel-o';
import IEquipment from "../../../model/equipment.model";
@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss'],
})
export class Step6Component implements OnInit {
  Accessoire: { [key: string]: IAccessoire[] } = {};
  selectedAccessoire: { [key: string]: boolean } = {};
  selectedCategory: string | null = null;
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.Accessoire = DATA.accessoires;

    if (!this.selectedCategory && this.Accessoire) {
      const keys = Object.keys(this.Accessoire);
      if (keys.length > 0) {
        this.selectedCategory = keys[0];
      }
    }
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    margin: 20,
    nav: true,
    dots: false,
    navSpeed: 600,
    navText: [
      '<i class="fa-solid fa-chevron-left fa-lg"></i>',
      '<i class="fa-solid fa-chevron-right fa-lg"></i>'
    ],
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
  };
  selectCategory(category: string){
    this.selectedCategory = category
  }
  selectAccessoire(accessoire: IAccessoire) {
    this.store.dispatch(Step6({ Accessoire: accessoire }));
    this.router.navigate(['step7']);
  }
  toggleAccessoireSelection(accessoire: IAccessoire) {
    if (this.selectedAccessoire[accessoire.name]) {
      this.selectedAccessoire[accessoire.name] = false;
      // remove accessoire from selectedcar
    } else {
      this.selectedAccessoire[accessoire.name] = true;
      // add accessoire from selectedcar
      // this.store.dispatch(Step6({ equipment_category , Accessoire : accessoire }));
    }
  }
}

