import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducer';
import { reducer, State as ReducerState } from '../../../reducer';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
})
export class ConfiguratorComponent  {
  selectedCarId!: number | null;

  constructor(private store: Store<ReducerState>) {}

  // ngOnInit() {
  //   console.log(this.selectedCarId);
  //   this.store
  //     .pipe(select((state: ReducerState) => state))
  //     .subscribe((carId) => {
  //       this.selectedCarId = carId;
  //     });
  // }
}
