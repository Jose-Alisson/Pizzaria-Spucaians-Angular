import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from '../pages/account/login/login.component';
import { SignUpComponent } from '../pages/account/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { FormsModule } from '@angular/forms';

const accountRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];
@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes),
    NgxMaskModule.forRoot(),
    FormsModule,
    SocialLoginModule,
  ]
})
export class AccountModule {}
