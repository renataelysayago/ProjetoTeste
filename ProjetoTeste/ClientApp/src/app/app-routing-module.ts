import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoVersoesComponent } from './pages/historico-versoes/historico-versoes.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { AuthGuard } from './shared/auth/auth.guard';

export const ROTAS = {
    root: '/',
    home: 'home',
    login: 'login',
    historicoVersoes: 'historico-versoes',
    erro: 'erro',
    rodada: 'rodadas',
    tarefa: 'tarefas',
}

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: ROTAS.login, component: LoginComponent },
    { path: ROTAS.historicoVersoes, component: HistoricoVersoesComponent },
    { path: ROTAS.home, component: HomeComponent, canActivate: [AuthGuard] },
    { path: ROTAS.erro, component: ErrorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
