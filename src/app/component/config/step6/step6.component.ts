import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../reducer';
import { Router } from '@angular/router';
import { Step6 } from '../../../actions/config.action';
import IAccessoire from 'src/app/model/accessoire.model';
import DATA from 'src/app/data';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component {
  accessoire: { [key: string]: IAccessoire[] } = {};
  
  constructor(private store: Store<State>, private router: Router) {}

  ngOnInit(): void {
    this.accessoire = DATA.accessoires;
  }

  selectAccessoire(accessoire: IAccessoire) {
    this.store.dispatch(Step6({ Accessoire: accessoire }));
    this.router.navigate(['step7']);
  }
}

