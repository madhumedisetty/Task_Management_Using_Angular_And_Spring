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
  selectedCategory: string = '';

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
        console.log('Current route:', this.router.url); // Debugging log
        this.showPieChart = this.router.url === '/tasks';
        console.log('showPieChart:', this.showPieChart); // Debugging log
      }
    });
  }

  updateCategory(newCategory: string): void {
    console.log('Category changed in AppComponent:', newCategory);
    this.selectedCategory = newCategory;
    this.filterTasksByCategory(newCategory);
  }
  
  filterTasksByCategory(category: string): void {
    if (category === '') {
      this.filteredTasks = this.allTasks;
    } else {
      this.filteredTasks = this.allTasks.filter(task => task.category === category);
    }
    console.log('Filtered tasks by category:', this.filteredTasks);
  }  

}