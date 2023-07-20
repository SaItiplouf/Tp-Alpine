import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Router } from '@angular/router';
import { Step4 } from '../../../actions/config.action';
import ISellerie from 'src/app/model/sellerie.model';
import DATA from 'src/app/data';
import ICar from 'src/app/model/car.model';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component {
  car!:ICar;
  seats: any[] = [];
  
  constructor(private store: Store<{ reducer: State }>, private router: Router) {}

  ngOnInit(): void {
    this.seats = DATA.sellerie;
    this.store.select(state=> state.reducer.selectedCar ).subscribe(selectedCar => {
      console.log("ici", selectedCar)
      if (selectedCar){
        this.car = selectedCar
      }
    })
  }

  selectSeat(Seat: ISellerie) {
    this.store.dispatch(Step4({ Seat }));
    this.router.navigate(['step5']);
  }
}
