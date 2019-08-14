import { Component, OnInit, HostListener, DoCheck, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AppService } from '../app.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('contactReveal', [
      transition(':enter', [
        style({
          'opacity' : 0
        }),
        animate('200ms', style({
          'opacity' : 1
        }))]),
      transition(':leave', [
        style({
          'opacity' : 1
        }),
        animate('200ms', style({
          'opacity' : 0
        }))])
    ]),
    trigger('thankYouState', [
      transition(':enter', [
        style({
          'transform' : 'translateY(20px)',
          'opacity' : 0
        }),
        animate('500ms', style({
          'transform' : 'translateY(0px)',
          'opacity' : 1
        }))]),
      transition(':leave', [
        style({
          'opacity' : 1,
          'transform' : 'translateY(0px)'
        }),
        animate('200ms', style({
          'opacity' : 0,
          'transform' : 'translateY(30px)'
        }))])
    ])
  ]
})
export class ContactComponent implements OnInit, DoCheck{

  private form: NgForm;

  @ViewChild('f', { static: false } ) set content(content: NgForm) {
    this.form = content;
 }
  @ViewChild('contactHeader', {static : true}) contactHeader: ElementRef;
  @ViewChild('formWrap', { static: true } ) formWrap : ElementRef;

  contactToggle: boolean = false;
  modalOn: boolean = false;

  contactForm: NgForm;

  name: string
  email: string;
  company: string;
  phone: string
  message: string;
  endpoint: string;

  http: HttpClient;
  

  constructor(private appService: AppService, http: HttpClient, private changeDetector : ChangeDetectorRef) { 
    this.http = http;
  }

  ngOnInit() {
    //Start php via the built in server: $ php -S localhost:8000
    this.endpoint = "http://clarkeglobal.co/truechain/assets/contact.php";
  }
  ngDoCheck() { 
    this.contactToggle = this.appService.contactForm;
  }

  onPost(postData: {name: string; email: string; company: string; phone: string; message: string;}){
    this.name = postData.name;
    this.email = postData.email;
    this.company = postData.company;
    this.phone = postData.phone;
    this.message = postData.message;

    console.log(this.form.value);
    this.http.post(this.endpoint, postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
    this.form.reset();
  }
/*
  hideContact() {
    if (this.contactToggle && this.modalOn) {
      this.appService.contactHide();
      this.modalOn = false;
    }
    else {
      this.modalOn = true;
    }
    this.changeDetector.detectChanges();
  }
  showContact() {
    this.appService.contactAppear();
    this.changeDetector.detectChanges();
  }
  */
}
