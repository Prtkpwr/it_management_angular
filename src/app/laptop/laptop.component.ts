import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { DevicesHttpService } from '../services/devices-http.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LaptopService } from '../services/laptop.service';


@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  
  private laptops : any[];

  p: number = 1;

  constructor(private appService: DevicesHttpService, private laptop :LaptopService, private _route: ActivatedRoute, private router: Router) { }

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

}
