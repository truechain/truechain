import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
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
          animate('500ms .7s', style({transform: 'translateY(0)', opacity: 1}))
        ])
      ]
    ),
    trigger(
      'enterParagraph', [
        transition(':enter', [
          style({
            transform: 'translateY(50px)', 
            opacity: 0}),
          animate('500ms 1s', style({transform: 'translateY(0)', opacity: 1}))
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

  constructor() { }

  ngOnInit() {
    //Loads the particle effects from the particle.js library
    particlesJS.load('particles-js', '../assets/particles.json');
  }

}
