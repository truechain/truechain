import { Injectable, ViewChild, ElementRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

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
    this.whyOffset = this.whyElement.nativeElement.offsetTop - 88;
    this.useCasesOffset = this.useCasesElement.nativeElement.offsetTop - 88;
    this.caseStudiesOffset = this.caseStudiesElement.nativeElement.offsetTop - 88;
    this.roadmapOffset = this.roadmapElement.nativeElement.offsetTop - 88;
    this.partnersOffset = this.partnersElement.nativeElement.offsetTop - 88;
    this.downloadOffset = this.downloadElement.nativeElement.offsetTop - 88;
  }
}
