import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CountUpOptions, CountUp } from 'countup.js';
import { AppService } from '../app.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit, AfterViewInit{

  english: boolean = false;
  chinese: boolean = true;
  korean: boolean = false;

  @ViewChild('stats', {static: true}) statSection: ElementRef;
  statsPosition: number;

  statOneVal: number;
  statTwoVal: number;
  statThreeVal: number;
  statFourVal: number;

  statTwoValChinese: number;
  statThreeValChinese: number;

  statThreeValKorean: number;


  public customOptions: CountUpOptions = {
    startVal: 0,
    decimalPlaces: 0,
    duration: 2.5,
    useEasing: true,
    useGrouping: true,
    smartEasingThreshold: 999,
    smartEasingAmount: 333,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
  };

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.whichLanguage();
    this.english = this.appService.english;
    this.chinese = this.appService.chinese;
    this.korean = this.appService.korean;
  }

  ngAfterViewInit() {
    this.statsPosition = this.statSection.nativeElement.scrollTop;
  }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll($event: any) {
    const componentPosition = this.statsPosition;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.statOneVal = 1200;
      this.statTwoVal = 20;
      this.statThreeVal = 250000;
      this.statFourVal = 3000;

      this.statTwoValChinese = 2000;
      this.statThreeValChinese = 25;

      this.statThreeValKorean = 2000;
    }
  }
}
