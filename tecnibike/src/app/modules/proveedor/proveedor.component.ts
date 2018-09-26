import { Component, OnInit } from '@angular/core';

import { ProveedoresInterface } from '../../models/proveedoresInterface';
import { ProveedorService } from '../services/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

	proveedores: ProveedoresInterface[];
	editState: boolean = false;
	proveedorToEdit: ProveedoresInterface;

	constructor(private proveedoresService: ProveedorService) { }

	ngOnInit() {
		this.proveedoresService.getProveedores().subscribe(proveedores => {
			console.log(proveedores);
			this.proveedores = proveedores;
		})
  }

	editProveedor(event, proveedor:ProveedoresInterface){
		this.editState = true;
		this.proveedorToEdit = proveedor;
	}


	onUpdateProveedor(proveedor: ProveedoresInterface){
		this.proveedoresService.upDateProveedor(proveedor);
		this.clearState();
	}

	deleteProveedor(event, proveedor: ProveedoresInterface){
		this.proveedoresService.deleteProveedor(proveedor);
		this.clearState();
	}


	clearState() {
		this.editState = false;
		this.proveedorToEdit = null;
	}

}
