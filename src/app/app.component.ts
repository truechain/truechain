import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppService } from './app.service';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit{
  title = 'truechain-website';

  constructor(private appService: AppService) {}

  ngAfterViewInit() {
    this.appService.getOffset();
  }
}
