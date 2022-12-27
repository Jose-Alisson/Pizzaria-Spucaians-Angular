import { SocialAuthService } from '@abacritt/angularx-social-login';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs';
import { AddressModel } from 'src/app/model/AddressModel';
import { AuthorizationModel } from 'src/app/model/AuthorizationModel';
import { SMS } from 'src/app/model/SMS';
import { UserModel } from 'src/app/model/UserModel';
import { SignInService } from 'src/app/shared/services/signIn/sign-in.service';
import { SignUpService } from 'src/app/shared/services/signUp/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../shared/styles/account.component.scss'],
})
export class SignUpComponent implements OnInit {
  error: any;
  count = 3;
  stepMsg = [
    'Defina seu usuario',
    'Defina seu apelido',
    'Adicone seu Whatsapp',
    'Adicione seu endereço',
  ];

  textButton = ['Prosseguir', 'Prosseguir', 'Pular', 'Pular'];

  address: AddressModel = {
    id: 0,
    nameAddress: '',
    cep: '',
    noth: '',
    locality: '',
  };

  authorization: AuthorizationModel = {
    id: 0,
    user: '',
    password: '',
    typeAuthorization: '',
  };

  user: UserModel = {
    id: 0,
    name: '',
    authorization: this.authorization,
    contact: '',
    addresses: [this.address],
  };

  confirm = {
    code: '',
    codigo: '',
    password: '',
  };

  mensagem =
    'Olá seu cóndigo de verificação é ' +
    this.confirm.code +
    '. Caso não Tenha sido vc que o solicito não compartilhe com ninguém';

  constructor(private signUpService: SignUpService, private router: Router) {}

  ngOnInit(): void {}

  verificar() {
    switch (this.count) {
      case 1:
        this.signUpService.isUserValid(this.user).subscribe(
          (data) => {
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
          }
        );
        break;
      case 2:
        this.signUpService.isUserValid(this.user).subscribe(
          (data) => {
            this.error = {
              name: data?.['name'],
            };
            if (this.error.name === undefined) {
              this.updateStep(+1);
            }
          }
        );
        break;
      case 3:
        if (this.getZapValue() > 0) {
          this.updateStep(+1);
        } else {
          this.updateStep(+1);
        }
        break;
      case 4:
        this.user.contact = '81' + this.user.contact;
        this.signUpService.save(this.user);
        this.router.navigate(['client']);
        break;
      default:
        break;
    }
  }

  voltar() {
    this.updateStep(-1)
  }

  charCode = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  generateCode() {
    while (this.confirm.code.length < 4) {
      this.confirm.code +=
        this.charCode[Math.floor(Math.random() * this.charCode.length - 1)];
    }
  }

  updateStep(value: number) {
    this.count += value;
    (<HTMLInputElement>document.getElementById('radio-' + this.count)).checked =
      true;
  }

  getZapValue() {
    return this.user.contact.length;
  }
}
