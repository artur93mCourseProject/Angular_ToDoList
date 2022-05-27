import { Component } from '@angular/core';
import { Task } from './task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string } | null  = null;
  taskName = 'Sugerowane zadanie';
  taskData = '';
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];

  constructor() {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date().toDateString(),
      };
  }

  clearTasks() {
    this.tasks = [];

  }

  createTask() {
    const task:Task = {
      name:this.taskName,
      deadline: this.taskData,
      done: false,
    }
    this.tasks.push(task)
    this.taskName = '';
    this.taskData = '';
  }


}
