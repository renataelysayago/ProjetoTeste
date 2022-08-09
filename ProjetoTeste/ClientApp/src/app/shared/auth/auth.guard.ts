import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Permissao } from '../models/enums/permissao';
import { ErrorService } from '../services/error.service';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private errorService: ErrorService, private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const permissao = next.data['permissao'] as Permissao;
    return this.authService.isLoggedIn.pipe(
      take(1),
      map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return this.isAuthorized(
            permissao
          )
        }
        this.router.navigate(['/login']);
        return false;
      })
    );    
  }

  private isAuthorized(permissao: Permissao): boolean {
    const isAuthenticated = this.authService.isAuthorized(
      permissao
    );

    if (!isAuthenticated) { this.errorService.goToPermissionError(); }

    return isAuthenticated;
  }

}
