import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.partnersElement = element;
  }

  ngOnInit() {
  }

}
