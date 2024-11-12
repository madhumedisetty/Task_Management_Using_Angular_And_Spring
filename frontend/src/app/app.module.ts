import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { DeleteTaskComponent } from './components/delete-task/delete-task.component';
import { DatePipe } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
