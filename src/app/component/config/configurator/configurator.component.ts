import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducer';
import { reducer, State as ReducerState } from '../../../reducer';
import ICar from "../../../model/car.model";

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
})


export class ConfiguratorComponent implements OnInit {
  selectedCar: ICar[] | undefined; 
  totalPrice: number = 0;

  constructor(private store: Store<ReducerState>) {}

  ngOnInit() {
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