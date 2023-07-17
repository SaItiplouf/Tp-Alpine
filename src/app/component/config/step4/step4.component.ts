import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../reducer";
import {Router} from "@angular/router";
import {Step4} from "../../../actions/config.action";

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component {
  constructor(private store: Store<State>, private router: Router) {}
  selectSeat(Seat: string) {
    this.store.dispatch(Step4({ Seat }));
    this.router.navigate(['step5']);
  }
}
