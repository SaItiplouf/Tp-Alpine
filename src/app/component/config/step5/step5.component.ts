import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Router } from '@angular/router';
import IEquipment from 'src/app/model/equipment.model';
import DATA from 'src/app/data';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.scss'],
})

export class Step5Component implements OnInit {
  equipment: { [key: string]: IEquipment[] } = {};
  selectedEquipment: { [key: string]: boolean } = {};
  selectedCategory: string | null = null; // Initialize selectedCategory to null

  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.equipment = DATA.equipements;

    // Check if selectedCategory is null, then set it to the first key of equipment object
    if (!this.selectedCategory && this.equipment) {
      const keys = Object.keys(this.equipment);
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

  toggleEquipmentSelection(equipment: IEquipment) {
    if (this.selectedEquipment[equipment.name]) {
      this.selectedEquipment[equipment.name] = false;
    } else {
      this.selectedEquipment[equipment.name] = true;
      // this.store.dispatch(Step5({ equipment_category , Equipment: equipment }));
    }
  }

}
