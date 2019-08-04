import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AppService } from '../app.service';
declare var particlesJS: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger(
      'enterLogo', [
        transition(':enter', [
          style({
            opacity: 0}),
          animate('500ms .3s', style({opacity: 1}))
        ])
      ]
    ),
    trigger(
      'enterHeader', [
        transition(':enter', [
          style({
            transform: 'translateY(50px)', 
            opacity: 0}),
          animate('400ms .7s', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    ),
    trigger(
      'enterParagraph', [
        transition(':enter', [
          style({
            transform: 'translateY(30px)', 
            opacity: 0}),
          animate('400ms .8s', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    ),
    trigger(
      'enterButton', [
        transition(':enter', [
          style({
            transform: 'translateY(50px)', 
            opacity: 0}),
          animate('500ms 1s', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    )
  ]
})
export class HeroComponent implements OnInit {

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.homeElement = element;
  }

  ngOnInit() {
    //Loads the particle effects from the particle.js library
    //particlesJS.load('particles-js', 'http://clarkeglobal.co/truechain/assets/particles.json');
    particlesJS.load('particles-js', '../assets/particles.json');
  }

}
