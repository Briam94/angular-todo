import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedorComponent } from './proveedor.component';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { AddProveedorComponent } from '../components/add-proveedor/add-proveedor.component';

import { FormsModule } from '@angular/forms';

@NgModule({

  imports: [
    CommonModule,
	ProveedorRoutingModule,
	FormsModule
	

  ],
	declarations: [ProveedorComponent,
		AddProveedorComponent]
})
export class ProveedorModule { }
