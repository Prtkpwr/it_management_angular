import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { DevicesHttpService } from './devices-http.service';



@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  constructor(private _http: HttpClient, public route: Router, public appService: DevicesHttpService) { }
  
  private Url = this.appService.Url
  
  public getAllUsers(): any {
    return this._http.get(this.Url + '/user/list')
  }
  public editUserFunction(data): Observable<any> {


    return this._http.put(`${this.Url}/user/edit/${data._id}`, data);

  }
  public deleteUser(_id): any {
    return this._http.delete(this.Url + '/user/delete/' + _id)
  }
  public createUserEntryFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('email', data.email)


    return this._http.post(`${this.Url}/user/create`, params);

  }
  public getSingleUser(_id): any {
    return this._http.get(this.Url + '/user/' + _id)

  }

}
