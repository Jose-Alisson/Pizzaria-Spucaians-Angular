import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/model/UserModel';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private URL_API = 'http://localhost:8081/api/authorization/login';

  constructor(private http: HttpClient) {}

  login(autho: any) {
    return this.http.get<any>(this.URL_API, {
      headers: new HttpHeaders({ user: autho.user, password: autho.password }),
    });
  }
}
