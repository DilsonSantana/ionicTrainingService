import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { AppdssProvider } from "../../providers/appdss-provider";
import { Post } from "../../domain/post";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [
    AppdssProvider
  ]
})
export class HomePage {

  public posts: Post[];

  constructor(
    public navCtrl: NavController, 
    public serviceProd: AppdssProvider,
    public loadingCtrl: LoadingController ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });
    loading.present();

    this.getPost();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  getPost() {
    this.serviceProd.getPosts().then(res => {
      this.posts = res.success;
      this.posts.forEach(post => {
        post.title = post.title.substring(0, 15) + '...';
        post.body = post.body.substring(0, 40) + '...';
      })
      console.log('post: ' + this.posts);
    })
  }

}
