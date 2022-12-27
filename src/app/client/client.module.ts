import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from '../pages/home/home.component';
import { CartComponent } from '../pages/cart/cart.component';
import { AboutComponent } from '../pages/about/about.component';



@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    CartComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
