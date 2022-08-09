import { Component, ViewChild, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROTAS } from './app-routing-module';
import { LoginService } from './pages/login/services/login.service';
import { AuthService } from './shared/auth/auth.service';
import { Permissao } from './shared/models/enums/permissao';
import { LayoutService } from './shared/services/layout.service';

@Component({
    selector: 'proj-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private loginService: LoginService,
        private authService: AuthService,
        private router: Router,
        private titleService: Title,
        private layoutService: LayoutService,
    ) { }

    title = 'projeto-teste';
    isLoggedIn$: Observable<boolean>;
    permissoesUsuario: Permissao[] = [];
    @ViewChild('drawer') drawer;
    drawerOpened: boolean = false;

    getUserName(): string {
        return this.authService.getUserName();
    }

    getLogin(): string {
        return this.authService.getLogin();
    }

    get isMobile(): boolean {
        return this.layoutService.isMobileSize;
    }

    ngOnInit(): void {
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.titleService.setTitle("Projeto Teste");
        this.permissoesUsuario = this.authService.getPermissions();
    }

    public onLogout(): void {
        if (this.drawerOpened)
            this.drawer.toggle();

        this.loginService.logout();
        this.router.navigate([ROTAS.login])
    }

    mostrarVersoes() {
        const url = '/historico-versoes';
        this.router.navigate([url])
    }
}
