import { Component, OnInit, HostListener } from '@angular/core';
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
export class HeaderComponent implements OnInit{

  // Indicates the state of the header. When active, the header displays certain styles
  state = 'inactive';

  // About page?
  aboutPage: boolean;

  // boolean to toggle language to english
  english: boolean;

  // boolean to toggle language to chinese
  chinese: boolean;

  // path for engish version of the site
  englishPath: string;

  //path for chinese version of the site
  chinesePath: string;

  //Url path for logo link
  logoPath: string = '';

  // current active nav item
  currentActive: number = 0;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.whichLanguage();

    if(this.appService.currentURL.includes("about")) {
      this.aboutPage = true;
    }
    else {
      this.aboutPage = false;
    }

    this.english = this.appService.english;
    this.chinese = this.appService.chinese;

    this.getLogoPath();
  }

  //retrieve the url path if the logo is clicked depending on language
  getLogoPath() {
    this.appService.whichLanguage;

    if(this.appService.chinese) {
      this.logoPath = "/cn";
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
    window.localStorage.setItem('lang','en')
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
    window.localStorage.setItem('lang', 'cn')
    this.appService.currentURL = window.location.href;

    if(this.appService.currentURL.includes("about")) {
      this.chinesePath = "/cn/about";
    }
    else {
      this.chinesePath = "/cn"
    }
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

    if (scrollPosition >= this.appService.homeOffset && scrollPosition < this.appService.whatOffset) {
      this.currentActive = 1;
    } else if (scrollPosition >= this.appService.whatOffset && scrollPosition < this.appService.whyOffset) {
      this.currentActive = 2;
    } else if (scrollPosition >= this.appService.whyOffset && scrollPosition < this.appService.useCasesOffset) {
      this.currentActive = 3;
    } else if (scrollPosition >= this.appService.useCasesOffset && scrollPosition < this.appService.caseStudiesOffset) {
      this.currentActive = 4;
    } else if (scrollPosition >= this.appService.caseStudiesOffset && scrollPosition < this.appService.roadmapOffset) {
      this.currentActive = 5;
    } else if (scrollPosition >= this.appService.roadmapOffset && scrollPosition < this.appService.partnersOffset) {
      this.currentActive = 6;
    } else if (scrollPosition >= this.appService.partnersOffset) {
      this.currentActive = 7;
    } else {
      this.currentActive = 0;
    }

  }

}
