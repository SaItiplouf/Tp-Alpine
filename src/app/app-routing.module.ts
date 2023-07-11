import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfiguratorComponent} from "./component/config/configurator/configurator.component";
import {AppComponent} from "./app.component";
import {Step1Component} from "./component/config/step1/step1.component";
import {Step2Component} from "./component/config/step2/step2.component";
import {Step3Component} from "./component/config/step3/step3.component";
import {Step4Component} from "./component/config/step4/step4.component";
import {Step5Component} from "./component/config/step5/step5.component";

const routes: Routes = [
  { path: '', component: Step1Component, title: 'Step1'},
  { path: 'step2', component: Step2Component, title: 'Step2'},
  { path: 'step3', component: Step3Component, title: 'Step3'},
  { path: 'step4', component: Step4Component, title: 'Step4'},
  { path: 'step5', component: Step5Component, title: 'Step5'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
