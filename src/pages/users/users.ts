import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AppdssProvider } from "../../providers/appdss-provider";

import { UsersDetailsPage } from './../users-details/users-details';
import { User } from '../../domain/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers:[
    AppdssProvider
  ] 
})
export class UsersPage {

  public users: User[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public service: AppdssProvider ) {
  }

  ionViewDidLoad() {
    this.getUsers();
  }

  getUsers(){
    this.service.getUsers().then(res =>{
      console.log(res);
      this.users = res.success;
    })
  }

  getUserDetails(user: User){
    this.navCtrl.push(UsersDetailsPage,{
      user: user
    });
  }

}
