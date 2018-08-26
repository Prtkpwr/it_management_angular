import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { DevicesHttpService } from './devices-http.service';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private _http: HttpClient, public route: Router, public appService: DevicesHttpService) { }

  private Url = this.appService.Url

  public getAllLaptop(): any {
    return this._http.get(this.Url + '/laptop/list')
  }

  public editLaptopFunction(data): Observable<any> {
    return this._http.put(`${this.Url}/laptop/edit/${data._id}`, data);
  }

  public deleteLaptop(_id): any {
    return this._http.delete(this.Url + '/laptop/delete/' + _id)
  }

  public createLaptopEntryFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('name', data.name)
      .set('department', data.department)
      .set('model', data.model )
      .set('serial', data.serial)
      .set('os', data.os)
      .set('msoffice', data.msoffice)
      .set('remarks', data.remarks)


    return this._http.post(`${this.Url}/laptop/create`, params);

  }

  public getSingleLaptop(_id): any {
    return this._http.get(this.Url + '/laptop/' + _id)

  }

}
