import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Loads the particle effects from the particle.js library
    //particlesJS.load('particles-js', '../assets/particles.json');
  }

}
