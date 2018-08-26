import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DevicesHttpService } from '../../services/devices-http.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { providerDef } from '@angular/core/src/view';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers:[DevicesHttpService]
})
export class AdduserComponent implements OnInit {
  
  public username: String
  public password: String
  public firstName: String
  public lastName: String
  public email: String
  


  constructor(public appService: DevicesHttpService, public user:UserServiceService,
    public router: Router,private _location: Location,
    vcr: ViewContainerRef) {
  }

  ngOnInit() {
  }
  public backClicked() {
    this._location.back();
  }
  public goToHome: any = () => {

    this.router.navigate(['/home']);

  } // hello
  public createUserEntryFunction: any = () => {
    let data = {
      "username": this.username || "",
      "password": this.password || "",
      "firstName": this.firstName || "",
      "lastName": this.lastName || "",
      "email": this.email || ""
    
    }
    console.log(data);
    this.user.createUserEntryFunction(data)
      .subscribe((apiResponse) => {

        console.log("apiResponse", apiResponse);

        if (apiResponse.status === 200) {

          console.log('Entry Added successfully contact pratik');

          setTimeout(() => {

            this.goToHome();

          }, 1000);

        } else {

          console.log("Error");

        }

      }, (err) => {

        console.error('some error occured');

      });

  }

}
