import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import DATA from '../app/data';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tp-Alpine';

  constructor(private router: Router, private http: HttpClient) {}






  ngOnInit() {
    this.router.navigate([""])
  }
}


