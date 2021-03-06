import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
              private route: Router) {
  }

  loginuser:User = {}  as User;
  message:string = "";

  ngOnInit(): void {
  }

  submit(email:string, pwd:string):void{
    this.userService.userLogin(email,pwd).subscribe(data => {
      console.log(data);
      if (data != null) {
        console.log("Login successful");
        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('user', JSON.stringify(data));
        this.route.navigateByUrl("/dash");
      }
      else {
        this.message = "Please check your userid and password";
        return
      }
      this.loginuser = data;
    });
  }


}
