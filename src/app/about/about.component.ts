import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.aboutElement = element;
  }

  ngOnInit() {
  }

}
