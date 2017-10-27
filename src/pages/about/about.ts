import { ContactPage } from './../contact/contact';
import { UsersPage } from './../users/users';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [[Camera]]
})
export class AboutPage {
  // public options: any;
  public base64Image: any;

  constructor(
    public navCtrl: NavController,
    public camera: Camera) { }

  public takePicture() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log(err);
      this.navCtrl.push(ContactPage, {error: err});
    });
  }

  public takeLibrary() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log(err);
      this.navCtrl.push(ContactPage, {error: err});
    });
  }

  public takeGalery() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log(err);
      this.navCtrl.push(ContactPage, {error: err});
    });
  }


  // public takePicture() {
  //   this.base64Image = "";
  //   this.options = {
  //     quality: 50,
  //     sourceType: this.camera.PictureSourceType.CAMERA,
  //     targetWidth: 1000,
  //     targetHeight: 1000,
  //     saveToPhotoAlbum: true,
  //     correctOrientation: true,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  //   this.camera.getPicture(this.options)
  //     .then((imageData) => {
  //       this.base64Image = "data:image/jpeg;base64," + imageData;
  //       this.navCtrl.pop(AboutPage);
  //     }).then((path) => {
  //       this.navCtrl.push(ContactPage, { error: path});
  //     }, error => {
  //       this.navCtrl.push(ContactPage, { error: error});
  //     });
  // }

}
