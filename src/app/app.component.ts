import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gerenciador de Tarefas';

  // Ex sem construtor
  // task: Task = {
  //   id: 2,
  //   title: 'Enviar orçamento para o ciente XYZ'
  // };

  // task2: Task = new Task(21, 'Enviar orçamento para o ciente X');
}
