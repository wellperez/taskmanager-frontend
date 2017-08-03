import { Component, Input } from '@angular/core';

import { Task } from './../shared/task.model';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent {
  @Input() public task: Task;

  constructor() {
    // this.task = new Task(1, 'Tarefa atribuída manualmente');
  }

}
