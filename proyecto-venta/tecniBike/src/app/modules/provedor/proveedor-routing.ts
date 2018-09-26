import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvedorComponent } from './provedor.component';

const routes: Routes = [
	{ path: '', redirectTo: 'proveedor', pathMatch: 'full' },
	{ path: 'proveedor', component: ProvedorComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProveedorRoutingModule { }