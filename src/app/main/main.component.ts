import { Component, OnInit } from '@angular/core';
import { DevicesHttpService } from '../services/devices-http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private appService: DevicesHttpService) { }
  showUserNav;
  ngOnInit() {
    this.showUserNavFun()
  }
  public loggout() {
    this.appService.doLogout()
  }
  public showUserNavFun(){
    if (localStorage.getItem('loggedin') == "admin"){
      this.showUserNav = true;
    } else {
      this.showUserNav = false;
    }
  }
}
