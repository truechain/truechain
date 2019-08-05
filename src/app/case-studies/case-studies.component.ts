import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})
export class CaseStudiesComponent implements OnInit {

  constructor(private appService: AppService, element: ElementRef) {
    this.appService.caseStudiesElement = element;
  }

  ngOnInit() {
  }

}
