import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { DevicesHttpService } from './devices-http.service';



@Injectable({
  providedIn: 'root'
})
export class ComputerServiceService {

  constructor(private _http: HttpClient, public route: Router, public appService: DevicesHttpService) { }

  private Url = this.appService.Url;

  public getAll(): any {
    return this._http.get(this.Url + '/computer/list')

  }
  public deleteEntry(_id): any {
    return this._http.delete(this.Url + '/computer/delete/' + _id)

  }
  public updateEntryFunction(data): Observable<any> {


    return this._http.put(`${this.Url}/computer/edit/${data._id}`, data);

  }
  public createEntryFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('name', data.name)
      .set('department', data.department)
      .set('motherboard', data.motherboard)
      .set('cpu', data.cpu)
      .set('ram', data.ram)
      .set('hdd', data.hdd)
      .set('monitor', data.monitor)
      .set('keyboard', data.keyboard)
      .set('mouse', data.mouse)
      .set('os', data.os)
      .set('remarks', data.remarks)

    return this._http.post(`${this.Url}/computer/create`, params);

  }
  public getSingle(_id): any {
    return this._http.get(this.Url + '/computer/' + _id)

  }
}
