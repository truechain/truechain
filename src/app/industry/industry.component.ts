import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.aboutElement = element;
  }

  ngOnInit() {
  }

}