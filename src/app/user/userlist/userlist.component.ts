import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { DevicesHttpService } from '../../services/devices-http.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  private users: any[];

  p: number = 1;

  constructor(private appService: DevicesHttpService,private user: UserServiceService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user.getAllUsers().subscribe(
      data => {
        console.log("Data Collected", data)
        this.users = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      })
  }
  public loggout() {
    this.appService.doLogout()
  }

  public deleteUser: any = (id) => {
    if (confirm("Are You Sure?")) {

      this.user.deleteUser(id).subscribe((apiResponse) => {

        if (apiResponse.status === 200) {

          console.log('Entry Deleted successfully');

          setTimeout(() => {

            this.ngOnInit()

          }, 500);

        } else {

          console.log("Error");

        }

      }, (err) => {

        console.error('some error occured');

      });
    }
    else {
      this.ngOnInit()
    }
  }

}
