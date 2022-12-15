import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from '../pages/client/home/home.component';
import { CartComponent } from '../pages/client/cart/cart.component';
import { AboutComponent } from '../pages/client/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const clientRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    CartComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes)
  ]
})
export class ClientModule { }
