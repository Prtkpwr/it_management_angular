import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesHttpService } from './devices-http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  constructor(private loginService: DevicesHttpService, public router: Router) { }
  canActivate() {
    if (!this.loginService.isAdmin()) {
      this.router.navigate(["/home"]);
    } else {
      return true;
    }
  }
}
