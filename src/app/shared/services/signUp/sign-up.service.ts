import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SMS } from 'src/app/model/SMS';
import { UserModel } from 'src/app/model/UserModel';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private URL_API = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  save(user: UserModel) {
    return this.http
      .post<UserModel>(this.URL_API + '/user/save', user)
      .subscribe();
  }

  isUserValid(user: UserModel) {
    return this.http.post<any>(this.URL_API + '/user/isValid', user);
  }

  evivar(sms: SMS) {
    return this.http.post<any>(this.URL_API + '/sendSMS', sms);
  }
}
