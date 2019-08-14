import { Component, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  windowSize: number = window.innerWidth;

  constructor() { }

  ngAfterViewInit() {
    
  }

  @HostListener('window: resize', ['$event'])
    onResize() {
      this.windowSize = window.innerWidth;
  }
}
