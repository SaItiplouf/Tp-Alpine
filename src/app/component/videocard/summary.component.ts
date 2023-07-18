import {Component, ElementRef, ViewChild} from '@angular/core';
import {ConfiguratorComponent} from "../config/configurator/configurator.component";

@Component({
  selector: 'app-videocard',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  scrollToConfigurator() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
