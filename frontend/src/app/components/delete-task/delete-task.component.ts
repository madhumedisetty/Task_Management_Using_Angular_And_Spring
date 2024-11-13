import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent {
 id:number=0;
 task: Task | null = null;

 constructor(
  private route: ActivatedRoute,
  private router: Router,
  private taskService: TaskService
) {}
ngOnInit() {
  this.id = +this.route.snapshot.paramMap.get('id')!;
  this.loadTask();
}

loadTask() {
  this.taskService.getTaskById(this.id).subscribe(
    (task) => {
      this.task = task;
    },
    (error) => {
      console.error('Error loading task:', error);
    }
  );
}


cancelDelete() {
  this.router.navigate(['/tasks']);
}

deleteTask() {
  this.taskService.deleteTask(this.id).subscribe(
    () => {
      // Task deleted, navigate to the task list
      this.router.navigate(['/tasks']);
    },
    (error) => {
      console.error('Error deleting task:', error);
    }
  );
}
}