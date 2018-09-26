import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ProveedorInterface } from '../../models/proveedorInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

	proveedorCollection: AngularFirestoreCollection<ProveedorInterface>;
	proveedores: Observable<ProveedorInterface[]>;
	proveedorDoc: AngularFirestoreDocument<ProveedorInterface>;

  constructor(private afs: AngularFirestore) {
	  this.proveedores = afs.collection('proveedores').valueChanges();
  }

  getProveedores(){
	  return this.proveedores;
  }
}
