import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.css']
})
export class WhatComponent implements OnInit {

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.whatElement = element;
  }

  ngOnInit() {
  }

  getContact() {
    this.appService.contactAppear();
  }
}
