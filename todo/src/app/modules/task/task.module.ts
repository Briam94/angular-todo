import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskService } from '../../services/task.service';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule
  ],
  declarations: [TaskComponent, TaskListComponent, TaskFormComponent],
  providers: [TaskService]
})
export class TaskModule { }
