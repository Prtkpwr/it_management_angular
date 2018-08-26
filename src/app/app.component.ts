import { Component } from '@angular/core';
import { DevicesHttpService } from './services/devices-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [

  ]
})
export class AppComponent {
  title = 'app';

  constructor(private loginService: DevicesHttpService, public router: Router) {

  }

  


}

