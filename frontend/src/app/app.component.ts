import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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
  showPieChart: boolean = false;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadAllTasks();
    this.checkIfHomepage();
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

  checkIfHomepage() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showPieChart = this.router.url === '/tasks';
      }
    });
  }
}