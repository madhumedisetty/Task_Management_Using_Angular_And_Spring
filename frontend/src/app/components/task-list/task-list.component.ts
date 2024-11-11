import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

 @Input() tasks : Task[]=[];
 selectedCategory: string = ''; // Selected category for filtering
 searchResults: any[] = [];
 selectedPriority: string = '';

 constructor(private taskService: TaskService, private httpClient: HttpClient){}

ngOnInit(): void {
  this.getTasks();
}

getTasks(): void {
  this.taskService.getTasks().subscribe((tasks) => {
    this.tasks = tasks;

  });

}

filterTasks(): void {
  if (this.selectedCategory === '' && this.selectedPriority === '') {
    this.getTasks();
  } else {
    this.taskService.getFilteredTasks(this.selectedCategory, this.selectedPriority).subscribe((filteredTasks) => {
      this.tasks = filteredTasks;
    });
  }
}

getPriorityClass(priority: string): string {
  switch (priority) {
    case 'High':
      return 'high-priority';
    case 'Medium':
      return 'medium-priority';
    case 'Low':
      return 'low-priority';
    default:
      return ''; // Handle other cases or no priority
  }
}

updateCompletionStatus(task: Task): void {
  // Send an HTTP request to update the completion status on the server.
  this.taskService.updateTaskCompletion(task.id, task.completed).subscribe(
    (response) => {
      console.log('Task completion status updated on the server:', response);
    },
    (error) => {
      console.error('Error updating task completion status:', error);

      // If there's an error, revert the local 'completed' property to its previous state.
      task.completed = !task.completed;
    }
  );
}


updatePriorityInTaskList(taskId: number, priority: string): void {
  const taskToUpdate = this.tasks.find((task) => task.id === taskId);
  if (taskToUpdate) {
    taskToUpdate.priority = priority;
  }
}

}
