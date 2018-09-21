import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../../../models/task';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() public onSubmit = new EventEmitter<Task>();
  @Input() public task : Task;

  status :string;

  constructor() {
  	this.status = "Agregar";
  }

  ngOnInit() {
  }

  addTask(){
  	this.onSubmit.emit(this.task);
  	this.task  = new Task;
  }

}