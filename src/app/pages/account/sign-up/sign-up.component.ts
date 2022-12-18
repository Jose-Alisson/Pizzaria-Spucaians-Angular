import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../../../shared/styles/account.component.scss'],
})
export class SignUpComponent implements OnInit {
  count = 1;
  textButton = 'Continuar';
  step = 1;
  maxStep = 3;

  constructor() {}

  ngOnInit(): void {}

  voltar() {
    if (this.step > 1) {
      this.step--;
      this.count--;
    }

    if (this.step == 4) {
      this.textButton = 'Criar';
    } else {
      this.textButton = 'Continuar';
    }

    (<HTMLInputElement>document.getElementById('radio-' + this.count)).checked =
      true;
  }

  verificar() {
    if (this.step < this.maxStep) {
      this.step++;
      this.count++;

      if (this.step == 3) {
        this.textButton = 'Criar';
      } else {
        this.textButton = 'Continuar';
      }

      if (this.count > 3) {
        this.count = 1;
      }

      (<HTMLInputElement>(
        document.getElementById('radio-' + this.count)
      )).checked = true;
    }
  }
}
