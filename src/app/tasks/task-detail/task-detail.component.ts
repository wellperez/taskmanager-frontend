import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Task } from './../shared/task.model';
import { TaskService } from './../shared/task.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit {
  @Input() public task: Task;

  constructor(
    private TaskService: TaskService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.TaskService.getTask(+params['id']))
      .subscribe(task => this.task = task);
  }

}
