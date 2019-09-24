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

  // boolean to toggle language to english
  english: boolean;

  // boolean to toggle language to chinese
  chinese: boolean;

  // boolean to toggle language to korean
  korean: boolean;

  // path for engish version of the site
  englishPath: string;

  //path for chinese version of the site
  chinesePath: string;

  //path for korean version of the site
  koreanPath: string;

  //Url path for logo link
  logoPath: string = '';

  // toggle for mobile meny. True displays it. False hides it.
  mobileToggle: boolean = false;

  //current URL
  currentURL = window.location.hash;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.whichLanguage();
    this.english = this.appService.english;
    this.chinese = this.appService.chinese;
    this.korean = this.appService.korean;

    this.getLogoPath();
  }

  // Toggles the hidden mobile menu by switching the mobileToggle state.
  toggleMobileMenu() {
    this.mobileToggle = !this.mobileToggle;
  }

   //retrieve the url path if the logo is clicked depending on language
   getLogoPath() {
    this.appService.whichLanguage;

    if(this.appService.chinese) {
      this.logoPath = "/cn";
    }
    else if(this.appService.korean) {
      this.logoPath = "kr";
    }
    else if(this.appService.english) {
      this.logoPath = "";
    }
    else {
      this.logoPath = "";
    }
  }

  //switches URL path to english version of the site
  switchToEnglish(){

    this.appService.currentURL = window.location.href;

    if(this.appService.currentURL.includes("about")) {
      this.englishPath = "/about";
    }
    else {
      this.englishPath = "#"
    }
  }

  //switches URL path to chinese version of the site
  switchToChinese(){

    this.appService.currentURL = window.location.href;

    if(this.appService.currentURL.includes("about")) {
      this.chinesePath = "/cn/about";
    }
    else {
      this.chinesePath = "/cn"
    }
  }
  //switches URL path to korean version of the site
  switchToKorean(){
    window.localStorage.setItem('lang', 'kr')
    this.appService.currentURL = window.location.href;

    if(this.appService.currentURL.includes("about")) {
      this.koreanPath = "/kr/about";
    }
    else {
      this.koreanPath = "/kr"
    }
  }
}