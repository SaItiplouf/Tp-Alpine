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
  selectedCar: ICar[] | undefined; // Déclarer le type comme tableau ou undefined

  constructor(private store: Store<ReducerState>) {}

  ngOnInit() {
    this.store.pipe(select((state: State) => state.selectedCar)).subscribe(car => {
      if (car) {
        this.selectedCar = [car]; // Convertir la voiture unique en tableau
        console.log(this.selectedCar)
      }
    });
  }
}
