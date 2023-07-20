import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Router } from '@angular/router';
import {RemoveAccessoire, Step6} from '../../../actions/config.action';
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
  activeTab: string | null = null;

  
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.Accessoire = DATA.accessoires;

    if (!this.selectedCategory && this.Accessoire) {
      const keys = Object.keys(this.Accessoire);
      if (keys.length > 0) {
        this.selectedCategory = keys[0];
      }
    }
    if (this.Accessoire && Object.keys(this.Accessoire).length > 0) {
      this.selectedCategory = Object.keys(this.Accessoire)[0];
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
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.activeTab = category;
    // Delay the initialization of the carousel
    // setTimeout(() => {
    //   window.dispatchEvent(new Event('resize'));
    // }, 0);
  }
  toggleAccessoireSelection(accessoire: IAccessoire) {
    if (this.selectedAccessoire[accessoire.name]) {
      if (this.selectedCategory !== null) {
      this.selectedAccessoire[accessoire.name] = false;
      this.store.dispatch(RemoveAccessoire({ accessoire_category: this.selectedCategory , Accessoire : accessoire }));
      console.log('Removed', accessoire.name)
    }
    }
    else {
      if (this.selectedCategory !== null) {
        this.selectedAccessoire[accessoire.name] = true;
      this.store.dispatch(Step6({ accessoire_category: this.selectedCategory , Accessoire : accessoire }));
      console.log('Added', accessoire.name)
    }
    }
  }
}

