import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'truechain-website';

  constructor(private router: Router) { }
  ngOnInit() {
    const lang = window.localStorage.getItem('lang')
    const locationHref = window.location.href
    switch (lang) {
      case 'cn':
        if (!locationHref.includes(lang)) {
          window.location.href = '/cn'
        }
        break;
      case 'en':
        if (locationHref.includes('cn')) {
          window.location.href = '/'
        }
        break;
      default:
        break;
    }
  }
}
