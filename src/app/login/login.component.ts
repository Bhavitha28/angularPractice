import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    userName: '',
    password: '',
  };
  isLoggedIn: boolean | undefined;
  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) { }

  ngOnInit(): void { 
this.isLoggedIn=false;
  
  }
  formSubmit() {

    if (this.loginData.userName.trim() == '' || this.loginData.userName == null) {
      this.snack.open('Username is Required !!', '', {
        duration: 3000,
      });
      return;

    }

    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open('Password is Required !!', '', {
        duration: 3000,
      });
      return;

    }


    this.login.login(this.loginData).subscribe(
      (data: any) => {
this.isLoggedIn=true;
if (this.isLoggedIn) {
  this.router.navigate(['dashboard']);

} else {
 this.isLoggedIn=false;

}


      },
      error => {
        console.log("error !!")
        console.log(error);
        this.snack.open('Invalid Details !! Try Again', '', {
          duration: 3000,
        });
      }
    )

  }
}