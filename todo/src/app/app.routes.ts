import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { InicioComponent } from  './components/inicio/inicio.component';
import { TaskComponent } from  './components/task/task.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RegistroComponent } from './components/registro/registro.component';

const APP_ROUTES: Routes = [
     { path: '', redirectTo: 'inicio', pathMatch: 'full' },     
	{ path: 'inicio', component: InicioComponent },
	{ path: 'task', component: TaskComponent },
	{ path: 'proyecto', component: ProyectosComponent },
	{ path: 'registro', component: RegistroComponent },
     { path: 'tarea', 
     loadChildren: './modules/task/task.module#TaskModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
