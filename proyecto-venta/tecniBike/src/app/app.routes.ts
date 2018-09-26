import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{ path: 'inicio', component: AppComponent },
	{
		path: 'proveedores',
		loadChildren: './modules/provedor/provedor.module#ProvedorModule'
	}
];



@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
