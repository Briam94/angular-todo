import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ProyectoInterface } from '../models/proyectoInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

	proyectosCollection: AngularFirestoreCollection<ProyectoInterface>;
	proyectos: Observable<ProyectoInterface[]>;
	proyectoDocument: AngularFirestoreDocument<ProyectoInterface>;

  constructor(public afs: AngularFirestore) {
	  //this.proyectos = afs.collection('projects').valueChanges();
	  this.proyectosCollection = afs.collection<ProyectoInterface>('projects');
	  this.proyectos = this.proyectosCollection.snapshotChanges().pipe(
	  	map(actions => actions.map(a => {
			  const data = a.payload.doc.data() as ProyectoInterface;
			  const id = a.payload.doc.id;
			  return { id, ...data };
	  	}))
	  	)
  }

  getProyectos(){
	  return this.proyectos;
	}

	addProyecto(proyecto: ProyectoInterface) {
		console.log('NEW COURSE');
		this.proyectosCollection.add(proyecto);
	}

	deleteProyecto(proyecto: ProyectoInterface) {
		console.log('DELETE COURSE');
		this.proyectoDocument = this.afs.doc(`projects/${proyecto.id}`);
		this.proyectoDocument.delete();
	}

	updateProyecto(proyecto: ProyectoInterface) {
		console.log('UPDATE COURSE');
		this.proyectoDocument = this.afs.doc(`projects/${proyecto.id}`);
		this.proyectoDocument.update(proyecto);
	}
}
