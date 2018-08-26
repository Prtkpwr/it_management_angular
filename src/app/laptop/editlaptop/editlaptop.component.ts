import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Location} from '@angular/common';
import { DevicesHttpService } from '../../services/devices-http.service';
import { LaptopService } from '../../services/laptop.service';


@Component({
  selector: 'app-editlaptop',
  templateUrl: './editlaptop.component.html',
  styleUrls: ['./editlaptop.component.css']
})
export class EditlaptopComponent implements OnInit {

  constructor( private appService: DevicesHttpService,private laptop:LaptopService, private _route: ActivatedRoute, private router: Router,private _location: Location) { }

  private all: any = {};

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id')
    console.log(id)
    this.laptop.getSingleLaptop(id).subscribe(
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

    this.router.navigate(['/laptop/laptoplist']);

  }

  public editLaptopFunction: any = () => {
    let data = this.all
    this.laptop.editLaptopFunction(data)
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
