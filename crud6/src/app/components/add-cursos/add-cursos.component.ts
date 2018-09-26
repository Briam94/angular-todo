import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { CursoInterface } from '../../models/cursoInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.css']
})
export class AddCursosComponent implements OnInit {

	curso: CursoInterface = {
		nombre: '',
		formador: '',
		precio: '',
		idioma: '',
		tecnologia: '',
		fecha: '',
		descripcion: ''
	};

  	constructor(private cursoService: CursoService) { }

  	ngOnInit() {
  	}

	onGuardarCurso(myForm: NgForm) {
			const fechaNow = Date.now();
			this.curso.fecha = fechaNow;
			this.cursoService.addCurso(this.curso);

  	}

}
