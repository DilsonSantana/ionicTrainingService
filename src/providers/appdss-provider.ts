import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppdssProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppdssProvider {

  public data: any;

  constructor(public http: Http) {
    console.log('Hello AppdssProvider Provider');
    this.http = http;
    this.data = null;
  }


  getUsers(): Promise<any> {
    let response = {
      error: {},
      success: {}
    }

    return new Promise<any>(resolve => {
      var body = '';
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let args = { headers: headers, method: 'get', body: body }
      let options = new RequestOptions(args);
      this.http.request('https://jsonplaceholder.typicode.com/users', options)
      .subscribe(res =>{
        console.log('user: ' + res);
        response.success = this.extractData(res);
        resolve(response);
      }, error => {
        console.log('Error GetUser' + error);
        response.error = this.handleError(error);
        resolve(response);
      })
    });
  }

  getPosts(): Promise<any> {
    let response = {
      error: {},
      success: {}
    }
    return new Promise<any>(resolve => {
      var body = '';
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let args = { headers: headers, method: "get", body: body };
      let options = new RequestOptions(args);

      this.http.request('https://jsonplaceholder.typicode.com/posts', options)
        .subscribe(data => {
          console.log(data);
          response.success = this.extractData(data);
          resolve(response);
        }, error => {
          console.log("resposta http: ", error);
          response.success = this.handleError(error);
          resolve(response);
        });
    })
  }


  private extractData(res: any) {
    let body = {};
    console.log(res);
    try {
      body = JSON.parse(res._body);
    } catch (error) {
      console.log(error);
    }

    return body || {};
  }

  private handleError(error: any) {
    //console.log(JSON.stringify(error))
    console.log(error)
    return error;
  }


}
