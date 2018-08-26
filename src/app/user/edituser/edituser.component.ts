import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Location} from '@angular/common';
import { DevicesHttpService } from '../../services/devices-http.service';
import { UserServiceService } from '../../services/user-service.service';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private appService: DevicesHttpService,private user:UserServiceService, private _route: ActivatedRoute, private router: Router,private _location: Location) { }
  private all: any = {};
  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id')
    console.log(id)
    this.user.getSingleUser(id).subscribe(
      data => {
        console.log("Data Collected", data)
        if(data.name == "CastError"){
          this.goToHome()
        }
        else{

          this.all = data;
        }
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      });
  }
  public backClicked() {
    this._location.back();
  }
  public goToHome: any = () => {

    this.router.navigate(['/user/userlist']);

  }
  public editUserFunction: any = () => {
    let data = this.all
    this.user.editUserFunction(data)
      .subscribe((apiResponse) => {

        console.log("apiResponse", apiResponse);

        if (apiResponse.status === 200) {

          console.log('Entry Added successfully');

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
