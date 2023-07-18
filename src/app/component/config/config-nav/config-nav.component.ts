import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-config-nav',
  templateUrl: './config-nav.component.html',
  styleUrls: ['./config-nav.component.scss']
})
export class ConfigNavComponent {
customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        margin : 0,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          250: {
            items: 2
          },
          500: {
            items: 3
          },
          750: {
            items: 4
          },
          1000: {
            items: 5
          },
        },
        nav: false
      }

    }

