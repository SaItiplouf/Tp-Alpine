import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Router } from '@angular/router';
import { Step3 } from '../../../actions/config.action';
import IRim from 'src/app/model/rim.model';
import DATA from 'src/app/data';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {

  wheels!: IRim[];
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.wheels = DATA.jantes
  };

  selectWheels(Wheels: IRim) {
    this.store.dispatch(Step3({ Wheels }));
    this.router.navigate(['step4']);
  }
}
