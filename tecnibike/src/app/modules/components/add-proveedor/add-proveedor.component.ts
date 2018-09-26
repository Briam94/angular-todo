import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { ProveedoresInterface } from '../../../models/proveedoresInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css']
})
export class AddProveedorComponent implements OnInit {

	proveedor: ProveedoresInterface = {
		cedula: '',
		nombre: '',
		marcas: '',
		correo: '',
		num_contacto: '',
		descrpcion: '',
		fecha: ''
	};

  constructor(private proveedoreServices: ProveedorService) { }

  ngOnInit() {
  }

	onGuardarProveedor(myForm: NgForm){
		if (myForm.valid == true) {
			const fechaNow = Date.now();
			this.proveedor.fecha = fechaNow;
			this.proveedoreServices.addProveedor(this.proveedor);
			myForm.reset();
		}
		else{
			alert('Campos INVALIDOS');
		}
	}

}
