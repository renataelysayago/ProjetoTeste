import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  private defaultName = 'Erro desconhecido';

  private defaultDescription = 'Ocorreu um erro desconhecido';

  get name(): Observable<string> {
    return this.activatedRoute.paramMap
      .pipe(
        map(() => {
          const state = window.history.state as { name: string, description: string };
          return state?.name || this.defaultName;
        })
      );
  }

  get description(): Observable<string> {
    return this.activatedRoute.paramMap
      .pipe(
        map(() => {
          const state = window.history.state as { name: string, description: string };
          return state?.description?.toString() || this.defaultDescription;
        })
      );
  }

  goToError(name: string, description: string): void {
    this.router.navigate(['/erro'], {
      state: {
        name,
        description
      }
    });
  }

  goToMaintenance() : void {
    this.router.navigate(['/manutencao']);
  }

  goToPermissionError() : void {
    this.goToError('Usuário sem permissão', 'Parece que seu usuário não tem permissão para acessar esta página');
  }

  isValidationResultError(error: unknown): boolean {
    const isObject = typeof error === 'object' && !!error;

    return isObject && Object.keys(error).includes('errors');
  }
}
