import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Task Management Application';

  allTasks: Task[] = [];
  filteredTasks: Task[] = [];
  showSearchResults: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadAllTasks();
  }

  loadAllTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.allTasks = tasks;
      this.filteredTasks = tasks;
    });
  }

  searchTasks(searchTerm: string) {
    if (!searchTerm.trim()) {
      this.showSearchResults = false;
      this.filteredTasks = [];
    } else {
      this.showSearchResults = true;
      this.taskService.searchTasksByTerm(searchTerm).subscribe(
        (searchResults) => {
          this.filteredTasks = searchResults;
        },
        (error) => {
          console.error('Error searching tasks:', error);
        }
      );
    }
  }
}