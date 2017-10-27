import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TabsPage } from './../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public fb: FormBuilder) {

      let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      this.loginForm = this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.pattern(regExp)])],
        senha: ['', Validators.compose([Validators.required ,Validators.minLength(6)])]
      })
    }

  goApplication(){
    if(this.loginForm.valid){
      this.navCtrl.setRoot(TabsPage);
    }
  }

}
