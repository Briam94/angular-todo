import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CursoInterface } from '../models/cursoInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CursoService {

	cursosCollection: AngularFirestoreCollection<CursoInterface>;
	cursos: Observable<CursoInterface[]>;
	cursoDoc: AngularFirestoreDocument<CursoInterface>;

	constructor(public afs: AngularFirestore) {

		//this.cursos = afs.collection('cursos').valueChanges();

		this.cursosCollection = afs.collection<CursoInterface>('cursos');
		this.cursos = this.cursosCollection.snapshotChanges().pipe(
			map(actions => actions.map(a => {
				const data = a.payload.doc.data() as CursoInterface;
				const id = a.payload.doc.id;
				return { id, ...data };
			}))
		);
	}

	getCursos() {
		return this.cursos;
	}

	addCurso(curso: CursoInterface) {
		console.log('NEW COURSE');
		this.cursosCollection.add(curso);
	}

	deleteCurso() {
		console.log('DELETE COURSE');
	}

	updateCurso() {
		console.log('UPDATE COURSE');
	}

}
