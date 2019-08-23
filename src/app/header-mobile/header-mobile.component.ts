import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css'],
  animations: [
    trigger('mobileMenuState', [
      transition(':enter', [
        style({ 
          'transform' : 'translateY(-300px)'
        }),
        animate('700ms ease-out', style({
          'transform' : 'translateY(0px)'
        }))
      ]),
      transition(':leave', [
        style({
          'transform' : 'translateY(0px)'
        }),
        animate('700ms ease-in', style({
          'transform' : 'translateY(-300px)'
        }))
      ])
    ])
  ]
})
export class HeaderMobileComponent implements OnInit {

  // toggle for mobile meny. True displays it. False hides it.
  mobileToggle: boolean = false;

  // toggle for english language
  languageToggleEN: boolean = false;

  // toggle for chinese language
  languageToggleCN: boolean = false;

  //current URL
  currentURL = window.location.hash;

  constructor(private appService: AppService) { }

  ngOnInit() {
    if(this.currentURL.includes("en")) {
      this.languageToggleEN = true;
      this.languageToggleCN = false;
    }
    else if(this.currentURL.includes("cn")){
      this.languageToggleEN = false;
      this.languageToggleCN = true;
    }
    else{
      this.languageToggleEN = false;
      this.languageToggleCN = false;
    }
  }

  // Toggles the hidden mobile menu by switching the mobileToggle state.
  toggleMobileMenu() {
    this.mobileToggle = !this.mobileToggle;
  }
}