import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/UserModel';
import { SharAccService } from 'src/app/shared/services/sharAcc/shar-acc.service';
import { SignInService } from 'src/app/shared/services/signIn/sign-in.service';
import { SignUpService } from 'src/app/shared/services/signUp/sign-up.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../../shared/styles/account.component.scss'],
})
export class SignInComponent implements OnInit {
  error: any;

  autho = {
    user: '',
    password: '',
  };

  constructor(private signService: SignInService, private shaAcc: SharAccService,private router:Router) {}

  ngOnInit(): void {}

  login(autho: { user: string; password: string }) {
    this.signService.login(autho.user, autho.password).subscribe(
      (data: any) => {
        console.log(data);
        this.shaAcc.setCurrent(data)
        this.router.navigate(['client'])
        this.error = {};
      },
      (error: HttpErrorResponse) => {
        this.error = error.error;
        console.log(error.error);
      }
    );
  }
}
