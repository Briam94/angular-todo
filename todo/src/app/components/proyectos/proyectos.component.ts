import { Component, OnInit } from '@angular/core';
import { ProyectoInterface } from '../../models/proyectoInterface';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

	proyectos: ProyectoInterface[];
	editState: boolean = false;
	proyectoToEdit: ProyectoInterface;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit() {
  	this.proyectoService.getProyectos().subscribe(proyectos => {
			this.proyectos = proyectos;
  	})
  }

	editProyecto(event, proyecto: ProyectoInterface) {
	  this.editState = true;
	  this.proyectoToEdit = proyecto;
  }

  clearState(){
	  this.editState = false;
	  this.proyectoToEdit = null;
  }

	onUpdateProyecto(proyecto: ProyectoInterface) {
	  this.proyectoService.updateProyecto(proyecto);
	  this.clearState();
  }

	deleteProyecto(event, proyecto: ProyectoInterface) {
		this.proyectoService.deleteProyecto(proyecto);
		this.clearState();
	}

}
