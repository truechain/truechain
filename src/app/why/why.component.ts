import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.whyElement = element;
  }

  ngOnInit() {
  }
}
