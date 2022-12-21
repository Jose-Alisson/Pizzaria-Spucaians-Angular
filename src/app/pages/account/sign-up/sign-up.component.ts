import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressModel } from 'src/app/model/AddressModel';
import { UserModel } from 'src/app/model/UserModel';
import { SignUpService } from 'src/app/shared/services/signUp/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../../shared/styles/account.component.scss'],
})
export class SignUpComponent implements OnInit {
  error: any;

  user: UserModel = new UserModel();
  address: AddressModel = new AddressModel();

  confirm = { password: '' };
  codigo: string = '';

  count = 1;
  textButton = 'Continuar';
  maxStep = 4;

  constructor(private signUp: SignUpService, private router: Router) {}

  ngOnInit(): void {}

  voltar() {
    this.updateStep(-1);
  }

  verificar() {
    switch (this.count) {
      case 1:
        this.signUp.isUserValid(this.user).subscribe((data) => {
          this.error = {
            'authorization.user': data?.['authorization.user'],
            'authorization.password': data?.['authorization.password'],
          };
          if (
            this.error?.['authorization.user'] === undefined &&
            this.error?.['authorization.password'] === undefined &&
            this.user.authorization.password === this.confirm.password
          ) {
            this.updateStep(+1);
          }
        });
        break;
      case 2:
        this.signUp.isUserValid(this.user).subscribe((data) => {
          this.error = {
            name: data?.['name'],
          };
          if (this.error.name === undefined) {
            this.updateStep(+1);
          }
        });
        break;
      case 3:
        this.textButton = 'Criar';
        this.updateStep(+1);
        break;
      case 4:
        this.user.addresses.push(this.address);
        this.signUp.save(this.user);
        this.router.navigate(['client']);
        break;
      default:
        break;
    }
  }

  updateStep(count: number) {
    this.count += count;
    (<HTMLInputElement>document.getElementById('radio-' + this.count)).checked =
      true;
  }

  getZapVaue(): number {
    return (<HTMLInputElement>document.getElementById('zap')).value.length;
  }
}
