import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  english: boolean = false;
  chinese: boolean = true;
  korean: boolean = false;

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.partnersElement = element;
  }

  ngOnInit() {
    this.appService.whichLanguage();
    this.english = this.appService.english;
    this.chinese = this.appService.chinese;
    this.korean = this.appService.korean;
  }

}
