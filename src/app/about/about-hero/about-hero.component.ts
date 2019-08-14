import { Component, OnInit } from '@angular/core';
import { transition, trigger, style, animate } from '@angular/animations';
declare var particlesJS: any;

@Component({
  selector: 'app-about-hero',
  templateUrl: './about-hero.component.html',
  styleUrls: ['./about-hero.component.css'],
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
export class AboutHeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Loads the particle effects from the particle.js library
    particlesJS.load('particles-js', 'http://clarkeglobal.co/truechain/assets/particles.json');
    //particlesJS.load('particles-js', '../assets/particles.json');
  }

}
