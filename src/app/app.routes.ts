import { Routes } from '@angular/router';
import { HomeComponent } from './aula-rotas/home/home.component';
import { LoginComponent } from './aula-rotas/login/login.component';
import { CursosComponent } from './aula-rotas/cursos/cursos.component';
import { CursoDetalheComponent } from './aula-rotas/curso-detalhe/curso-detalhe.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cursos',
        component: CursosComponent
    },
    {
        path: 'curso/:id',
        component: CursoDetalheComponent
    }
];
