import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../reducer";
import {Router} from "@angular/router";
import {Step3} from "../../../actions/config.action";

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {
  constructor(private store: Store<State>, private router: Router) {}
  selectWheels(Wheels: string) {
    this.store.dispatch(Step3({ Wheels }));
    this.router.navigate(['step4']);
  }
}
