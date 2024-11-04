import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';


const routes: Routes = [

  {path: 'create-task', component: CreateTaskComponent},

  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskListComponent},
  {path: 'update-task/:id', component:UpdateTaskComponent},
  {path: 'delete-task/:id', component: DeleteTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
