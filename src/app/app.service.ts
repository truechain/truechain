import { Injectable, ViewChild, ElementRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  //currentURL
  currentURL: string = window.location.pathname;

  //Determines if the website is english
  public english: boolean = false;

  //Determines if the website is chinese
  public chinese: boolean = true;

  // Elements that correlate to sections //
  public homeElement: ElementRef;
  public whatElement: ElementRef;
  public aboutElement: ElementRef;
  public whyElement: ElementRef;
  public useCasesElement: ElementRef;
  public caseStudiesElement: ElementRef;
  public roadmapElement: ElementRef;
  public partnersElement: ElementRef;
  public downloadElement: ElementRef;

  // Offsets for the elements compared to the top of the page 
  public currentActive: number = 0;
  public homeOffset: number = null;
  public whatOffset: number = null;
  public aboutOffset: number = null;
  public whyOffset: number = null;
  public useCasesOffset: number = null;
  public caseStudiesOffset: number = null;
  public roadmapOffset: number = null;
  public partnersOffset: number = null;
  public downloadOffset: number = null;

  constructor() { }

  // sets the offsets to the respective sections
  getOffset() {
    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.whatOffset = this.whatElement.nativeElement.offsetTop - 99;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop - 99;
    this.whyOffset = this.whyElement.nativeElement.offsetTop - 99;
    this.useCasesOffset = this.useCasesElement.nativeElement.offsetTop - 99;
    this.caseStudiesOffset = this.caseStudiesElement.nativeElement.offsetTop - 99;
    this.roadmapOffset = this.roadmapElement.nativeElement.offsetTop - 99;
    this.partnersOffset = this.partnersElement.nativeElement.offsetTop - 99;
    this.downloadOffset = this.downloadElement.nativeElement.offsetTop + 360;
  }

  // resets the offsets to 0
  resetOffet() {
    this.homeOffset = 0;
    this.whatOffset = 0;
    this.aboutOffset = 0;
    this.whyOffset = 0;
    this.useCasesOffset = 0;
    this.caseStudiesOffset = 0;
    this.roadmapOffset = 0;
    this.partnersOffset = 0;
    this.downloadOffset = 0;
  }

  //gets Current URL path
  getURL() {
    this.currentURL = window.location.pathname;
  }

  //sets boolean value of languages depending on URL path
  whichLanguage() {
    this.currentURL = window.location.pathname;

    if (this.currentURL.includes('/en')) {
      this.english = true;
      this.chinese = false;
    }
    else if (this.currentURL.includes('/cn')) {
      this.english = false;
      this.chinese = true;
    }
    else {
      this.english = true;
      this.chinese = false;
    }
  }


  
}
