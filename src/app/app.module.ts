import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {LoginComponent} from "./components/login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./services/user.service";
import {AuthService} from "./services/auth.service";
import {ReadingsService} from "./services/readings.service";
import {AppRoutingModule} from "./app.routing.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReadingsComponent} from "./components/readings/readings.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReadingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [UserService,AuthService,ReadingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
