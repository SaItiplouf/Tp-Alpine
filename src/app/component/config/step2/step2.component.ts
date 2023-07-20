import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../../reducer";
import {Router} from "@angular/router";
import {Step2} from "../../../actions/config.action";
import IColor from 'src/app/model/color.model';
import DATA from 'src/app/data';
import ICar from "../../../model/car.model";

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  constructor(private store: Store<{reducer : State}>, private router: Router) {}
  colors!: IColor[];
  car?: ICar;

  ngOnInit(): void {
    this.colors = DATA.couleurs
    this.store.select(state=> state.reducer.selectedCar ).subscribe(selectedCar => {
      console.log("ici", selectedCar)
      if (selectedCar){
        this.car = selectedCar
      }
    })
  };

  selectColor(Color: IColor) {
    this.store.dispatch(Step2({ Color }));
    this.router.navigate(['step3']);
  }
}
