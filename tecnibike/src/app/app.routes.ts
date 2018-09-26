import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { DashBoardComponent } from './components/dash-board/dash-board.component';

const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{ path: 'inicio', component: DashBoardComponent },
	{
		path: 'proveedor',
		loadChildren: './modules/proveedor/proveedor.module#ProveedorModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
