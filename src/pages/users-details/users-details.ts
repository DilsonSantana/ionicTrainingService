import { Component, Output } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../domain/user";

@Component({
  selector: 'page-users-details',
  templateUrl: 'users-details.html',
})
export class UsersDetailsPage {

  @Output() public user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ionViewDidLoad Constructor');
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad UsersDetails');
    // this.user = this.navParams.get('user');
    // console.log(this.user);
  }

}
