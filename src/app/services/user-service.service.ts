import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<User>> {
    return this.http.get<Array<User>>(
      'http://localhost:8080/user', {observe: 'body'}
      )
      ;
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(
      /*this.host.concat(this.usersUri), user [or]*/"http://localhost:8080/user", user
    );

  }
}
