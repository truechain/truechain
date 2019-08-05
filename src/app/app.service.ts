import { Injectable, ViewChild, ElementRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // Elements that correlate to sections //
  public homeElement: ElementRef;
  public whyElement: ElementRef;
  public whatElement: ElementRef;
  public aboutElement: ElementRef;
  public useCasesElement: ElementRef;
  public caseStudiesElement: ElementRef;
  public achievementsElement: ElementRef;
  public roadmapElement: ElementRef;
  public partnersElement: ElementRef;

  // Offsets for the elements compared to the top of the page 
  public currentActive: number = 0;
  public homeOffset: number = null;
  public whyOffset: number = null;
  public whatOffset: number = null;
  public aboutOffset: number = null;
  public useCasesOffset: number = null;
  public caseStudiesOffset: number = null;
  public achievementsOffset: number = null;
  public roadmapOffset: number = null;
  public partnersOffset: number = null;

  constructor() { }

  // sets the offsets to the respective sections
  getOffset() {
    this.roadmapOffset = this.roadmapElement.nativeElement.offsetTop;
    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.whyOffset = this.whyElement.nativeElement.offsetTop - 100;
    this.whatOffset = this.whatElement.nativeElement.offsetTop -100;
    this.aboutOffset = this.aboutElement.nativeElement.offsetTop;
    this.useCasesOffset = this.useCasesElement.nativeElement.offsetTop;
    this.caseStudiesOffset = this.caseStudiesElement.nativeElement.offsetTop;
    this.achievementsOffset = this.achievementsElement.nativeElement.offsetTop;
    this.roadmapOffset = this.roadmapElement.nativeElement.offsetTop;
    this.partnersOffset = this.partnersElement.nativeElement.offsetTop;
  }
}
