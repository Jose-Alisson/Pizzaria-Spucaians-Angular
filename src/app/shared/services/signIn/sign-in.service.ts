import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/UserModel';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private URL_API = 'http://localhost:8081/authorization';

  constructor(private http: HttpClient) {}

  public login( user: string, password: string) {
    return this.http.get<UserModel>(this.URL_API + '/login', {
      headers: { user: user, password: password },
    });
  }

  isExist(user:string){
    return this.http.get<any>(this.URL_API + '/isExist?user=' + user)
  }
}
