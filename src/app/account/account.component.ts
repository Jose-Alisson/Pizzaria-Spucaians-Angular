import {
  GoogleLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../shared/styles/account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(private authService: SocialAuthService, private router: Router) {

  }

  ngOnInit(): void {}

  private alterAccess(data: string) {

  }
}
