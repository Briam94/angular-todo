import { Component, OnInit } from '@angular/core';
import {Task} from  "../../models/task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	owner:string;
	taskList: Task[];
	task: Task;
	status: string;

  constructor() { 
  	this.owner = "Leonardo Bustamante";
  	this.taskList = [
  	{	
  		id: "1",
  		name: "Lavar platos",
  		category: "casa"
  	},
  	{	
  		id: "2",
  		name: "Realizar tarea",
  		category: "Diplomado"
  	},
  	{	
  		id: "3",
  		name: "Reunión",
  		category: "Laboral"
  	}
  	];

  	this.task  = new Task;
  	this.status = "agregar";

  }

  ngOnInit() {
  }

  addTask() {
  	if(this.status=="agregar"){
  		this.taskList.push(this.task);
  	}
   	this.task  = new Task;
   	this.status="agregar";  	
  }

  editarTask(e, task: Task){
  	this.task = task;
  	this.status = "guardar";
  }

  deleteTask(e, task){
  	
    let index = this.taskList.findIndex(
        (taskM) => {return(taskM.name === task.name)} );
    this.taskList.splice(index,1);

  }


}
