import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Location} from '@angular/common';
import { DevicesHttpService } from '../../services/devices-http.service';
import { Router } from '@angular/router';
import { LaptopService } from '../../services/laptop.service';


@Component({
  selector: 'app-addlaptop',
  templateUrl: './addlaptop.component.html',
  styleUrls: ['./addlaptop.component.css']
})
export class AddlaptopComponent implements OnInit {

  public name: String
  public department: String
  public model: String
  public serial: String
  public os: String
  public msoffice: String
  public remarks: String

  constructor( public appService: DevicesHttpService, public laptop:LaptopService,
    public router: Router,private _location: Location) { }

  ngOnInit() {
  }
  public backClicked() {
    this._location.back();
  }

  public goToHome: any = () => {

    this.router.navigate(['/main/laptop/laptoplist']);

  } // 

  public createLaptopEntryFunction: any = () => {
    let data = {
      "name": this.name || "",
      "department": this.department || "",
      "model": this.model || "",
      "serial": this.serial || "",
      "os": this.os || "",
      "msoffice": this.msoffice || "",
      "remarks": this.remarks || ""
    
    }
    console.log(data);
    this.laptop.createLaptopEntryFunction(data)
      .subscribe((apiResponse) => {

        console.log("apiResponse", apiResponse);

        if (apiResponse.status === 200) {

          console.log('Entry Added successfully contact pratik');

          setTimeout(() => {

            this.backClicked();

          }, 1000);

        } else {

          console.log("Error");

        }

      }, (err) => {

        console.error('some error occured');

      });
    }
}
