import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ProveedoresInterface } from '../../models/proveedoresInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

	proveedoresCollection: AngularFirestoreCollection<ProveedoresInterface>;
	proveedores: Observable<ProveedoresInterface[]>;
	proveedoreDoc: AngularFirestoreDocument<ProveedoresInterface>;

  constructor(public afs: AngularFirestore) {
  	//recupera el objeto que se esta imprimiendo en getProveedores per no devuelve id
	  //this.proveedores = afs.collection('proveedores').valueChanges();

	  this.proveedoresCollection = afs.collection<ProveedoresInterface>('proveedores');
	  this.proveedores = this.proveedoresCollection.snapshotChanges().pipe(
	  	map(actions => actions.map( a => {
			  const data = a.payload.doc.data() as ProveedoresInterface;
			  const id = a.payload.doc.id;
			  return { id, ...data };
	  	})))

  }

  getProveedores(){
	  return this.proveedores;
  }

	addProveedor(proveedor: ProveedoresInterface) {
		console.log('NEW PROVEEDOR');
		this.proveedoresCollection.add(proveedor);
		alert('El proveedor ' + proveedor.nombre + ' ha sido guardado exitosamente');
	}

	deleteProveedor(proveedor: ProveedoresInterface) {
		console.log('NEW Delete');
		this.proveedoreDoc = this.afs.doc(`proveedores/${proveedor.id}`);
		this.proveedoreDoc.delete();
	}

	upDateProveedor(proveedor: ProveedoresInterface) {
		console.log('UPDATE PROVEEDOR');
		this.proveedoreDoc = this.afs.doc(`proveedores/${proveedor.id}`);
		this.proveedoreDoc.update(proveedor);
	}
}
