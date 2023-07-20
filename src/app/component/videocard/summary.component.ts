import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videocard',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  constructor(private router: Router) {}

  scrollToConfigurator() {
    this.router.navigate(['']); // Il y avait une faute de frappe ici ("naviguate" -> "navigate")
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
