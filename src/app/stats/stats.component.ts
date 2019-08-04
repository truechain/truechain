import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CountUpOptions, CountUp } from 'countup.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit, AfterViewInit{

  @ViewChild('stats', {static: true}) statSection: ElementRef;
  statsPosition: number;

  statOneVal: number;
  statTwoVal: number
  statThreeVal: number;
  statFourVal: number;


  private customOptions: CountUpOptions = {
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

  constructor() { }

  ngOnInit() {
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
      this.statTwoVal = 60;
      this.statThreeVal = 250000;
      this.statFourVal = 3000;
    } 
  }
}
