import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../reducer";
import {Router} from "@angular/router";
import {Step1, Step2} from "../../../actions/config.action";

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {
  constructor(private store: Store<State>, private router: Router) {}

  selectColor(Color: string) {
    this.store.dispatch(Step2({ Color }));
    this.router.navigate(['step3']);
  }
}
