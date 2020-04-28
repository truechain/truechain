import { Component, OnInit, ElementRef } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';
import { AppService } from '../app.service';
declare var particlesJS: any;


@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.css'],
  animations: [
    trigger(
      'enterHeader', [
        transition(':enter', [
          style({
            transform: 'translateY(50px)',
            opacity: 0}),
          animate('400ms 0.3s ease-out', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    ),
    trigger(
      'enterButton', [
        transition(':enter', [
          style({
            transform: 'translateY(50px)',
            opacity: 0}),
          animate('500ms .5s ease-in', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    ),
  ]
})
export class DownComponent implements OnInit {

  english: boolean = false;
  chinese: boolean = true;
  korean: boolean = false;
  isios: boolean = false;
  isand: boolean = false;
  isweb: boolean = false;

  constructor(private appService: AppService, element: ElementRef) {
    appService.downElement = element;
  }

  ngOnInit() {
    particlesJS.load('particles-js', '../../assets/particles.json');
    this.appService.whichLanguage();
    this.english = this.appService.english;
    this.chinese = this.appService.chinese;
    this.korean = this.appService.korean;
    this.isios = this.appService.isios;
    this.isand = this.appService.isand;
    this.isweb = this.appService.isweb;
  }

}
