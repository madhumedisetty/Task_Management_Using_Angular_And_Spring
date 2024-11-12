import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];
  @Input() selectedCategory: string = '';
  @Output() tasksUpdated = new EventEmitter<Task[]>();
  @Output() categoryChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() tasksFiltered = new EventEmitter<Task[]>();

  selectedPriority: string = '';
  searchTerm: string = '';
  filteredTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.applyFiltersAndSort();
    });
  }

  applyFiltersAndSort(): void {
    this.filteredTasks = this.tasks.filter(task => {
      const categoryMatch = !this.selectedCategory || task.category === this.selectedCategory;
      const priorityMatch = !this.selectedPriority || task.priority === this.selectedPriority;
      const searchMatch = !this.searchTerm || 
        task.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return categoryMatch && priorityMatch && searchMatch;
    });
    this.sortTasksByDueDate();
    this.tasksFiltered.emit(this.filteredTasks);
    this.tasksUpdated.emit(this.filteredTasks);
  }

  sortTasksByDueDate(): void {
    this.filteredTasks.sort((a, b) => {
      const dateA = a.dueDate ? new Date(a.dueDate).getTime() : Number.MAX_VALUE;
      const dateB = b.dueDate ? new Date(b.dueDate).getTime() : Number.MAX_VALUE;
      return dateA - dateB;
    });
  }

  onCategoryChange(newCategory: string): void {
    this.selectedCategory = newCategory;
    this.categoryChanged.emit(this.selectedCategory);
    this.applyFiltersAndSort();
  }

  onPriorityChange(newPriority: string): void {
    this.selectedPriority = newPriority;
    this.applyFiltersAndSort();
  }

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.applyFiltersAndSort();
  }

  updateCompletionStatus(task: Task): void {
    this.taskService.updateTaskCompletion(task.id, task.completed).subscribe(
      (response) => {
        console.log('Task completion status updated on the server:', response);
      },
      (error) => {
        console.error('Error updating task completion status:', error);
        task.completed = !task.completed;
      }
    );
  }

  updatePriorityInTaskList(taskId: number, priority: 'High' | 'Medium' | 'Low'): void {
    const taskToUpdate = this.tasks.find((task) => task.id === taskId);
    if (taskToUpdate) {
      taskToUpdate.priority = priority;
      this.applyFiltersAndSort();
    }
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe(
      () => {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.applyFiltersAndSort();
      },
      (error) => console.error('Error deleting task:', error)
    );
  }
}