import { Component, OnInit, OnDestroy } from '@angular/core';
import {Task} from  "../../models/task";
import { TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';

 
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {

	owner:string;
	taskList: Task[];
	task: Task;
	status: string;
  private _subscriptions: Subscription[] = [];

  constructor(public taskService :TaskService) { 
  	this.owner = "Leonardo Bustamante";
  	// this.taskList = [
  	// {	
  	// 	id: "1",
  	// 	name: "Lavar platos",
  	// 	category: "casa"
  	// },
  	// {	
  	// 	id: "2",
  	// 	name: "Realizar tarea",
  	// 	category: "Diplomado"
  	// },
  	// {	
  	// 	id: "3",
  	// 	name: "Reunión",
  	// 	category: "Laboral"
  	// }
  	// ];
  	this.taskList = [];

  	this.task  = new Task;
  	this.status = "agregar";

  }

  ngOnInit() {

  	this._subscriptions.push( this.taskService.getTasks().subscribe((tasks)=> 
      {
        this.taskList = tasks;
        console.log(tasks)
      }) );
  }

  ngOnDestroy(){
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  addTask() {
  //	if(this.status=="agregar"){
  //		this.taskList.push(this.task);
      this.taskService.addTask(this.task);
  //	}
   	this.task  = new Task;
   	this.status="agregar";  	
  }

  editarTask(e, task: Task){
  	this.task = task;
  	this.status = "guardar";
  }

  deleteTask(e, task){

    // let index = this.taskList.findIndex(
    //     (taskM) => {return(taskM.name === task.name)} );
    // this.taskList.splice(index,1);

    this.taskService.deleteTask(task);
  }


}
