import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../shared/styles/account.component.scss'],
})
export class LoginComponent implements OnInit {

  error:any

  authorization = {
    user: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router:Router) {}

  ngOnInit(): void {}

  login() {
    this.loginService.login(this.authorization).subscribe(data => {
      if(localStorage.getItem('currentLogin') != null){
        localStorage.setItem('curretlogin', JSON.stringify(data))
      } else {
        localStorage.removeItem('currentLogin')
        localStorage.setItem('curretlogin', JSON.stringify(data))
      }
      this.router.navigate(['client'])
    }, (error: HttpErrorResponse) => {
      this.error = error.message
      console.log(error)
    })
  }
}
