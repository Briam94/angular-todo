import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';
import { ProyectoInterface } from '../../models/proyectoInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

	proyecto: ProyectoInterface = {
		nombre: '',
		descripcion: '',
		fecha_inicio: '',
	};

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
  }

	onGuardarProyecto(myForm: NgForm){
		this.proyectoService.addProyecto(this.proyecto);
	}

}
