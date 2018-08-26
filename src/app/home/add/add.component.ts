import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesHttpService } from '../../services/devices-http.service';
import { ComputerServiceService } from '../../services/computer-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public name: String
  public department: String
  public motherboard: String
  public cpu: String
  public ram: String
  public hdd: String
  public monitor: String
  public keyboard: String
  public mouse: String
  public os: String
  public remarks: String

  constructor(public appService: DevicesHttpService, public computer: ComputerServiceService,
    public router: Router,
    vcr: ViewContainerRef) {
  }

  ngOnInit() {
  }
  public goToHome: any = () => {

    this.router.navigate(['/home']);

  } // end goToHome
  
  public loggout() {
    this.appService.doLogout()
  }


  public createEntryFunction: any = () => {
    let data = {
      "name": this.name || "",
      "department": this.department || "",
      "motherboard": this.motherboard || "",
      "cpu": this.cpu || "",
      "ram": this.ram || "",
      "hdd": this.hdd || "",
      "monitor": this.monitor || "",
      "keyboard": this.keyboard || "",
      "mouse": this.mouse || "",
      "os": this.os || "",
      "remarks": this.remarks || ""
    }
    console.log(data);
    this.computer.createEntryFunction(data)
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

