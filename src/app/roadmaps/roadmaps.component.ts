import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-roadmaps',
  templateUrl: './roadmaps.component.html',
  styleUrls: ['./roadmaps.component.css']
})
export class RoadmapsComponent implements OnInit{

  constructor(private appService: AppService, element: ElementRef) { 
    this.appService.roadmapElement = element;
  }

  ngOnInit() { }
}
