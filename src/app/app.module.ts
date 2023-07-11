import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionComponent } from './component/version/version.component';
import { ColorComponent } from '../app/component/config/color/color.component';
import { RimComponent } from '../app/component/config/rim/rim.component';
import { SummaryComponent } from './component/videocard/summary.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ConfiguratorComponent } from '../app/component/config/configurator/configurator.component';
import { Step1Component } from './component/config/step1/step1.component';
import { Step2Component } from './component/config/step2/step2.component';
import { Step3Component } from './component/config/step3/step3.component';
import {HttpClientModule} from "@angular/common/http";
import { OpenConfigComponent } from './component/open-config/open-config.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionComponent,
    ColorComponent,
    RimComponent,
    SummaryComponent,
    NavbarComponent,
    FooterComponent,
    ConfiguratorComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    OpenConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
