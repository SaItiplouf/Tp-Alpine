import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducer';
import { reducer, State as ReducerState } from '../../../reducer';
import ICar from "../../../model/car.model";
import { Router } from '@angular/router';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
})


export class ConfiguratorComponent implements OnInit {

  selectedCar: ICar | undefined;
  selectedCar: ICar[] | undefined; 
  totalPrice: number = 0;


  constructor(private store: Store<ReducerState>, private router: Router) {
    this.selectedCar = undefined;
  }

  ngOnInit() {
    this.store.pipe(select((state: State) => state.selectedCar)).subscribe(car => {
      this.selectedCar = car;
      console.log(this.selectedCar);
    });
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

}
    this.store.pipe(select((state: State) => state.selectedCar)).subscribe(cars => {
      if (cars) {
        this.selectedCar = Array.isArray(cars) ? cars : [cars];
        console.log(this.selectedCar);
  
        const totalPrice = this.selectedCar.reduce((acc, curr) => acc + this.calculateTotalPrice(curr), 0);
        console.log("Total Price:", totalPrice);
        this.totalPrice = totalPrice; 
      }
    });
  }
  calculateTotalPrice(car: ICar): number {
    let totalPrice = 0;
  
    totalPrice += car.version.price;
    totalPrice += car.couleurs.price;
    totalPrice += car.jantes.price;
    totalPrice += car.scellerie.price;
  
    for (const key in car.equipements) {
      if (car.equipements.hasOwnProperty(key)) {
        const equipmentList = car.equipements[key];
        totalPrice += equipmentList.reduce((acc, curr) => acc + curr.price, 0);
      }
    }
  
    for (const key in car.accessoires) {
      if (car.accessoires.hasOwnProperty(key)) {
        const accessoryList = car.accessoires[key];
        totalPrice += accessoryList.reduce((acc, curr) => acc + curr.price, 0);
      }
    }
  
    return totalPrice;
  }
  
  
  
}

