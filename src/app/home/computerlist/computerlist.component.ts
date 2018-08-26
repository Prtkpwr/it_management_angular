import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DevicesHttpService } from '../../services/devices-http.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ComputerServiceService } from '../../services/computer-service.service'

@Component({
  selector: 'app-computerlist',
  templateUrl: './computerlist.component.html',
  styleUrls: ['./computerlist.component.css'],
  providers: [DevicesHttpService]
})
export class ComputerlistComponent implements OnInit {
  private data: any[];
  p: number = 1;

  constructor(private appService: DevicesHttpService, private computer: ComputerServiceService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.appService.isAdmin()
    
    this.computer.getAll().subscribe(
      data => {
        // console.log("Data Collected", data)
        this.data = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      });
      this.appService.checkForNav();
  }
  public loggout() {
    this.appService.doLogout()
  }

  public deleteEntry: any = (id) => {
    if (confirm("Are You Sure?")) {

      this.computer.deleteEntry(id).subscribe((apiResponse) => {

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
