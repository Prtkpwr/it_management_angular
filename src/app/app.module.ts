import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';


//router module used for setting up the application level route
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { DevicesHttpService } from './services/devices-http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginGuardService } from './services/login-guard.service';

import { AddComponent } from './home/add/add.component';
import { UpdateComponent } from './home/update/update.component';
import { AdminGuardService } from './services/admin-guard.service';
import { UserComponent } from './user/user.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { UserlistComponent } from './user/userlist/userlist.component';
import { ComputerServiceService } from './services/computer-service.service';
import {UserServiceService} from './services/user-service.service';
import { LaptopComponent } from './laptop/laptop.component';
import { AddlaptopComponent } from './laptop/addlaptop/addlaptop.component';
import { EditlaptopComponent } from './laptop/editlaptop/editlaptop.component';
import { LaptoplistComponent } from './laptop/laptoplist/laptoplist.component';
import { ComputerlistComponent } from './home/computerlist/computerlist.component';
import { MainComponent } from './main/main.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddComponent,
    UpdateComponent,
    UserComponent,
    AdduserComponent,
    EdituserComponent,
    UserlistComponent,
    LaptopComponent,
    AddlaptopComponent,
    EditlaptopComponent,
    LaptoplistComponent,
    ComputerlistComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'main', component:MainComponent, canActivate: [LoginGuardService],
        children:[
          { path: '', redirectTo: 'home/computerlist', pathMatch: 'full' },
          {
            path: 'user',component:UserComponent,canActivate: [LoginGuardService],
            children: [
              { path: '', redirectTo: 'userlist', pathMatch: 'full' },
              { path: 'userlist',canActivate: [AdminGuardService], component: UserlistComponent },
              { path: 'userlist/edit/:id',canActivate: [AdminGuardService], component: EdituserComponent },
              { path: 'userlist/adduser',canActivate: [AdminGuardService], component: AdduserComponent }]
          },
          {
            path: 'laptop',component:LaptopComponent,
            children: [
              { path: '', redirectTo: 'laptoplist', pathMatch: 'full' },
              { path: 'laptoplist',canActivate: [LoginGuardService], component: LaptoplistComponent },
              { path: 'laptoplist/edit/:id',canActivate: [LoginGuardService], component: EditlaptopComponent },
              { path: 'laptoplist/addlaptop',canActivate: [LoginGuardService], component: AddlaptopComponent }]
          },
          {
            path: 'home', component: HomeComponent,
            children: [
              { path: '', redirectTo: 'computerlist', pathMatch: 'full' },
              { path: 'computerlist', canActivate: [LoginGuardService], component: ComputerlistComponent },
              { path: 'computerlist/add', canActivate: [LoginGuardService], component: AddComponent },
            { path: 'computerlist/update/:id', canActivate: [LoginGuardService], component: UpdateComponent }]
          },]  
      },
      { path: '', redirectTo: 'main', pathMatch: 'full'},
      { path: '**', redirectTo: 'main', pathMatch: 'full'},
    ])
  ],
  providers: [DevicesHttpService,ComputerServiceService,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
