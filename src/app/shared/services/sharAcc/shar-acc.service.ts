import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/UserModel';


@Injectable({
  providedIn: 'root'
})
export class SharAccService {

  userModel!: UserModel;

  constructor() { }

  setCurrent(user:UserModel) {
     this.userModel = user;
  }

  get(){
    return this.userModel
  }
}
