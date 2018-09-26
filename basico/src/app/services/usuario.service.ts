import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UsuarioInterface } from '../models/usuariosInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

	usuariosCollection: AngularFirestoreCollection<UsuarioInterface>;
	usuarios: Observable<UsuarioInterface[]>;
	usuaropDoc: AngularFirestoreDocument<UsuarioInterface>;

  	constructor(public afs: AngularFirestore) {
	  this.usuarios = afs.collection('usuarios').valueChanges();
  }

	getUsuarios(){
		return this.usuarios;
	}

	addUsuario() {
		console.log('New usuario');
	}

	deleteUsuario(){
		console.log('Delete Usuario');
	}

	updateUsuario(){
		console.log('Update Usuario');
	}

}
