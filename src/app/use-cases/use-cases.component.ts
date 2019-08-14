import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css']
})
export class UseCasesComponent implements OnInit {

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.useCasesElement = element;
  }

  ngOnInit() {
  }
}
