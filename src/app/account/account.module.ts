import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { SignInComponent } from '../pages/sign-in/sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent, GoogleButton } from './account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { NgxMaskModule } from 'ngx-mask';

const accountRoutes:Routes = [
  { path: "", redirectTo: 'sign-in', pathMatch: 'full'},
  { path: "sign-up", component: SignUpComponent},
  { path: 'sign-in', component: SignInComponent}
]

@NgModule({
  declarations: [
    AccountComponent,
    SignUpComponent,
    SignInComponent,
    GoogleButton
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes),
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgxMaskModule.forRoot()
  ]
})
export class AccountModule { }
