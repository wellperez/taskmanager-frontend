import { Component, OnInit } from '@angular/core';

import { TaskService } from './../tasks/shared/task.service';
import { Task } from './../tasks/shared/task.model';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  public tasks: Task[];

  public constructor(private taskservice: TaskService) {
  }

  public ngOnInit() {
    this.taskservice.getImportantTasks()
      .then((tasks) => this.tasks = tasks);
  }
}
