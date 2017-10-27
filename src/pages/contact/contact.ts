import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
public error: any;
public path: any;
  constructor(public navCtrl: NavController, public nav: NavParams) {
    this.error = this.nav.get('error');
    this.path = this.nav.get('path');
  }

}
