import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DevicesHttpService } from '../services/devices-http.service';
import { Output } from "@angular/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private appService: DevicesHttpService, private _route: ActivatedRoute, private route: Router) { }
  public username: any;
  public password: any;
  private data;
  ngOnInit() {
  }

  public doLogin: any = () => {
    this.data = {
      username: this.username,
      password: this.password
    }


    this.appService.doLoginPost(this.data).subscribe((apiResponse) => {
      console.log('apiResponse', apiResponse)
      if(apiResponse.status == 200){
        localStorage.setItem('loggedin', apiResponse.user);
      this.route.navigate(["main/home/computerlist"]);
      console.log("Login Successful");
      }
      else if (apiResponse.status == 400){
        alert(apiResponse.text);
        this.username = '';
        this.password= '';
      }
    }, (error) => {
      console.log(error)

    })
  }


}