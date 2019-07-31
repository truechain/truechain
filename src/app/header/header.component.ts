import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[ 
    trigger('divState', [
      state('inactive', style({
        'background-color': 'rgba(0, 0, 0, 0)'
      })), 
      state('active', style({
        'background-color': 'rgba(255, 255, 255, 1)'
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
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
    ]),
    trigger('navState', [
      state('inactive', style({
        'color' : '#fff',
        'background-color' : 'rgba(0,0,0,0)'
      })), 
      state('active', style({
        'color': '#252932'
      }))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  // Indicates the state of the header. When active, the header displays
 state = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  // Hostlister dynamically tracks the window scroll position. 
  // Below a certain point, this will switch the state from 'active' to 'inactive' and vise versa.
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
    }

}
