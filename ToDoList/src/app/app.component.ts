import {Component} from '@angular/core';
import {Task} from './task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  config: { [key: string]: string } | null = null;
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
      done: true,
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
    this.sortTask();
  }

  clearTasks() {
    this.tasks = [];

  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskData,
      done: false,
    }
    this.tasks.push(task)
    this.taskName = '';
    this.taskData = '';
    this.sortTask();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTask();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTask();
  }

  private sortTask() {
    this.tasks = this.tasks.sort((a: Task, b: Task) => a.done === b.done ? 0 : a.done ? 1 : -1)
  }
}
