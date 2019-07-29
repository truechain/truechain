import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css'],
})
export class HeaderMobileComponent implements OnInit {

  // toggle for mobile meny. True displays it. False hides it.
  mobileToggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // Toggles the hidden mobile menu by switching the mobileToggle state.
  toggleMobileMenu() {
    this.mobileToggle = !this.mobileToggle;

  }
}