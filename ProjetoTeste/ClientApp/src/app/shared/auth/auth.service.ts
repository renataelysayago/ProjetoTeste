import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Permissao } from '../models/enums/permissao';
import { LoginResult } from './models/login-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = {
    username: 'authUsername',
    shortname: 'authUserShortName',
    login: 'login',
    token: 'authParams',
    permissoes: 'authPermissoes'
  };

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  get token(): string {
    return localStorage.getItem(this.storageKey.token)!;
  }

  getUserName(): string {
    const usershortname = localStorage.getItem(this.storageKey.shortname)!;
    const username = localStorage.getItem(this.storageKey.username)!;
    return (usershortname === undefined || usershortname === '' || usershortname === 'undefined') ? username : usershortname;
  }

  getLogin(): string {
    return localStorage.getItem(this.storageKey.login)!;
  }

  getPermissions(): Permissao[] {
    return JSON.parse(localStorage.getItem(this.storageKey.permissoes)!);
  }

  constructor() {
    if (localStorage.getItem(this.storageKey.token)) {
      this.loggedIn.next(!!localStorage.getItem(this.storageKey.token));
    }
   }

   public login(loginResult: LoginResult): void {
    localStorage.setItem(this.storageKey.token, loginResult.token);
    localStorage.setItem(this.storageKey.username, loginResult.user.name);
    localStorage.setItem(this.storageKey.shortname, loginResult.user.shortName);
    localStorage.setItem(this.storageKey.login, loginResult.user.login);
    localStorage.setItem(this.storageKey.permissoes, JSON.stringify(loginResult.permissoes));
    this.loggedIn.next(true);
  }

  public logout(): void {
    localStorage.removeItem(this.storageKey.token);
    localStorage.removeItem(this.storageKey.username);
    localStorage.removeItem(this.storageKey.shortname);
    localStorage.removeItem(this.storageKey.login);
    localStorage.removeItem(this.storageKey.permissoes);
    this.loggedIn.next(false);
  }

  isAuthorized(
    permissao: Permissao
  ): boolean {
    if (!permissao) {
      return true;
    }
    const permissoes = this.getPermissions();
    return (permissoes == null ? false : permissoes.includes(permissao));
  }
}
