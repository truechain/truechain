import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css']
})
export class UseCasesComponent implements OnInit {

  english: boolean = false;
  chinese: boolean = true;
  korean: boolean = false;

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.useCasesElement = element;
  }

  ngOnInit() {
    this.appService.whichLanguage();
    this.english = this.appService.english;
    this.chinese = this.appService.chinese;
    this.korean = this.appService.korean;
  }
}
