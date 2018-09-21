import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../../../models/task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

	@Input() public tareas : Task[];
    @Output() public onDelete = new EventEmitter<void>();
    @Output() public onEdit = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  deleteTask(e, task){
  	this.onDelete.emit(task);
  }

  editarTask(e, task){
  	this.onEdit.emit(task);
  }

}
