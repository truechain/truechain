import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})
export class CaseStudiesComponent implements OnInit {

  english: boolean = false;
  chinese: boolean = true;
  korean: boolean = false;

  constructor(private appService: AppService, element: ElementRef) {
    this.appService.caseStudiesElement = element;
  }

  ngOnInit() {
    this.appService.whichLanguage();
    this.english = this.appService.english;
    this.chinese = this.appService.chinese;
    this.korean = this.appService.korean;
  }

}
