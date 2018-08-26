import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DevicesHttpService } from '../../services/devices-http.service';
import { ComputerServiceService } from '../../services/computer-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [DevicesHttpService]
})
export class UpdateComponent implements OnInit {

  private all: any = {};

  constructor(private appService: DevicesHttpService, private computer: ComputerServiceService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id')
    console.log(id)
    this.computer.getSingle(id).subscribe(
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

  public goToHome: any = () => {

    this.router.navigate(['/home/computerlist']);

  } // end goToHome

  public loggout() {
    this.appService.doLogout()
  }


  public updateEntryFunction: any = () => {
    let data = this.all
    this.computer.updateEntryFunction(data)
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

  } // end createEntryFunction


}
