import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Router } from '@angular/router';
import { Step4 } from '../../../actions/config.action';
import ISellerie from 'src/app/model/sellerie.model';
import DATA from 'src/app/data';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component {

  seats: any[] = [];
  
  constructor(private store: Store<State>, private router: Router) {}


  Seat!: ISellerie[];

  ngOnInit(): void {
    this.seats = DATA.sellerie;
  }

  selectSeat(Seat: ISellerie) {
    this.store.dispatch(Step4({ Seat }));
    this.router.navigate(['step5']);
  }
}
