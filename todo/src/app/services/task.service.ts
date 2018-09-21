import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, 
	AngularFirestoreDocument } from 'angularfire2/firestore';
import { Task } from '../models/task';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskCollection :AngularFirestoreCollection <Task>; 
  taskDoc :AngularFirestoreDocument <Task>;
  tasks : Observable<Task[]>;

  constructor(private  readonly db :AngularFirestore) { 
  	this.taskCollection = db.collection('tasks');
  	this.tasks = this.taskCollection.valueChanges();
  }

  getTasks(){
  	return this.tasks;
  }

  addTask(task:Task){

    var id = task.id;
    if(!task.id){
      id = this.db.createId();
      task = {id, "name": task.name, "category": task.category};       
    }

    this.taskCollection.doc(id).set(task);
  }

  deleteTask(task:Task){
    this.taskCollection.doc(task.id).delete();
  }



}
