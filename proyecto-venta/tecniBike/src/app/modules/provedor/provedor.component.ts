import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../services/proveedor.service';
import { ProveedorInterface } from '../../models/proveedorInterface';

@Component({
  selector: 'app-provedor',
  templateUrl: './provedor.component.html',
  styleUrls: ['./provedor.component.css']
})
export class ProvedorComponent implements OnInit {

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit() {
  	this.proveedorService.getProveedores().subscribe(proveedores => {
			console.log(proveedores);
  	});
  }

}
