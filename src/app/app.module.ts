import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminGuard } from './guards/admin.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  {
    path: 'client',
    component: ClientComponent,
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'admin',
    component: ClientComponent,
    canLoad: [AdminGuard],
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'account',
    component: AccountComponent,
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
