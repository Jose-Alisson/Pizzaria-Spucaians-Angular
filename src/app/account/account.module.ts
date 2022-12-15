import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { LoginComponent } from '../pages/account/login/login.component';
import { SignUpComponent } from '../pages/account/sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';

const accountRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];
@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes)
  ],
})
export class AccountModule {}
