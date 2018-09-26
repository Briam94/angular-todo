import { Component, OnInit } from '@angular/core';
import { UsuarioInterface } from '../models/usuariosInterface';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

  	this.usuarioService.getUsuarios().subscribe(usuario => {
			console.log(usuario);
  	})
  }

}
