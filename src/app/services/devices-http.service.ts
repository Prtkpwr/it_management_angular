import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";

@Injectable()
export class DevicesHttpService {

  public Url = 'http://localhost:3001/api/v1'
  public showUserNav:any;

  constructor(private _http: HttpClient, public route: Router) {
    console.log("HTTP service is called")
  }

  // Error Handler for HTTP
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }
  // Services Start

  public doLoginPost(data): any {
    //return this._httpClient.post((loginBaseUrl + url),data);
    return this._http.post((this.Url + '/user/validate/'), data)
  }
  public isLoggedIn(): any {
    if (localStorage.getItem('loggedin')) {
      return true;
    } else {
      return false;
    }
  }
  public isAdmin(): any {
    let data = localStorage.getItem('loggedin');
    if (data == "admin") {
      return true;
    } else {
      return false;
    }
  }
  public doLogout() {
    localStorage.removeItem('loggedin');
    this.route.navigate(["/login"]);
  }
  public checkForNav(){
    if(localStorage.getItem("loggedin") == "admin"){
      this.showUserNav = true;
    }
    else{
      this.showUserNav = false;
    }
  }
}


