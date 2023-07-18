import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Step1 } from 'src/app/actions/config.action';
import { Router } from '@angular/router';
import DATA from '../../../../app/data';
import ICar from 'src/app/model/car.model';
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit{
  constructor(private store: Store<State>, private router: Router) {}

  cars: any;
  selectCar(car: ICar) {
    console.log('ici', car);
    this.store.dispatch(Step1({ car }));
    this.router.navigate(['step2']);
  }

  ngOnInit() {
    const cars = DATA.cars;
    console.log('DataCars', cars);
    this.cars = cars
  }

}
