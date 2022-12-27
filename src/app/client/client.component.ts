import { Component, OnInit } from '@angular/core';
import { SharAccService } from '../shared/services/sharAcc/shar-acc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['../shared/styles/client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private sharAcc: SharAccService, router:Router) {
    if(sharAcc.get() === undefined){
      router.navigate(['account/sign-in'])
    }
  }

  ngOnInit(): void {
  }
}
