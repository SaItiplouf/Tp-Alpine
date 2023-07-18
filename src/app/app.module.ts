import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionComponent } from './component/version/version.component';

import { SummaryComponent } from './component/videocard/summary.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { ConfiguratorComponent } from '../app/component/config/configurator/configurator.component';
import { Step1Component } from './component/config/step1/step1.component';
import { Step2Component } from './component/config/step2/step2.component';
import { Step3Component } from './component/config/step3/step3.component';
import { Step4Component } from './component/config/step4/step4.component';
import { Step5Component } from './component/config/step5/step5.component';
import { Step6Component } from './component/config/step6/step6.component';
import {HttpClientModule} from "@angular/common/http";
import { reducer } from './reducer';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigNavComponent } from './component/config/config-nav/config-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    VersionComponent,
    SummaryComponent,
    NavbarComponent,
    FooterComponent,
    ConfiguratorComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    ConfigNavComponent,
  
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({reducer : reducer}),
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
