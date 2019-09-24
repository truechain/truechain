import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  english: boolean = false;
  chinese: boolean = true;
  korean: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.whichLanguage();
    this.english = this.appService.english;
    this.chinese = this.appService.chinese;
    this.korean = this.appService.korean;
  }
}
