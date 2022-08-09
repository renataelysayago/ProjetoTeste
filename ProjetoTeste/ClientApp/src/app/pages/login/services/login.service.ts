import { Observable, take, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from 'src/app/shared/auth/auth.service';
import { environment } from './../../../../environments/environment';
import { User } from 'src/app/shared/auth/models/user';
import { LoginResult } from 'src/app/shared/auth/models/login-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient, 
    private authService: AuthService,
  ) { 
  }

  private routes = {
    user: {
      login: '/user/login',
      logout: '/user/logout'
    }
  };

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public logout(): void {
    return this.authService.logout();
  }

  public login(user: User): Observable<LoginResult> {
    const path = environment.apiUrl + `${this.routes.user.login}`;

    return this.http.post<LoginResult>(path, user, this.httpOptions)
      .pipe(
        take(1),
        tap((LoginResult: LoginResult) => {
          this.authService.login(LoginResult);
        })
      )
  }
}
