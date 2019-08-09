import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { StatsComponent } from './stats/stats.component';
import { WhyComponent } from './why/why.component';
import { WhatComponent } from './what/what.component';
import { AboutComponent } from './about/about.component';
import { UseCasesComponent } from './use-cases/use-cases.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { RoadmapsComponent } from './roadmaps/roadmaps.component';
import { PartnersComponent } from './partners/partners.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { CountUpModule } from 'countup.js-angular2';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { DownloadComponent } from './download/download.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMobileComponent,
    HeroComponent,
    FooterComponent,
    StatsComponent,
    WhyComponent,
    WhatComponent,
    AboutComponent,
    UseCasesComponent,
    AchievementsComponent,
    RoadmapsComponent,
    PartnersComponent,
    CaseStudiesComponent,
    DownloadComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    CountUpModule,
    HttpClientModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
