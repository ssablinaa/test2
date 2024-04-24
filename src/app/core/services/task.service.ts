import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private taskCounter = 1;

  getAllTasks(): Task[] {
    return this.tasks;
  }

  /*addTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Task {
    const newTask: Task = {
      ...task,
      id: this.taskCounter++,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.tasks.push(newTask);
    return newTask;
  }*/
  addTask(task: Partial<Task>): Task {
    const newTask: Task = {
      id: this.taskCounter++,
      type: task.type ?? 'task',
      priority: task.priority,
      status: task.status ?? 'open',
      title: task.title ?? 'Untitled Task',
      description: task.description,
      assignee: task.assignee,
      creator: task.creator ?? 'User',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.tasks.push(newTask);
    return newTask;
  }
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  updateTask(updatedTask: Task): void {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === updatedTask.id
    );
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = {
        ...updatedTask,
        updatedAt: new Date(),
      };
    }
  }
}
