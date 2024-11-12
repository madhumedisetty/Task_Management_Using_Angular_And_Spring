import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8080/api/v1/tasks";

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseUrl}`)
  }

  createTask(task: Task): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,task)
  }

  getTaskById(id:number): Observable<Task>{
    return this.httpClient.get<Task>(`${this.baseUrl}/${id}`)
  }

  updateTask(id: number, task: Task): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, task)
  }

  deleteTask(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.baseUrl}/tasks`);
  }
  getFilteredTasks(category: string, priority: string): Observable<Task[]> {
    let params = new HttpParams();
    if (category) {
      params = params.set('category', category);
    }
    if (priority) {
      params = params.set('priority', priority);
    }
    return this.httpClient.get<Task[]>(`${this.baseUrl}/filter`, { params });
  }

  updateTaskCompletion(id: number, completed: boolean): Observable<Task> {
    const url = `${this.baseUrl}/${id}/completed`;
   // return this.httpClient.put<Task>(url, completed);
 
     // Send a PUT request to update the completion status
  return this.httpClient.put<Task>(url, null, {
    params: new HttpParams().set('completed', completed.toString()), // Send the 'completed' as a query parameter
  });
  }

  updateTaskPriority(taskId: number, priority: string): Observable<any> {
    const url = `${this.baseUrl}/${taskId}`;
    return this.httpClient.put(url, { priority });
  }
  

   // Define a method to search tasks by a search term
   searchTasksByTerm(searchTerm: string): Observable<Task[]> {
    const url = `${this.baseUrl}/search?query=${encodeURIComponent(searchTerm)}`;
    return this.httpClient.get<Task[]>(url);
  }
}
