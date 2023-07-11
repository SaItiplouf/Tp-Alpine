import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Step1 } from 'src/app/actions/config.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component {
  constructor(private store: Store<State>, private router: Router) {}

  selectCar(carId: number) {
    this.store.dispatch(Step1({ carId }));
    this.router.navigate(['step2']);
  }
}
