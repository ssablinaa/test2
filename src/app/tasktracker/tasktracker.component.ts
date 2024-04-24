import { Component, OnInit } from '@angular/core';
import { TaskService } from '../core/services/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasktracker',
  templateUrl: './tasktracker.component.html',
  styleUrls: ['./tasktracker.component.scss'],
})
export class TaskTrackerComponent {
  tasks: Task[] = [];
  newTask: Partial<Task> = {
    type: 'task',
    status: 'open',
    title: '',
    creator: 'User',
  };
  editingTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getAllTasks();
  }

  addTask() {
    if (this.newTask.title) {
      this.taskService.addTask(this.newTask as Task);
      this.newTask = {
        type: 'task',
        priority: 'medium',
        status: 'open',
        title: '',
        creator: 'User',
      };
      this.tasks = this.taskService.getAllTasks(); // Обновляем список
    }
  }
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getAllTasks();
  }
  startEdit(task: Task) {
    this.editingTask = task;
  }
  saveEdit() {
    if (this.editingTask !== null) {
      const index = this.tasks.findIndex(
        (task) => task.id === this.editingTask!.id
      );
      if (index !== -1) {
        // Обновляем время последнего изменения
        this.editingTask.updatedAt = new Date();

        // Обновляем задачу в списке
        this.tasks[index] = { ...this.editingTask };

        // Сохраняем изменения в сервисе
        this.taskService.updateTask(this.tasks[index]);

        // Сбрасываем `editingTask` после сохранения
        this.editingTask = null;
      }
    }
  }

  cancelEdit() {
    this.editingTask = null;
  }
}
