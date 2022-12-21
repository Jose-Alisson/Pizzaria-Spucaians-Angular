import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from 'src/app/model/UserModel';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private URL_API = 'http://localhost:8081/api/user';

  constructor(private http: HttpClient) {}

  save(user: UserModel){
    return this.http.post<UserModel>(this.URL_API + '/save', user).subscribe()
  }

  isUserValid(user: UserModel) {
    return this.http.post<any>(this.URL_API + '/isValid', user);
  }
}
