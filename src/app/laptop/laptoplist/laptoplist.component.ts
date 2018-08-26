import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { DevicesHttpService } from '../../services/devices-http.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LaptopService } from '../../services/laptop.service';


@Component({
  selector: 'app-laptoplist',
  templateUrl: './laptoplist.component.html',
  styleUrls: ['./laptoplist.component.css']
})
export class LaptoplistComponent implements OnInit {
  private laptops: any[];

  p: number = 1;

  constructor(private appService: DevicesHttpService,private laptop: LaptopService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.laptop.getAllLaptop().subscribe(
      data => {
        console.log("Data Collected", data)
        this.laptops = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      })
  }
  public loggout() {
    this.appService.doLogout()
  }

  public deleteLaptop: any = (id) => {
    if (confirm("Are You Sure?")) {

      this.laptop.deleteLaptop(id).subscribe((apiResponse) => {

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
