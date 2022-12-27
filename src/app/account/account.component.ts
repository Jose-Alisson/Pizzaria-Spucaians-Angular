import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../shared/services/signIn/sign-in.service';
import { SignUpService } from '../shared/services/signUp/sign-up.service';
import { UserModel } from '../model/UserModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../shared/styles/account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(private auth: SocialAuthService) {}

  ngOnInit(): void {}

  login() {
    this.auth.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}

@Component({
  selector: 'google-button',
  template: '<asl-google-signin-button></asl-google-signin-button>',
})
export class GoogleButton {

  constructor( private social: SocialAuthService, private signService: SignInService, private signUpService: SignUpService ) {
    social.authState.subscribe((data) => {
      signService.isExist(data.email).subscribe((data2) => {
        if (data2) {
          let autho = {
            user: data.email,
            password: data.id,
          };
          this.login(autho)
        } else {
          let user: UserModel = {
            id: 0,
            name: data.firstName,
            authorization: {
              id: 0,
              user: data.email,
              password: data.id,
              typeAuthorization: 'client',
            },
            contact: '',
            addresses: [],
          };
          signUpService.save(user);
        }
      });
    });
  }

  login(autho: { user: string; password: string }) {
    this.signService.login(autho.user, autho.password).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.error);
      }
    );
  }
}
