import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-footer', 
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
