import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducer';
import { reducer, State as ReducerState } from '../../../reducer';
import ICar from "../../../model/car.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
})
export class ConfiguratorComponent implements OnInit {
  selectedCar: ICar | undefined;

  constructor(private store: Store<ReducerState>, private router: Router) {
    this.selectedCar = undefined;
  }

  ngOnInit() {
    this.store.pipe(select((state: State) => state.selectedCar)).subscribe(car => {
      this.selectedCar = car;
      console.log(this.selectedCar);
    });
  }
}
