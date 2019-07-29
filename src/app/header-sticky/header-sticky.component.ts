import { Component, OnInit ,HostListener, ElementRef, Output} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header-sticky',
  templateUrl: './header-sticky.component.html',
  styleUrls: ['./header-sticky.component.css'],
  animations:[ 
    trigger('divState', [
      state('inactive', style({
        'opacity': '0'
      })), 
      state('active', style({
        'opacity' : '1'
      })),
      transition('inactive => active', animate('400ms ease-in')),
      transition('active => inactive', animate('400ms ease-out'))
    ])
  ]
})
export class HeaderStickyComponent implements OnInit {

 // Indicates the state of the header. When active, the header displays
 state = 'inactive';


  constructor(public el: ElementRef) { }

  ngOnInit() {
    
  }

  // Hostlister dynamically tracks the window scroll position. 
  // Below a certain point, this will switch the state from 'active' to 'inactive' and vise versa.
  @HostListener('window:scroll', ['$event'])
    onWindowScroll($event: any): void {
      const componentPosition = 102;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= componentPosition) {
        this.state = 'active'
      } 
      else {
        this.state = 'inactive'
      }
    }
   
}
