import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['../shared/styles/client.component.scss'],
})
export class ClientComponent implements OnInit {

  constructor(private router: Router, private authService: SocialAuthService) {

  }

  ngOnInit(): void {}
}
