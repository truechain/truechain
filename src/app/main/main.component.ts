import { Component, AfterViewInit, HostListener } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {

  windowSize: number = window.innerWidth; 

  constructor(private appService: AppService) { }

  ngAfterViewInit() {
    this.appService.getOffset();
  }

  @HostListener('window: resize')
    onResize() {
      this.windowSize = window.innerWidth;
  }

}
