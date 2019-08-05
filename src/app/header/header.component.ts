import { Component, OnInit, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[ 
    trigger('divState', [
      state('active', style({
        'background-color': 'rgba(255, 255, 255, 1)'
      })),
      state('inactive', style({
        'background-color': 'rgba(255, 255, 255, 0)'
      })),
      transition('active => inactive', animate('400ms ease-in-out')),
      transition('inactive => active', animate('400ms ease-in'))
    ]),
    trigger('logoBlackState', [
      state('inactive', style({
        'opacity': '0'
      })), 
      state('active', style({
        'opacity': '1'
      }))
    ]),
    trigger('logoWhiteState', [
      state('inactive', style({
        'opacity': '1'
      })), 
      state('active', style({
        'opacity': '0'
      }))
    ])
  ]
})
export class HeaderComponent implements AfterViewInit{

  // Indicates the state of the header. When active, the header displays certain styles
  state = 'inactive';

  currentActive: number = 0;

  constructor(private appService: AppService) { }

  ngAfterViewInit() { 
  }

  // Hostlister dynamically tracks the window scroll position. 
  // Below a certain point, this will switch the state from 'active' to 'inactive' and vise versa.
  // Also, this will highlight the current section in the navbar.
  @HostListener ('window:scroll', ['$event'])
    onWindowScroll($event: any): void {
      const componentPosition = 1;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition) {
        this.state = 'active'
      } 
      else {
        this.state = 'inactive'
      }
  
      if (scrollPosition >= this.appService.homeOffset && scrollPosition < this.appService.whyOffset) {
        this.currentActive = 1;
      } else if (scrollPosition >= this.appService.whyOffset && scrollPosition < this.appService.whatOffset) {
        this.currentActive = 2;
      } else if (scrollPosition >= this.appService.whatOffset && scrollPosition < this.appService.aboutOffset) {
        this.currentActive = 3;
      } else if (scrollPosition >= this.appService.aboutOffset && scrollPosition < this.appService.useCasesOffset) {
        this.currentActive = 4;
      } else if (scrollPosition >= this.appService.useCasesOffset && scrollPosition < this.appService.caseStudiesOffset) {
        this.currentActive = 5;
      } else if (scrollPosition >= this.appService.achievementsOffset && scrollPosition < this.appService.roadmapOffset) {
        this.currentActive = 6;
      } else if (scrollPosition >= this.appService.roadmapOffset && scrollPosition < this.appService.partnersOffset) {
        this.currentActive = 7;
      } else if (scrollPosition >= this.appService.partnersOffset) {
        this.currentActive = 8;
      } else {
        this.currentActive = 0;
      }
      
    }

}
