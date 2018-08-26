import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesHttpService } from './devices-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private loginService: DevicesHttpService, public router: Router) { }
  canActivate() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(["/login"]);
    } else {
      return true;
    }
  }
}
