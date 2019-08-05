import { Component, OnInit, ElementRef } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private appService: AppService, element: ElementRef) { 
    appService.downloadElement = element;
  }

  ngOnInit() {
  }

}
