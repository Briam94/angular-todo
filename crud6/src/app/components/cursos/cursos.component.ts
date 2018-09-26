import { Component, OnInit } from '@angular/core';
import { CursoInterface } from '../../models/cursoInterface';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private cursosService: CursoService) { }

  ngOnInit() {
	this.cursosService.getCursos().subscribe(cursos => {
		console.log(cursos);
	})
  }

}
