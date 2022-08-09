import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { LoginService } from './services/login.service';
import { User } from './../../shared/auth/models/user';
import { ROTAS } from '../../app-routing-module';
import { Validators } from '@angular/forms';

@Component({
  selector: 'prnta-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    form: UntypedFormGroup;  
  errorMsg: string;

  private loginSubscription: Subscription;
  
  constructor(
    private fb: UntypedFormBuilder,
    private loginService: LoginService,
    private titleService: Title,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.titleService.setTitle("ProntABAN");
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  public login(): void{

    if(!this.form.valid) return;

    const user = this.form.getRawValue() as User;

    this.loginSubscription = this.loginService.login(user).subscribe({
      next: () => {
        this.router.navigate([ROTAS.root])
      },
      error: (response) => {
        this.errorMsg = (!response.error.message) ?
        'Não foi possível conectar ao servidor. Por favor, entre em contato com a administração.' : 
        response.error.message;
      },
    })
  }
}
