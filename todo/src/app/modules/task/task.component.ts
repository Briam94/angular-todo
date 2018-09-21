import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from  '../../services/task.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit, OnDestroy {

   tareas : Task[];
   private _subscriptions: Subscription[] = [];
   tarea :Task;

  constructor(public tareaService :TaskService) {
  	this.tareas = [];
  	this.tarea = new Task;
   }

  ngOnInit() {
  	this._subscriptions.push(
  		this.tareaService.getTasks().subscribe((tasks)=> 
      {
        this.tareas = tasks;
      }) );
  }

  ngOnDestroy(){
    this._subscriptions.forEach(
    	subscription => subscription.unsubscribe());
  }

  deleteTask(task :Task){
    this.tareaService.deleteTask(task);
  }

  editTask(task :Task){
  	this.tarea = task;
  }

 procesarForm(task :Task){
	this.tareaService.addTask(task);
 }

}
