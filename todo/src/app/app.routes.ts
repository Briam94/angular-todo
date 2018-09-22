import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { InicioComponent } from  './components/inicio/inicio.component';
import { TaskComponent } from  './components/task/task.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },     
	{ path: 'inicio', component: InicioComponent },
	{ path: 'task', component: TaskComponent },
	{ path: 'proyecto', component: ProyectosComponent },
	{ path: 'registro', component: RegistroComponent },
	{ path: 'login', component: LoginComponent },
     { path: 'tarea', 
     loadChildren: './modules/task/task.module#TaskModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
