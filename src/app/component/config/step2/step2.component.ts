import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducer";
import {Router} from "@angular/router";
import {Step2} from "../../../actions/config.action";
import IColor from 'src/app/model/color.model';
import DATA from 'src/app/data';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  constructor(private store: Store<State>, private router: Router) {}
  colors!: IColor[];


  ngOnInit(): void {
    this.colors = DATA.couleurs
    this.store.pipe(select((state: State) => state.selectedCar)).subscribe(selectedCar => {
      console.log('Selected Car:', selectedCar);
    });
  };

  selectColor(Color: IColor) {
    this.store.dispatch(Step2({ Color }));
    this.router.navigate(['step3']);
  }
}
